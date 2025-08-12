
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CHECK-SUBSCRIPTION] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    
    const user = userData.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");
    logStep("User authenticated", { userId: user.id, email: user.email });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    // Check if customer exists
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    
    if (customers.data.length === 0) {
      logStep("No customer found, updating unsubscribed state");
      
      // Update user in database
      await supabaseClient.from("users").upsert({
        id: user.id,
        email: user.email,
        subscription_status: 'free',
        subscription_plan: 'free',
        current_period_end: null,
        trial_end_date: null,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'id' });

      return new Response(JSON.stringify({ 
        subscribed: false,
        subscription_plan: 'free',
        subscription_status: 'free',
        current_period_end: null,
        trial_end: null
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    const customerId = customers.data[0].id;
    logStep("Found Stripe customer", { customerId });

    // Get active subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "all",
      limit: 1,
    });

    let subscriptionPlan = 'free';
    let subscriptionStatus = 'free';
    let currentPeriodEnd = null;
    let trialEnd = null;
    const hasActiveSub = subscriptions.data.length > 0 && 
      ['active', 'trialing'].includes(subscriptions.data[0].status);

    if (subscriptions.data.length > 0) {
      const subscription = subscriptions.data[0];
      subscriptionStatus = subscription.status;
      currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString();
      
      if (subscription.trial_end) {
        trialEnd = new Date(subscription.trial_end * 1000).toISOString();
      }

      // Determine plan from price
      const priceId = subscription.items.data[0].price.id;
      const price = await stripe.prices.retrieve(priceId);
      const amount = price.unit_amount || 0;

      if (amount >= 4900 || amount >= 3500) {
        subscriptionPlan = 'elite_agency';
      } else if (amount >= 1900 || amount >= 1400) {
        subscriptionPlan = 'basic_pro';
      }

      logStep("Subscription found", { 
        subscriptionId: subscription.id, 
        status: subscriptionStatus,
        plan: subscriptionPlan,
        currentPeriodEnd,
        trialEnd
      });
    }

    // Update user in database
    await supabaseClient.from("users").upsert({
      id: user.id,
      email: user.email,
      stripe_customer_id: customerId,
      subscription_status: subscriptionStatus,
      subscription_plan: subscriptionPlan,
      current_period_end: currentPeriodEnd,
      trial_end_date: trialEnd,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'id' });

    logStep("Updated database with subscription info", { 
      subscribed: hasActiveSub, 
      subscriptionPlan,
      subscriptionStatus
    });

    return new Response(JSON.stringify({
      subscribed: hasActiveSub,
      subscription_plan: subscriptionPlan,
      subscription_status: subscriptionStatus,
      current_period_end: currentPeriodEnd,
      trial_end: trialEnd
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in check-subscription", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
