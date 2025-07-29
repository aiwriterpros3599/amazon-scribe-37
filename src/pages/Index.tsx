import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckIcon, StarIcon, ArrowRightIcon, RocketIcon, ZapIcon, ShieldCheckIcon, UsersIcon, TrendingUpIcon, AwardIcon, TargetIcon, GlobeIcon, SearchIcon, EditIcon, BarChart3Icon, ImageIcon, BrainCircuitIcon, DollarSignIcon } from "lucide-react";
import heroImage from "@/assets/hero-amazon-ai.jpg";
import featuresImage from "@/assets/features-showcase.jpg";
import successImage from "@/assets/success-metrics.jpg";

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");

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
      "price": "97",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "10000"
    }
  };

  return (
    <>
      {/* SEO Meta Tags - Would be handled by Helmet in a real app */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Navigation Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <BrainCircuitIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">AI Affiliate Pro</span>
              <Badge variant="secondary" className="ml-2">Chrome Extension</Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </nav>
            <Button variant="hero" size="lg">Get Started Free</Button>
          </div>
        </header>

        {/* Hero Section - SEO Optimized */}
        <section className="relative overflow-hidden bg-gradient-hero text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-up">
                <div className="space-y-4">
                  <Badge className="bg-success text-success-foreground">
                    <TrendingUpIcon className="w-4 h-4 mr-1" />
                    #1 Amazon Product Review Generator
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Generate High-Converting{" "}
                    <span className="text-amazon">Amazon Product Reviews</span>{" "}
                    in Seconds with AI
                  </h1>
                  <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                    The most powerful Chrome extension for Amazon affiliates. Create professional, 
                    SEO-optimized product reviews, comparisons, and buying guides automatically. 
                    Join 50,000+ successful affiliates earning more with AI.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="xxl" className="flex-1 sm:flex-none">
                    <RocketIcon className="w-5 h-5 mr-2" />
                    Start Creating Reviews Now
                  </Button>
                  <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                    <SearchIcon className="w-5 h-5 mr-2" />
                    See How It Works
                  </Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <CheckIcon className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm">No Monthly Fees</p>
                  </div>
                  <div className="text-center">
                    <ZapIcon className="w-6 h-6 text-amazon mx-auto mb-2" />
                    <p className="text-sm">30-Second Setup</p>
                  </div>
                  <div className="text-center">
                    <ShieldCheckIcon className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm">30-Day Guarantee</p>
                  </div>
                  <div className="text-center">
                    <UsersIcon className="w-6 h-6 text-amazon mx-auto mb-2" />
                    <p className="text-sm">50,000+ Users</p>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-float">
                <img
                  src={heroImage}
                  alt="AI Affiliate Pro Chrome Extension Dashboard showing Amazon product review generation"
                  className="rounded-2xl shadow-2xl border border-white/20"
                  loading="eager"
                />
                <div className="absolute -top-4 -right-4 bg-success text-success-foreground rounded-full p-3 shadow-lg animate-pulse-glow">
                  <TrendingUpIcon className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section - SEO Optimized */}
        <section id="how-it-works" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold">
                How to Generate Amazon Product Reviews Automatically
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our AI Amazon review writer creates professional content in 4 simple steps. 
                Works on all Amazon domains worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Install Chrome Extension",
                  description: "Add AI Affiliate Pro to Chrome in 30 seconds. Works on all Amazon domains including .com, .co.uk, .de, .fr, .es, .it, .in, .ca, .com.mx",
                  icon: <GlobeIcon className="w-8 h-8" />
                },
                {
                  step: "02", 
                  title: "Visit Amazon Product Page",
                  description: "Browse any Amazon product page. Our AI automatically detects product information, specifications, and customer reviews",
                  icon: <SearchIcon className="w-8 h-8" />
                },
                {
                  step: "03",
                  title: "Click Extension Icon",
                  description: "One click generates professional product reviews, comparisons, buying guides, and SEO-optimized content instantly",
                  icon: <BrainCircuitIcon className="w-8 h-8" />
                },
                {
                  step: "04",
                  title: "Edit & Publish",
                  description: "Customize content in our built-in SEO editor, add affiliate links, and publish to your website or blog",
                  icon: <EditIcon className="w-8 h-8" />
                }
              ].map((item, index) => (
                <Card key={index} className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-large group">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{item.step}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Amazon Domains Section */}
        <section className="py-16 bg-gradient-feature">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">
                Works on All Amazon Domains Worldwide
              </h2>
              <p className="text-xl text-muted-foreground">
                Generate Amazon affiliate content for any country or region
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { domain: "amazon.com", country: "United States", flag: "🇺🇸" },
                { domain: "amazon.co.uk", country: "United Kingdom", flag: "🇬🇧" },
                { domain: "amazon.de", country: "Germany", flag: "🇩🇪" },
                { domain: "amazon.fr", country: "France", flag: "🇫🇷" },
                { domain: "amazon.es", country: "Spain", flag: "🇪🇸" },
                { domain: "amazon.it", country: "Italy", flag: "🇮🇹" },
                { domain: "amazon.in", country: "India", flag: "🇮🇳" },
                { domain: "amazon.ca", country: "Canada", flag: "🇨🇦" },
                { domain: "amazon.com.mx", country: "Mexico", flag: "🇲🇽" },
                { domain: "amazon.com.br", country: "Brazil", flag: "🇧🇷" },
                { domain: "amazon.com.au", country: "Australia", flag: "🇦🇺" },
                { domain: "amazon.jp", country: "Japan", flag: "🇯🇵" }
              ].map((item, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-medium transition-all">
                  <div className="text-3xl mb-2">{item.flag}</div>
                  <div className="font-semibold text-sm">{item.domain}</div>
                  <div className="text-xs text-muted-foreground">{item.country}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Generated Section */}
        <section className="py-20 bg-background">
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

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-feature">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Everything You Need to Dominate Amazon Affiliate Marketing
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced AI tools designed to maximize your affiliate revenue and streamline content creation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                {[
                  {
                    title: "Advanced AI Content Generation",
                    description: "Generate product reviews, comparisons, and buying guides using cutting-edge GPT-4 models. Create content that converts in seconds with human-like quality.",
                    icon: <BrainCircuitIcon className="w-8 h-8" />
                  },
                  {
                    title: "SEO Optimization Suite", 
                    description: "Automatic meta titles, descriptions, schema markup, and keyword optimization. Rank higher on Google and get more organic traffic.",
                    icon: <SearchIcon className="w-8 h-8" />
                  },
                  {
                    title: "Smart Image Management",
                    description: "Optimal image dimensions, automatic alt text generation, and AI-powered image optimization for better conversions.",
                    icon: <ImageIcon className="w-8 h-8" />
                  },
                  {
                    title: "Universal Amazon Integration",
                    description: "Automatically detects product data from any Amazon domain. Seamless affiliate link insertion with commission tracking.",
                    icon: <GlobeIcon className="w-8 h-8" />
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex space-x-4 group">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <img
                  src={featuresImage}
                  alt="AI Affiliate Pro features showcase - before and after content generation"
                  className="rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-success text-success-foreground rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">10x</div>
                    <div className="text-sm">Faster Content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-background">
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

            <div className="text-center mt-12">
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

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gradient-feature">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Choose Your Amazon Affiliate Success Plan
              </h2>
              <p className="text-xl text-muted-foreground">
                One-time payment. No monthly fees. Lifetime access. Start earning more today.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Basic Starter",
                  price: "$47",
                  popular: false,
                  description: "Perfect for getting started with Amazon affiliate content",
                  features: [
                    "Core content generation features",
                    "5,000 words per month",
                    "Basic editor features", 
                    "GPT-3.5 Turbo access",
                    "Amazon product detection",
                    "Basic affiliate link insertion",
                    "Email support"
                  ]
                },
                {
                  name: "Pro Growth",
                  price: "$97", 
                  popular: true,
                  description: "Most popular plan for serious affiliate marketers",
                  features: [
                    "Everything in Basic",
                    "25,000 words per month",
                    "Advanced editor with version control",
                    "GPT-4 access included",
                    "SEO features & keyword integration", 
                    "Content repurposing tools",
                    "Priority email support",
                    "Bonus: Affiliate Marketing Course"
                  ]
                },
                {
                  name: "Elite Agency",
                  price: "$197",
                  popular: false,
                  description: "For agencies and high-volume content creators",
                  features: [
                    "Everything in Pro",
                    "Unlimited word count", 
                    "All advanced editor & SEO features",
                    "Full content repurposing suite",
                    "Automated publishing integrations",
                    "White-label rights",
                    "Priority support & 1-on-1 onboarding",
                    "Bonus: Done-for-you templates",
                    "Bonus: Reseller license"
                  ]
                }
              ].map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative border-2 transition-all duration-300 hover:shadow-large ${
                    plan.popular 
                      ? 'border-primary shadow-glow scale-105' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-hero text-white px-6 py-2">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground"> one-time</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckIcon className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.popular ? "cta" : "default"}
                      size="lg" 
                      className="w-full"
                      onClick={() => setSelectedPlan(plan.name.toLowerCase().replace(' ', '-'))}
                    >
                      {plan.popular ? (
                        <>
                          <RocketIcon className="w-5 h-5 mr-2" />
                          Get Pro Plan
                        </>
                      ) : (
                        <>Get {plan.name.split(' ')[0]} Plan</>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 space-y-4">
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ShieldCheckIcon className="w-5 h-5 text-success mr-2" />
                  Secure Payment
                </div>
                <div className="flex items-center">
                  <ZapIcon className="w-5 h-5 text-amazon mr-2" />
                  30-Day Money Back Guarantee
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-success mr-2" />
                  Instant Access
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                All plans include lifetime updates and new feature access
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
                  <StarIcon key={i} className="w-6 h-6 fill-amazon text-amazon" />
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
                            <StarIcon key={i} className="w-4 h-4 fill-amazon text-amazon" />
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

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-feature">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about the best Chrome extension for Amazon affiliates
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "How does the AI Amazon product review generator work?",
                    answer: "Our Chrome extension uses advanced GPT-4 AI models to analyze Amazon product data and generate high-quality, unique content. Simply visit any Amazon product page, click our extension icon, and watch as professional reviews, comparisons, and buying guides are created in seconds. The AI understands product features, benefits, and creates persuasive copy that converts visitors into buyers."
                  },
                  {
                    question: "Is this better than other Amazon affiliate content tools?",
                    answer: "Yes! Unlike other tools that create generic content, our AI generates personalized, SEO-optimized reviews that read naturally. We support all Amazon domains worldwide, include advanced SEO features, and provide a professional editor. Most importantly, our content converts better because it's written specifically for Amazon affiliate marketing."
                  },
                  {
                    question: "Which Amazon domains and countries are supported?",
                    answer: "We support all major Amazon domains worldwide including amazon.com (US), amazon.ca (Canada), amazon.co.uk (UK), amazon.de (Germany), amazon.fr (France), amazon.es (Spain), amazon.it (Italy), amazon.in (India), amazon.com.mx (Mexico), amazon.com.br (Brazil), amazon.com.au (Australia), amazon.jp (Japan), and more. The extension automatically detects the domain and extracts product data accordingly."
                  },
                  {
                    question: "Do I need my own OpenAI API key?",
                    answer: "Yes, you'll need your own OpenAI API key for content generation. This ensures your data privacy, gives you control over costs (typically $0.01-$0.10 per article), and provides unlimited usage based on your needs. Setting up an API key takes 2 minutes and we provide step-by-step instructions plus video tutorials."
                  },
                  {
                    question: "What's included in the 30-day money-back guarantee?",
                    answer: "We offer a risk-free 30-day money-back guarantee. If you're not completely satisfied with AI Affiliate Pro for any reason, contact our support team within 30 days for a full refund. No questions asked, no hassle. We're confident you'll love the results."
                  },
                  {
                    question: "Can I use this for multiple websites and niches?",
                    answer: "Absolutely! There are no restrictions on the number of websites, niches, or affiliate programs you can use this with. Create content for technology, health, fitness, home & garden, beauty, sports, or any other niche. The AI adapts to any product category automatically and generates relevant, targeted content."
                  },
                  {
                    question: "How quickly can I start generating Amazon product reviews?",
                    answer: "You can start generating content within 5 minutes of purchase! Simply install the Chrome extension from the Chrome Web Store, add your OpenAI API key in the settings, and you're ready to go. No complex setup, no learning curve - just instant, professional content creation."
                  },
                  {
                    question: "Is the content generated unique and SEO-optimized?",
                    answer: "Yes! Every piece of content is 100% unique and optimized for search engines. Our AI generates original content that includes targeted keywords, proper header structure, meta descriptions, schema markup, and other SEO elements that help your content rank higher on Google and drive more organic traffic to your affiliate links."
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
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Ready to 10x Your Amazon Affiliate Revenue?
              </h2>
              <p className="text-xl lg:text-2xl text-white/90">
                Join 50,000+ successful affiliates who've transformed their business with AI. 
                Start generating high-converting product reviews in seconds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="xxl">
                  <RocketIcon className="w-6 h-6 mr-2" />
                  Get AI Affiliate Pro Now
                </Button>
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                  <DollarSignIcon className="w-5 h-5 mr-2" />
                  30-Day Money Back Guarantee
                </Button>
              </div>

              <div className="text-center pt-8 border-t border-white/20">
                <p className="text-white/80">
                  Last Updated: January 2025 • Trusted by 50,000+ Amazon Affiliates Worldwide
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t border-border py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <BrainCircuitIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-xl">AI Affiliate Pro</span>
                </div>
                <p className="text-muted-foreground">
                  The #1 Chrome extension for Amazon product review generation. 
                  Transform your affiliate marketing with AI.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                  <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a></li>
                  <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="/support" className="hover:text-foreground transition-colors">Help Center</a></li>
                  <li><a href="/contact" className="hover:text-foreground transition-colors">Contact Us</a></li>
                  <li><a href="/tutorials" className="hover:text-foreground transition-colors">Video Tutorials</a></li>
                  <li><a href="/api" className="hover:text-foreground transition-colors">API Setup Guide</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                  <li><a href="/refund" className="hover:text-foreground transition-colors">Refund Policy</a></li>
                  <li><a href="/affiliate" className="hover:text-foreground transition-colors">Affiliate Program</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
              <p>© 2025 AI Affiliate Pro. All rights reserved. | Amazon Product Review Generator Chrome Extension</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;