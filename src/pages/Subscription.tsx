
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Download, Settings, TrendingUp, Calendar, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

interface SubscriptionData {
  subscribed: boolean;
  subscription_plan: 'free' | 'basic_pro' | 'elite_agency';
  subscription_status: string;
  current_period_end: string | null;
  trial_end: string | null;
}

interface UserData {
  words_used_current_month: number;
  words_limit: number;
  reviews_generated_current_month: number;
  subscription_plan: string;
  subscription_status: string;
  current_period_end: string | null;
  trial_end_date: string | null;
}

const Subscription = () => {
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { toast } = useToast();

  const fetchSubscriptionData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to view your subscription.",
          variant: "destructive",
        });
        return;
      }

      // Get subscription status from Stripe
      const { data: stripeData, error: stripeError } = await supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (stripeError) throw stripeError;
      setSubscriptionData(stripeData);

      // Get user data using RPC function with proper error handling
      try {
        const { data: dashboardData, error: dashboardError } = await supabase.rpc('get_user_dashboard_data' as any, {
          user_uuid: session.user.id
        });

        if (dashboardError) {
          console.error('Dashboard data error:', dashboardError);
          throw dashboardError;
        }

        if (dashboardData && typeof dashboardData === 'object' && 'user_info' in dashboardData) {
          setUserData(dashboardData.user_info as UserData);
        } else {
          throw new Error('Invalid dashboard data structure');
        }
      } catch (dashboardError) {
        console.error('Failed to fetch dashboard data, using fallback:', dashboardError);
        // Fallback to basic user info if dashboard function fails
        setUserData({
          words_used_current_month: 0,
          words_limit: 2000,
          reviews_generated_current_month: 0,
          subscription_plan: stripeData?.subscription_plan || 'free',
          subscription_status: stripeData?.subscription_status || 'free',
          current_period_end: stripeData?.current_period_end || null,
          trial_end_date: stripeData?.trial_end || null,
        });
      }

    } catch (error) {
      console.error('Error fetching subscription data:', error);
      toast({
        title: "Error",
        description: "Failed to load subscription data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchSubscriptionData();
  }, []);

  const handleCustomerPortal = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) return;

      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Customer portal error:', error);
      toast({
        title: "Error",
        description: "Failed to open customer portal. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchSubscriptionData();
  };

  const getPlanDisplayName = (plan: string) => {
    switch (plan) {
      case 'basic_pro': return 'Basic Pro';
      case 'elite_agency': return 'Elite Agency';
      default: return 'Free Starter';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'trialing': return 'bg-blue-500 text-white';
      case 'past_due': return 'bg-destructive text-destructive-foreground';
      case 'cancelled': return 'bg-muted text-muted-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading subscription data...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const wordsUsedPercentage = userData ? (userData.words_used_current_month / userData.words_limit) * 100 : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Subscription</h1>
            <p className="text-muted-foreground">Manage your AI Affiliate Pro subscription</p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} variant="outline">
            {refreshing ? "Refreshing..." : "Refresh Status"}
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Current Plan */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Current Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">
                    {getPlanDisplayName(userData?.subscription_plan || 'free')}
                  </h3>
                  <Badge className={getStatusColor(userData?.subscription_status || 'free')}>
                    {userData?.subscription_status || 'free'}
                  </Badge>
                </div>
                <Button onClick={handleCustomerPortal} variant="outline" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Manage Subscription
                </Button>
              </div>

              {userData?.current_period_end && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Next billing date: {formatDate(userData.current_period_end)}
                </div>
              )}

              {userData?.trial_end_date && (
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <AlertCircle className="h-4 w-4" />
                  Trial ends: {formatDate(userData.trial_end_date)}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Usage Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Usage This Month
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Words Used</span>
                  <span>{userData?.words_used_current_month || 0} / {userData?.words_limit || 0}</span>
                </div>
                <Progress value={wordsUsedPercentage} className="h-2" />
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span>Reviews Generated</span>
                  <span className="font-medium">{userData?.reviews_generated_current_month || 0}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Billing Portal</h3>
                  <p className="text-sm text-muted-foreground">Update payment methods</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Download className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h3 className="font-medium">Download Extension</h3>
                  <p className="text-sm text-muted-foreground">Get Chrome extension</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-medium">Usage Analytics</h3>
                  <p className="text-sm text-muted-foreground">View detailed stats</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Settings className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-medium">Account Settings</h3>
                  <p className="text-sm text-muted-foreground">Manage preferences</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
