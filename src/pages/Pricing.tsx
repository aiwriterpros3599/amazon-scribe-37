
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Zap, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [loading, setLoading] = useState<string | null>(null);
  const { toast } = useToast();

  // Updated pricing to match the exact specifications
  const plans = [
    {
      id: 'free',
      name: 'Free Starter',
      description: 'Perfect for trying out AI content generation',
      monthlyPrice: 0,
      yearlyPrice: 0,
      wordLimit: '2,000 words/month',
      features: [
        'Basic AI review generation',
        'Amazon product analysis',
        'Chrome extension access',
        'Email support',
        '5 saved templates'
      ],
      icon: <Zap className="h-6 w-6" />,
      popular: false,
      cta: 'Get Started Free',
      trialDays: 0
    },
    {
      id: 'basic_pro',
      name: 'Basic Pro',
      description: 'Ideal for content creators and bloggers',
      monthlyPrice: 19,
      yearlyPrice: 14, // $14/month when billed yearly ($168 total)
      wordLimit: '25,000 words/month',
      features: [
        'Advanced AI content generation',
        'SEO optimization tools',
        'Bulk content creation',
        'Priority email support',
        'Unlimited saved templates',
        'Export to multiple formats',
        'Analytics dashboard'
      ],
      icon: <Star className="h-6 w-6" />,
      popular: true,
      cta: 'Start 7-Day Free Trial',
      trialDays: 7
    },
    {
      id: 'elite_agency',
      name: 'Elite Agency',
      description: 'For agencies and power users',
      monthlyPrice: 49,
      yearlyPrice: 35, // $35/month when billed yearly ($420 total)
      wordLimit: 'Unlimited words/month',
      features: [
        'All Basic Pro features',
        'Team collaboration tools',
        'White-label options',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'Priority support (24/7)',
        'Advanced analytics',
        'Custom templates'
      ],
      icon: <Crown className="h-6 w-6" />,
      popular: false,
      cta: 'Start 14-Day Free Trial',
      trialDays: 14
    }
  ];

  const handleSubscribe = async (planId: string) => {
    if (planId === 'free') {
      toast({
        title: "Free Plan Active",
        description: "You're already on the free plan. Sign up to get started!",
      });
      return;
    }

    setLoading(planId);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to subscribe to a plan.",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          plan: planId,
          period: billingPeriod,
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription Error",
        description: "Failed to start subscription process. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return 'Free';
    const price = billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
    const period = billingPeriod === 'yearly' ? '/month' : '/month';
    return `$${price}${period}`;
  };

  const getAnnualTotal = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return null;
    return billingPeriod === 'yearly' ? plan.yearlyPrice * 12 : null;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return null;
    const monthlyTotal = plan.monthlyPrice * 12;
    const yearlyTotal = plan.yearlyPrice * 12;
    const savings = monthlyTotal - yearlyTotal;
    const percentage = Math.round((savings / monthlyTotal) * 100);
    return { amount: savings, percentage };
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Scale your AI content generation with plans designed for every need
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={billingPeriod === 'monthly' ? 'text-foreground font-medium' : 'text-muted-foreground'}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingPeriod === 'yearly' ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={billingPeriod === 'yearly' ? 'text-foreground font-medium' : 'text-muted-foreground'}>
              Yearly
              <span className="ml-2 text-sm bg-success/10 text-success px-2 py-1 rounded-full">
                Save up to 29%
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const savings = getSavings(plan);
            const annualTotal = getAnnualTotal(plan);
            
            return (
              <Card 
                key={plan.id} 
                className={`relative ${
                  plan.popular 
                    ? 'border-primary shadow-lg ring-1 ring-primary/20' 
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="pt-4">
                    <div className="text-4xl font-bold text-foreground">
                      {getPrice(plan)}
                    </div>
                    {billingPeriod === 'yearly' && annualTotal && (
                      <div className="text-sm text-muted-foreground mt-1">
                        ${annualTotal}/year
                      </div>
                    )}
                    {billingPeriod === 'yearly' && savings && (
                      <div className="text-sm text-success mt-1">
                        Save ${savings.amount}/year ({savings.percentage}% off)
                      </div>
                    )}
                    <div className="text-sm text-muted-foreground mt-2">
                      {plan.wordLimit}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={loading === plan.id}
                  >
                    {loading === plan.id ? "Processing..." : plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>All plans include our 30-day money-back guarantee</p>
          <p>Questions? Contact us at support@aiaffiliatepro.com</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
