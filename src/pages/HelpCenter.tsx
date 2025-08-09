
import { Helmet } from "react-helmet-async";
import { 
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BookOpen, Settings, CreditCard, Shield, Globe, Zap } from "lucide-react";

const HelpCenter = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Help Center - AI Affiliate Pro | Amazon Review Generator Support",
    "description": "Get help with AI Affiliate Pro Chrome extension. Find tutorials, troubleshooting guides, and support for generating Amazon affiliate product reviews.",
    "url": "https://aiaffiliatepro.com/help-center",
    "mainEntity": {
      "@type": "Organization",
      "name": "AI Affiliate Pro",
      "url": "https://aiaffiliatepro.com"
    }
  };

  const helpCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Installation, setup, and generating your first review",
      topics: [
        "Installing the Chrome extension",
        "Setting up your OpenAI API key",
        "Creating your first Amazon product review",
        "Understanding the interface",
        "Basic configuration settings"
      ]
    },
    {
      icon: Zap,
      title: "Using the Extension",
      description: "Product detection, content generation, and editing features",
      topics: [
        "How product detection works",
        "Customizing review templates",
        "Editing and refining generated content",
        "Using different content styles",
        "Optimizing reviews for SEO",
        "Working with product variations"
      ]
    },
    {
      icon: CreditCard,
      title: "Account and Billing",
      description: "Plans, payments, upgrades, and account management",
      topics: [
        "Understanding pricing plans",
        "Upgrading or downgrading plans",
        "Managing article limits",
        "Payment methods and billing cycles",
        "Viewing usage statistics"
      ]
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "Troubleshooting, browser issues, and technical questions",
      topics: [
        "Extension not loading or working",
        "Browser compatibility issues",
        "API connection problems",
        "Performance optimization",
        "Common error messages",
        "Cache and data management"
      ]
    },
    {
      icon: Globe,
      title: "Amazon Integration",
      description: "Affiliate links, domains, and compliance guidelines",
      topics: [
        "Adding your Amazon affiliate ID",
        "Working with international Amazon sites",
        "Compliance with Amazon's policies",
        "Affiliate link generation"
      ]
    },
    {
      icon: Shield,
      title: "Advanced Features",
      description: "Bulk generation, templates, and advanced customization",
      topics: [
        "Bulk review generation",
        "Creating custom templates",
        "Advanced SEO optimization",
        "Content export options",
        "Integration with WordPress"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Help Center - AI Affiliate Pro | Amazon Review Generator Support</title>
        <meta name="description" content="Get help with AI Affiliate Pro Chrome extension. Find tutorials, troubleshooting guides, and support for generating Amazon affiliate product reviews." />
        <meta name="keywords" content="AI Affiliate Pro help, Amazon review generator support, Chrome extension tutorials, affiliate marketing help" />
        <link rel="canonical" href="https://aiaffiliatepro.com/help-center" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              <a href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="/help-center" className="text-muted-foreground hover:text-foreground transition-colors">Help</a>
            </nav>
            <Button variant="default" size="lg">Get Started</Button>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Help Center</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find tutorials, guides, and answers to help you get the most out of AI Affiliate Pro
            </p>
            
            {/* Search Box */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Popular Help Topics</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <a href="/faq" className="p-4 bg-muted rounded-lg text-center hover:bg-muted/80 transition-colors">
                <h3 className="font-medium mb-2">FAQ</h3>
                <p className="text-sm text-muted-foreground">Quick answers</p>
              </a>
              <a href="/contact-us" className="p-4 bg-muted rounded-lg text-center hover:bg-muted/80 transition-colors">
                <h3 className="font-medium mb-2">Contact Support</h3>
                <p className="text-sm text-muted-foreground">Get personal help</p>
              </a>
              <a href="#installation" className="p-4 bg-muted rounded-lg text-center hover:bg-muted/80 transition-colors">
                <h3 className="font-medium mb-2">Installation Guide</h3>
                <p className="text-sm text-muted-foreground">Get up and running</p>
              </a>
              <a href="#troubleshooting" className="p-4 bg-muted rounded-lg text-center hover:bg-muted/80 transition-colors">
                <h3 className="font-medium mb-2">Troubleshooting</h3>
                <p className="text-sm text-muted-foreground">Fix common issues</p>
              </a>
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <category.icon className="h-6 w-6 text-primary" />
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-sm">
                          <a href="#" className="text-primary hover:underline">
                            {topic}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Getting Started Section */}
          <div id="installation" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Quick Start Guide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                    <span>Install Extension</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Add AI Affiliate Pro to your Chrome browser from the Chrome Web Store.
                  </p>
                  <Button variant="outline" size="sm">View Guide</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                    <span>Setup API Key</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Connect your OpenAI API key to enable AI-powered review generation.
                  </p>
                  <Button variant="outline" size="sm">Setup Guide</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                    <span>Generate Review</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Navigate to any Amazon product page and generate your first review.
                  </p>
                  <Button variant="outline" size="sm">Tutorial</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help you succeed with AI Affiliate Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/contact-us">Contact Support</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/faq">Browse FAQ</a>
              </Button>
            </div>
          </div>

          {/* Internal Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <a href="/faq" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">FAQ</h4>
                <p className="text-sm text-muted-foreground">Common questions and answers</p>
              </a>
              <a href="/contact-us" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Contact Us</h4>
                <p className="text-sm text-muted-foreground">Get in touch with support</p>
              </a>
              <a href="/blog" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Blog</h4>
                <p className="text-sm text-muted-foreground">Tips and best practices</p>
              </a>
              <a href="/terms-of-service" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Terms & Conditions</h4>
                <p className="text-sm text-muted-foreground">Usage guidelines</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
