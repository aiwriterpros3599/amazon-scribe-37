
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

    // Get user from database
    const { data: dbUser } = await supabaseClient
      .from("users")
      .select("*")
      .eq("id", user.id)
      .single();

    if (!dbUser?.stripe_customer_id) {
      logStep("No Stripe customer found, updating as free user");
      await supabaseClient
        .from("users")
        .update({
          subscription_status: 'free',
          subscription_plan: 'free',
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      return new Response(JSON.stringify({
        subscribed: false,
        subscription_plan: 'free',
        subscription_status: 'free'
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Check Stripe subscription status
    const subscriptions = await stripe.subscriptions.list({
      customer: dbUser.stripe_customer_id,
      status: "all",
      limit: 1,
    });

    let subscriptionData = {
      subscribed: false,
      subscription_plan: 'free' as const,
      subscription_status: 'free' as const,
      current_period_end: null as string | null,
      trial_end: null as string | null,
    };

    if (subscriptions.data.length > 0) {
      const subscription = subscriptions.data[0];
      const isActive = ['active', 'trialing'].includes(subscription.status);
      
      // Determine plan from price
      let plan = 'free';
      if (subscription.items.data[0]) {
        const amount = subscription.items.data[0].price.unit_amount || 0;
        if (amount >= 40000) plan = 'elite_agency';
        else if (amount >= 1500) plan = 'basic_pro';
      }

      subscriptionData = {
        subscribed: isActive,
        subscription_plan: plan as 'free' | 'basic_pro' | 'elite_agency',
        subscription_status: subscription.status as any,
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        trial_end: subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null,
      };

      logStep("Subscription found", { 
        subscriptionId: subscription.id, 
        status: subscription.status, 
        plan 
      });
    }

    // Update user in database
    await supabaseClient
      .from("users")
      .update({
        subscription_status: subscriptionData.subscription_status,
        subscription_plan: subscriptionData.subscription_plan,
        current_period_end: subscriptionData.current_period_end,
        trial_end_date: subscriptionData.trial_end,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id);

    logStep("Updated user subscription data", subscriptionData);

    return new Response(JSON.stringify(subscriptionData), {
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
