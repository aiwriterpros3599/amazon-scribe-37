import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckIcon,
  CreditCardIcon,
  LockIcon,
  ShieldCheckIcon,
  XIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Logo from "@/components/Logo";
import Header from "@/components/Header";

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl font-bold mb-8">
              Create High-Converting Amazon Product Reviews in Seconds with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Generate professional, SEO-optimized content for your affiliate
              marketing business using the power of AI.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* How to Write Amazon Product Reviews Automatically Section */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                How to Write Amazon Product Reviews Automatically
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our Chrome extension works seamlessly with Amazon and Microsoft Edge to generate professional product reviews instantly
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {/* Block 1 */}
              <Card className="bg-background text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-3">🔧</div>
                  <CardTitle className="text-lg">Install Extension</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Add to Chrome or Edge in 30 seconds
                  </p>
                </CardContent>
              </Card>

              {/* Block 2 */}
              <Card className="bg-background text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-3">🛍️</div>
                  <CardTitle className="text-lg">Browse Amazon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Visit any product page on Amazon
                  </p>
                </CardContent>
              </Card>

              {/* Block 3 */}
              <Card className="bg-background text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-3">🤖</div>
                  <CardTitle className="text-lg">AI Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AI analyzes product details automatically
                  </p>
                </CardContent>
              </Card>

              {/* Block 4 */}
              <Card className="bg-background text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-3">✨</div>
                  <CardTitle className="text-lg">Generate Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Professional review created in seconds
                  </p>
                </CardContent>
              </Card>

              {/* Block 5 */}
              <Card className="bg-background text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-3">✏️</div>
                  <CardTitle className="text-lg">Edit & Customize</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Personalize with built-in editor
                  </p>
                </CardContent>
              </Card>

              {/* Block 6 */}
              <Card className="bg-background text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-3">💰</div>
                  <CardTitle className="text-lg">Earn Commissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Publish and start earning money
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg">
                Get Started in 30 Seconds
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Unlock the Power of AI for Affiliate Marketing
              </h2>
              <p className="text-xl text-muted-foreground">
                Supercharge your content creation with our advanced AI features
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Feature 1 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  Advanced AI Content Generation
                </h3>
                <p className="text-muted-foreground">
                  Generate high-quality, unique content for any Amazon product
                  in seconds. Our AI analyzes product details, customer
                  reviews, and market trends to create compelling reviews,
                  comparisons, and buying guides.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  SEO Optimization Suite
                </h3>
                <p className="text-muted-foreground">
                  Optimize your content for search engines with our built-in SEO
                  tools. Get keyword suggestions, meta description generation,
                  and content analysis to improve your rankings and drive more
                  traffic.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  Amazon Integration (All Domains)
                </h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate with Amazon's API to access real-time
                  product data, pricing, and availability. Our extension
                  works on all Amazon domains worldwide, including .com,
                  .co.uk, .de, and more.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  Built-In Content Editor
                </h3>
                <p className="text-muted-foreground">
                  Customize your content with our easy-to-use editor. Add
                  images, videos, and affiliate links to create engaging
                  product reviews that convert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start free and scale with our flexible subscription plans
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-12">
                <span
                  className={`mr-3 ${
                    !isAnnual ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isAnnual ? "bg-primary" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isAnnual ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span
                  className={`ml-3 ${
                    isAnnual ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  Annual{" "}
                  <span className="text-green-600 text-sm">(Save up to 29%)</span>
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Free Starter Plan */}
              <Card className="relative border-2">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">Free Starter</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground">
                    Perfect for trying out our AI
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      2,000 words per month
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Basic AI content generation (GPT-3.5)
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      5 Amazon product reviews per month
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Basic editor features
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Community support
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <XIcon className="h-5 w-5 text-red-500 mr-3" />
                      AI Affiliate Pro branding on content
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Start Free Forever
                  </Button>
                </CardContent>
              </Card>

              {/* Basic Pro Plan - Most Popular */}
              <Card className="relative border-2 border-primary shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">
                    ⭐ Most Popular
                  </Badge>
                </div>
                {isAnnual && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-green-500 text-white">Save 26%</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">Basic Pro</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      ${isAnnual ? "14" : "19"}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-green-600 text-sm font-semibold">
                      2 Months Free!
                    </p>
                  )}
                  <p className="text-muted-foreground">
                    For serious affiliate marketers
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      25,000 words per month
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Advanced AI generation (GPT-4 access)
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Unlimited Amazon product reviews
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Advanced editor with templates
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      SEO optimization suite
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Amazon integration (all domains)
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Priority email support
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Remove AI Affiliate Pro branding
                    </li>
                  </ul>
                  <Button className="w-full">Start 7-Day Free Trial</Button>
                </CardContent>
              </Card>

              {/* Elite Agency Plan */}
              <Card className="relative border-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white px-4 py-1">
                    ⚡ Best Value
                  </Badge>
                </div>
                {isAnnual && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-green-500 text-white">Save 29%</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">Elite Agency</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      ${isAnnual ? "35" : "49"}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-green-600 text-sm font-semibold">
                      Save $348/year
                    </p>
                  )}
                  <p className="text-muted-foreground">For agencies and teams</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Unlimited word count
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      All GPT-4 advanced features
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Bulk content generation
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      White-label rights
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      API access for integrations
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Advanced analytics & reporting
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Team collaboration (up to 5 users)
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      Priority support + 1-on-1 onboarding
                    </li>
                  </ul>
                  <Button className="w-full" variant="secondary">
                    Start 14-Day Free Trial
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Trust Signals */}
            <div className="text-center mt-12 space-y-4">
              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-5 w-5 mr-2 text-green-500" />
                  30-Day Money-Back Guarantee
                </div>
                <div className="flex items-center">
                  <CreditCardIcon className="h-5 w-5 mr-2 text-blue-500" />
                  Cancel Anytime
                </div>
                <div className="flex items-center">
                  <LockIcon className="h-5 w-5 mr-2 text-gray-500" />
                  SSL Secure
                </div>
              </div>
              <p className="text-muted-foreground">
                Trusted by 50,000+ Amazon Affiliates Worldwide
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-gradient-feature">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about AI Affiliate Pro
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can I change plans at any time?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes take effect immediately, and we'll prorate any
                  billing differences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What happens if I exceed my word limit?
                </AccordionTrigger>
                <AccordionContent>
                  If you reach your monthly word limit, you can either upgrade
                  your plan or wait until the next billing cycle. We'll notify
                  you when you're approaching your limit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Do you offer refunds for annual plans?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 30-day money-back guarantee on all plans,
                  including annual subscriptions. If you're not satisfied,
                  we'll refund your payment in full.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can I cancel my subscription anytime?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. You can cancel your subscription at any time from
                  your account dashboard. You'll continue to have access until
                  the end of your current billing period.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Is there a setup fee?
                </AccordionTrigger>
                <AccordionContent>
                  No setup fees ever. You only pay the monthly or annual
                  subscription price with no hidden charges.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Do unused words roll over to next month?
                </AccordionTrigger>
                <AccordionContent>
                  No, unused words don't roll over. Your word count resets at
                  the beginning of each billing cycle. We recommend choosing a
                  plan that fits your typical monthly usage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Logo and Social Section */}
              <div className="space-y-4">
                <Logo />
                <p className="text-sm text-muted-foreground">
                  AI-powered Chrome extension for Amazon affiliate success.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Product Section */}
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="/features" className="hover:text-primary transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="hover:text-primary transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="/how-it-works" className="hover:text-primary transition-colors">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="/reviews" className="hover:text-primary transition-colors">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Section */}
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="/help-center" className="hover:text-primary transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="hover:text-primary transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-primary transition-colors">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Section */}
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="/about" className="hover:text-primary transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="hover:text-primary transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="hover:text-primary transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-primary transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 AI Affiliate Pro. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
