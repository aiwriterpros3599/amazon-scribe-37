import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckIcon, StarIcon, ArrowRightIcon, RocketIcon, ZapIcon, ShieldCheckIcon, UsersIcon, TrendingUpIcon, AwardIcon, TargetIcon, GlobeIcon, SearchIcon, EditIcon, BarChart3Icon, ImageIcon, BrainCircuitIcon, DollarSignIcon, DownloadIcon, MailIcon, CrownIcon } from "lucide-react";
import heroImage from "@/assets/hero-amazon-ai.jpg";
import featuresImage from "@/assets/features-showcase.jpg";
import successImage from "@/assets/success-metrics.jpg";
import Header from "@/components/Header";

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic-pro");
  const [billingCycle, setBillingCycle] = useState("annual");

  // Schema.org structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Affiliate Pro - Amazon Product Review Generator",
    "description": "The #1 Chrome extension for generating Amazon product reviews automatically using AI. Create SEO-optimized affiliate content in seconds.",
    "applicationCategory": "BrowserApplication",
    "operatingSystem": "Chrome",
    "offers": {
      "@type": "Offer",
      "price": "19",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "50000"
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Hero Section - Full Width */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="w-full px-6 py-16 lg:py-24 relative z-10">
            <div className="max-w-7xl mx-auto text-center space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                The #1 Chrome Extension for Amazon Product Reviews - Generate High-Converting Content in{" "}
                <span className="text-green-400">Seconds</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
                AI-Powered Amazon Affiliate Content Generator | 50,000+ Reviews Created | Works on All Amazon Domains | Best Chrome Extension for Amazon Affiliates 2025
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="xxl" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4">
                  Generate Amazon Reviews Now
                </Button>
                <Button variant="outline" size="xl" className="border-white/40 text-white hover:bg-white/10 font-medium">
                  See How It Works
                </Button>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                  <span>4.9/5 Rating (50,000+ Users)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                  <span>5,000+ Reviews Generated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                  <span>Works on 50+ Amazon Domains</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Write Amazon Product Reviews Automatically Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-600">
                How to Write Amazon Product Reviews Automatically
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our AI tool that creates product reviews from Amazon links in 5 simple steps.
                Generate Amazon affiliate content with AI in under 60 seconds.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Install Chrome Extension",
                  description: "Install our Chrome extension in 30 seconds from the Chrome Web Store. Compatible with all Chrome browsers and works on Windows, Mac, and Linux systems.",
                  icon: <GlobeIcon className="w-8 h-8" />,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  step: "2",
                  title: "Visit Amazon Product Page",
                  description: "Visit any Amazon product page on supported domains. Works on amazon.com, amazon.co.uk, amazon.de, amazon.fr, amazon.ca, and 50+ more Amazon domains worldwide.",
                  icon: <SearchIcon className="w-8 h-8" />,
                  color: "from-green-500 to-green-600"
                },
                {
                  step: "3",
                  title: "Click AI Affiliate Pro Icon",
                  description: "Click the AI Affiliate Pro icon in your browser toolbar. Our extension automatically detects the product and extracts all necessary data for review generation.",
                  icon: <ZapIcon className="w-8 h-8" />,
                  color: "from-purple-500 to-purple-600"
                },
                {
                  step: "4",
                  title: "Generate Professional Reviews",
                  description: "Watch as professional product reviews are generated instantly using advanced AI. Custom detailed, persuasive, and SEO-optimized content in seconds.",
                  icon: <BrainCircuitIcon className="w-8 h-8" />,
                  color: "from-orange-500 to-orange-600"
                },
                {
                  step: "5",
                  title: "Edit in Built-in SEO Editor",
                  description: "Edit and customize in our built-in SEO editor with real-time word count, readability analysis, and optimization suggestions for better rankings.",
                  icon: <EditIcon className="w-8 h-8" />,
                  color: "from-red-500 to-red-600"
                },
                {
                  step: "6",
                  title: "Publish & Earn Commissions",
                  description: "Copy your optimized content and publish to your website, blog, or social media. Start earning Amazon affiliate commissions immediately.",
                  icon: <DollarSignIcon className="w-8 h-8" />,
                  color: "from-green-600 to-emerald-600"
                }
              ].map((item, index) => (
                <Card key={index} className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group bg-white">
                  <CardHeader className="text-center pb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary/30 mb-2">{item.step}</div>
                    <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">Works perfectly with Chrome AND Microsoft Edge browsers</p>
              <Button variant="cta" size="xxl" className="font-bold text-lg px-10 py-5">
                <RocketIcon className="w-6 h-6 mr-3" />
                Get Started in 30 Seconds
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section - Enhanced */}
        <section id="how-it-works" className="py-24 bg-gradient-feature">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl lg:text-6xl font-bold">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Create professional Amazon product reviews in 4 simple steps. 
                Our AI does the heavy lifting while you focus on earning commissions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Install Extension",
                  description: "Add to Chrome in 30 seconds. Works on all Amazon domains worldwide including .com, .co.uk, .de, and more.",
                  icon: <GlobeIcon className="w-10 h-10" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "02", 
                  title: "Visit Product Page",
                  description: "Browse any Amazon product. Our AI automatically detects and analyzes product information and customer reviews.",
                  icon: <SearchIcon className="w-10 h-10" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "03",
                  title: "Generate Content",
                  description: "One click creates professional reviews, comparisons, buying guides, and SEO-optimized content instantly.",
                  icon: <BrainCircuitIcon className="w-10 h-10" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  step: "04",
                  title: "Edit & Publish",
                  description: "Customize in our built-in editor, add affiliate links, and publish to your website for instant commissions.",
                  icon: <EditIcon className="w-10 h-10" />,
                  color: "from-orange-500 to-red-500"
                }
              ].map((item, index) => (
                <Card key={index} className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group bg-background/50 backdrop-blur-sm">
                  <CardHeader className="text-center pb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="text-5xl font-bold text-primary/20 mb-2">{item.step}</div>
                    <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">{item.description}</p>
                  </CardContent>
                  {/* Connection line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <Button variant="cta" size="xxl" className="font-bold text-lg px-10 py-5">
                <RocketIcon className="w-6 h-6 mr-3" />
                Get Started in 30 Seconds
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section - Enhanced */}
        <section id="features" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Everything You Need to Dominate{" "}
                <span className="text-primary">Amazon Affiliate Marketing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Advanced AI tools designed to maximize your affiliate revenue and streamline content creation. 
                No technical skills required - just install and start earning.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
              <div className="space-y-10">
                {[
                  {
                    title: "Advanced AI Content Generation",
                    description: "Generate product reviews, comparisons, and buying guides using cutting-edge GPT-4 models. Create content that converts in seconds with human-like quality and persuasive copy.",
                    icon: <BrainCircuitIcon className="w-10 h-10" />,
                    color: "from-purple-500 to-indigo-500"
                  },
                  {
                    title: "SEO Optimization Suite", 
                    description: "Automatic meta titles, descriptions, schema markup, and keyword optimization. Rank higher on Google and get more organic traffic to your affiliate links.",
                    icon: <SearchIcon className="w-10 h-10" />,
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Smart Image Management",
                    description: "Optimal image dimensions, automatic alt text generation, and AI-powered image optimization for better conversions and faster loading times.",
                    icon: <ImageIcon className="w-10 h-10" />,
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    title: "Universal Amazon Integration",
                    description: "Automatically detects product data from any Amazon domain. Seamless affiliate link insertion with commission tracking and analytics.",
                    icon: <GlobeIcon className="w-10 h-10" />,
                    color: "from-orange-500 to-red-500"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex space-x-6 group">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      {feature.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={featuresImage}
                    alt="AI Affiliate Pro features showcase"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-success text-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">10x</div>
                    <div className="text-sm font-medium">Faster Content</div>
                  </div>
                </div>
                <div className="absolute -top-8 -left-8 bg-primary text-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">AI</div>
                    <div className="text-sm font-medium">Powered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-feature">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Every Type of Amazon Affiliate Content You Need
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our AI content generator creates all the high-converting content types that make money
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Amazon Product Reviews",
                  description: "Detailed, persuasive reviews with pros/cons, ratings, and buying recommendations",
                  icon: <StarIcon className="w-8 h-8" />,
                  features: ["SEO-optimized titles", "Star ratings system", "Detailed analysis", "Purchase recommendations"]
                },
                {
                  title: "Product Comparisons", 
                  description: "Side-by-side comparisons helping customers choose between similar products",
                  icon: <BarChart3Icon className="w-8 h-8" />,
                  features: ["Feature comparisons", "Price analysis", "Winner selection", "Comparison tables"]
                },
                {
                  title: "Buying Guides",
                  description: "Comprehensive guides helping customers make informed purchase decisions",
                  icon: <TargetIcon className="w-8 h-8" />,
                  features: ["Buyer personas", "Use case scenarios", "Budget recommendations", "Expert tips"]
                },
                {
                  title: "Best Of Roundups",
                  description: "Top 10 lists and product roundups for high-traffic keywords",
                  icon: <AwardIcon className="w-8 h-8" />,
                  features: ["Ranked listings", "Category leaders", "Editor's choice", "Price ranges"]
                },
                {
                  title: "Product Specifications",
                  description: "Detailed technical breakdowns and feature explanations",
                  icon: <EditIcon className="w-8 h-8" />,
                  features: ["Technical details", "Compatibility info", "Dimensions & specs", "Performance metrics"]
                },
                {
                  title: "FAQ Sections",
                  description: "Common questions and answers about products to boost SEO",
                  icon: <SearchIcon className="w-8 h-8" />,
                  features: ["Customer questions", "Expert answers", "Schema markup", "Featured snippets"]
                }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-large group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckIcon className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section - Updated with Subscription Model */}
        <section id="pricing" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Choose Your Success Plan
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Subscription-based pricing with free trials. No setup fees. Cancel anytime. Start earning more today.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-muted rounded-lg p-1 flex">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    billingCycle === "monthly"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("annual")}
                  className={`px-6 py-3 rounded-md font-medium transition-all relative ${
                    billingCycle === "annual"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Annual
                  <Badge className="absolute -top-2 -right-2 bg-success text-white text-xs">
                    Save 29%
                  </Badge>
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {[
                {
                  name: "Free Starter",
                  monthlyPrice: "Free",
                  annualPrice: "Free",
                  popular: false,
                  description: "Perfect for getting started with AI content generation",
                  features: [
                    "2,000 words per month",
                    "Basic AI content generation (GPT-3.5)",
                    "5 Amazon product reviews per month",
                    "Basic editor features",
                    "Community support only",
                    "AI Affiliate Pro branding on content"
                  ],
                  cta: "Start Free Forever",
                  color: "border-muted"
                },
                {
                  name: "Basic Pro",
                  monthlyPrice: "$19",
                  annualPrice: "$14",
                  popular: true,
                  description: "Most popular plan for serious affiliate marketers",
                  features: [
                    "25,000 words per month",
                    "Advanced AI generation (GPT-4 access)",
                    "Unlimited Amazon product reviews",
                    "Advanced editor with templates",
                    "SEO optimization suite",
                    "Amazon integration (all domains)",
                    "Priority email support",
                    "Remove AI Affiliate Pro branding"
                  ],
                  cta: "Start 7-Day Free Trial",
                  color: "border-primary shadow-xl scale-105",
                  savings: billingCycle === "annual" ? "Save 26%" : null,
                  badge: "Most Popular"
                },
                {
                  name: "Elite Agency",
                  monthlyPrice: "$49",
                  annualPrice: "$35",
                  popular: false,
                  description: "For agencies and high-volume content creators",
                  features: [
                    "Unlimited word count",
                    "All GPT-4 advanced features",
                    "Bulk content generation",
                    "White-label rights",
                    "API access for integrations",
                    "Advanced analytics & reporting",
                    "Team collaboration (up to 5 users)",
                    "Priority support + 1-on-1 onboarding",
                    "Custom review templates",
                    "Automated publishing integrations"
                  ],
                  cta: "Start 14-Day Free Trial",
                  color: "border-muted",
                  savings: billingCycle === "annual" ? "Save 29%" : null,
                  badge: "Best Value"
                }
              ].map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative border-2 transition-all duration-300 hover:shadow-2xl bg-background/50 backdrop-blur-sm ${plan.color}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-hero text-white px-6 py-2 text-sm font-bold shadow-lg">
                        ⭐ {plan.badge}
                      </Badge>
                    </div>
                  )}

                  {plan.badge && !plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-success text-white px-6 py-2 text-sm font-bold shadow-lg">
                        ⚡ {plan.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8 pt-8">
                    <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-primary">
                        {billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      {plan.monthlyPrice !== "Free" && (
                        <span className="text-muted-foreground text-lg">
                          {billingCycle === "annual" ? "/month (billed annually)" : "/month"}
                        </span>
                      )}
                    </div>
                    {plan.savings && billingCycle === "annual" && (
                      <Badge className="bg-success/10 text-success mb-4">
                        {plan.savings}
                      </Badge>
                    )}
                    <p className="text-muted-foreground text-lg leading-relaxed">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckIcon className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.popular ? "cta" : plan.badge === "Best Value" ? "premium" : "default"}
                      size="xl" 
                      className="w-full font-bold text-lg py-4"
                      onClick={() => setSelectedPlan(plan.name.toLowerCase().replace(' ', '-'))}
                    >
                      {plan.name === "Free Starter" ? (
                        <>Get Started Free</>
                      ) : plan.popular ? (
                        <>
                          <RocketIcon className="w-5 h-5 mr-2" />
                          {plan.cta}
                        </>
                      ) : (
                        <>
                          <CrownIcon className="w-5 h-5 mr-2" />
                          {plan.cta}
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Signals */}
            <div className="text-center mt-16 space-y-6">
              <div className="flex items-center justify-center space-x-8 text-muted-foreground">
                <div className="flex items-center">
                  <ShieldCheckIcon className="w-6 h-6 text-success mr-2" />
                  <span className="font-medium">30-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center">
                  <ZapIcon className="w-6 h-6 text-primary mr-2" />
                  <span className="font-medium">Cancel Anytime</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-6 h-6 text-success mr-2" />
                  <span className="font-medium">No Setup Fees</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="w-12 h-12 text-success mr-4" />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold">30-Day Money-Back Guarantee</h3>
                    <p className="text-muted-foreground">Try AI Affiliate Pro risk-free. Not satisfied? Get a full refund, no questions asked.</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Trusted by 50,000+ Amazon Affiliates • Secure payment processing • All major credit cards accepted
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-gradient-feature">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Real Success Stories from Amazon Affiliates
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands who've transformed their affiliate business with AI
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Kim",
                  role: "Content Creator",
                  revenue: "$25K/month passive income",
                  story: "From $0 to $25K/month: How I Built My Amazon Affiliate Empire",
                  testimonial: "This extension completely transformed my affiliate marketing game. I'm creating content 10x faster and my conversions have doubled. The AI quality is incredible!",
                  timeframe: "6 months",
                  growth: "2,400% increase in revenue"
                },
                {
                  name: "David Parker", 
                  role: "Agency Owner",
                  revenue: "7-figure business",
                  story: "Agency Owner Scales Content Creation 500% with AI Automation",
                  testimonial: "I was spending 6 hours writing reviews. Now I generate them in 3 minutes and they convert better than my hand-written ones! My team loves the efficiency gains.",
                  timeframe: "3 months",
                  growth: "500% content increase"
                },
                {
                  name: "Michael Johnson",
                  role: "Affiliate Marketer", 
                  revenue: "$50K/month",
                  story: "Solo Marketer Reaches $50K Monthly with AI-Generated Reviews",
                  testimonial: "The SEO features alone are worth the price. My articles are ranking on page 1 consistently. I've seen a 300% increase in organic traffic.",
                  timeframe: "4 months", 
                  growth: "300% traffic increase"
                }
              ].map((story, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-large">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                        {story.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold">{story.name}</h3>
                        <p className="text-sm text-muted-foreground">{story.role}</p>
                        <Badge variant="outline" className="mt-1">{story.revenue}</Badge>
                      </div>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{story.story}</h4>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground italic">"{story.testimonial}"</p>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="font-semibold text-success">{story.timeframe}</div>
                        <div className="text-xs text-muted-foreground">Time to Results</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-primary">{story.growth}</div>
                        <div className="text-xs text-muted-foreground">Growth Rate</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 space-y-4">
              <img
                src={successImage}
                alt="Success metrics dashboard showing affiliate marketing growth and earnings"
                className="rounded-2xl shadow-2xl mx-auto max-w-4xl"
                loading="lazy"
              />
              <p className="text-sm text-muted-foreground mt-4">
                Real dashboard data from AI Affiliate Pro users showing revenue growth
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold">
                What 50,000+ Amazon Affiliates Are Saying
              </h2>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-xl font-semibold">4.9/5 Average Rating</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Lisa Martinez",
                  role: "Blogger", 
                  avatar: "LM",
                  rating: 5,
                  testimonial: "The content quality is amazing. It reads naturally and includes all the persuasive elements I need. My click-through rates have increased by 45% since I started using this.",
                  results: "45% CTR increase"
                },
                {
                  name: "Robert Brown",
                  role: "Digital Marketer",
                  avatar: "RB", 
                  rating: 5,
                  testimonial: "Game changer! The Amazon integration is seamless and the editor is professional-grade. I can scale my content creation like never before. Highly recommended!",
                  results: "15 years experience"
                },
                {
                  name: "Jennifer Wilson",
                  role: "Marketing Agency Owner",
                  avatar: "JW",
                  rating: 5, 
                  testimonial: "The white-label rights in the Elite plan let me offer this to my clients. It's become a major revenue stream for my agency. The ROI is incredible!",
                  results: "New revenue stream"
                },
                {
                  name: "Mark Thompson",
                  role: "Content Creator",
                  avatar: "MT",
                  rating: 5,
                  testimonial: "I was skeptical about AI content, but this tool creates reviews that are better than what I wrote manually. My affiliate earnings have tripled.",
                  results: "3x earnings increase"
                },
                {
                  name: "Emily Chen",
                  role: "E-commerce Consultant", 
                  avatar: "EC",
                  rating: 5,
                  testimonial: "The SEO optimization features are incredible. My product reviews are ranking on page 1 for competitive keywords. This tool pays for itself.",
                  results: "Page 1 rankings"
                },
                {
                  name: "Alex Rodriguez",
                  role: "Affiliate Manager",
                  avatar: "AR",
                  rating: 5,
                  testimonial: "Our team productivity has increased 500%. We can now handle 10x more product reviews while maintaining quality. Best investment we've made.",
                  results: "500% productivity boost"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-large">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
                    <Badge variant="outline" className="bg-success/10 text-success">
                      {testimonial.results}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Shortened */}
        <section id="faq" className="py-20 bg-gradient-feature">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about AI Affiliate Pro
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Can I change plans at any time?",
                    answer: "Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at your next billing cycle, and we'll prorate any differences."
                  },
                  {
                    question: "What happens if I exceed my word limit?",
                    answer: "If you reach your monthly word limit, you can either upgrade your plan or wait until your next billing cycle. We'll send you notifications when you're approaching your limit."
                  },
                  {
                    question: "Do you offer refunds for annual plans?",
                    answer: "Yes! We offer a 30-day money-back guarantee on all plans, including annual subscriptions. If you're not satisfied, we'll provide a full refund within 30 days of purchase."
                  },
                  {
                    question: "Which Amazon domains are supported?",
                    answer: "We support all major Amazon domains worldwide including amazon.com (US), amazon.ca (Canada), amazon.co.uk (UK), amazon.de (Germany), amazon.fr (France), and 50+ more domains."
                  },
                  {
                    question: "Do unused words roll over to next month?",
                    answer: "No, unused words don't roll over to the next month. Your word count resets at the beginning of each billing cycle. We recommend choosing a plan that matches your monthly usage."
                  },
                  {
                    question: "Is there a setup fee?",
                    answer: "No setup fees! Just install our Chrome extension and start creating content immediately. All plans include instant access with no additional charges."
                  }
                ].map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-6">Have more questions?</p>
                <Button variant="outline" size="lg" asChild>
                  <a href="/faq">View Complete FAQ</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
                <CardHeader className="text-center pb-8 relative z-10">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-2xl">
                    <DownloadIcon className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-4xl lg:text-5xl font-bold mb-6">
                    FREE Amazon Affiliate Starter Kit
                  </CardTitle>
                  <CardDescription className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Get our complete toolkit to start earning $1,000+ per month with Amazon affiliate marketing. 
                    Includes templates, checklists, and proven strategies used by top affiliates.
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-10 relative z-10">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <CheckIcon className="w-6 h-6 text-success mr-3" />
                        What's Inside:
                      </h3>
                      <ul className="space-y-4">
                        {[
                          "50+ High-Converting Product Review Templates",
                          "Amazon Affiliate Niche Research Guide",
                          "SEO Checklist for Review Content",
                          "Keyword Research Spreadsheet",
                          "Traffic Generation Strategies Guide",
                          "Commission Rate Comparison Chart",
                          "Legal Compliance Checklist"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <CheckIcon className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-hero/10 p-8 rounded-2xl border border-primary/20 backdrop-blur-sm">
                        <div className="text-center mb-6">
                          <h4 className="font-bold text-2xl mb-2">Valued at $297</h4>
                          <p className="text-muted-foreground">
                            Get instant access to the same resources our $50K/month affiliates use.
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <input
                            type="text"
                            placeholder="Enter your first name"
                            className="w-full px-4 py-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-lg"
                          />
                          <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-lg"
                          />
                          <Button variant="cta" size="xxl" className="w-full font-bold text-lg py-4">
                            <DownloadIcon className="w-6 h-6 mr-3" />
                            Get FREE Starter Kit Now
                          </Button>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mt-6 text-center">
                          No spam, ever. Unsubscribe anytime. Your information is 100% secure.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-8 border-t border-border">
                    <div className="flex items-center justify-center space-x-8 text-muted-foreground">
                      <div className="flex items-center">
                        <MailIcon className="w-5 h-5 text-success mr-2" />
                        <span className="font-medium">Instant Download</span>
                      </div>
                      <div className="flex items-center">
                        <ShieldCheckIcon className="w-5 h-5 text-success mr-2" />
                        <span className="font-medium">100% Free</span>
                      </div>
                      <div className="flex items-center">
                        <UsersIcon className="w-5 h-5 text-primary mr-2" />
                        <span className="font-medium">10,000+ Downloaded</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto space-y-10">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Ready to 10x Your Amazon Affiliate Revenue?
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
                Join 50,000+ successful affiliates who've transformed their business with AI. 
                Start generating high-converting product reviews in seconds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="default" size="xxl" className="bg-white text-primary hover:bg-white/90 font-bold text-xl px-10 py-5">
                  <RocketIcon className="w-6 h-6 mr-3" />
                  Start Free Trial Now
                </Button>
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 font-medium text-lg px-8 py-5">
                  <DollarSignIcon className="w-5 h-5 mr-2" />
                  30-Day Money Back Guarantee
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/20 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50,000+</div>
                  <div className="text-white/80">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$10M+</div>
                  <div className="text-white/80">Generated Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4.9/5</div>
                  <div className="text-white/80">User Rating</div>
                </div>
              </div>

              <div className="text-center pt-8">
                <p className="text-white/70">
                  Last Updated: January 2025 • Trusted Worldwide
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t border-border py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-10">
              <div className="space-y-6">
                <div className="text-2xl font-bold text-primary">AI Affiliate Pro</div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The #1 Chrome extension for Amazon product review generation. 
                  Transform your affiliate marketing with AI.
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                  <span className="ml-2 font-semibold">4.9/5 Rating</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-6">Product</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                  <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a></li>
                  <li><a href="/faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-6">Support</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><a href="/help-center" className="hover:text-foreground transition-colors">Help Center</a></li>
                  <li><a href="/contact-us" className="hover:text-foreground transition-colors">Contact Us</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-6">Legal</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                  <li><a href="/refund-policy" className="hover:text-foreground transition-colors">Refund Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
              <p>© 2025 AI Affiliate Pro. All rights reserved. | Amazon Product Review Generator Chrome Extension</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
