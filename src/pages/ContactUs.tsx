
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Clock, HelpCircle, CreditCard, Users, MessageSquare } from "lucide-react";

const ContactUs = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact AI Affiliate Pro Support | Amazon Review Generator Help",
    "description": "Contact AI Affiliate Pro support team for help with our Amazon affiliate review generator Chrome extension. Get technical support and billing assistance.",
    "url": "https://aiaffiliatepro.com/contact-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "AI Affiliate Pro",
      "url": "https://aiaffiliatepro.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "support@aiaffiliatepro.com",
          "contactType": "customer service",
          "email": "support@aiaffiliatepro.com",
          "availableLanguage": "English"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact AI Affiliate Pro Support | Amazon Review Generator Help</title>
        <meta name="description" content="Contact AI Affiliate Pro support team for help with our Amazon affiliate review generator Chrome extension. Get technical support and billing assistance." />
        <meta name="keywords" content="AI Affiliate Pro contact, Amazon review generator support, Chrome extension help, customer service" />
        <link rel="canonical" href="https://aiaffiliatepro.com/contact-us" />
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
                <BreadcrumbPage>Contact Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Our Support Team</h1>
            <p className="text-xl text-muted-foreground">
              We're here to help you succeed with AI Affiliate Pro. Get the support you need, when you need it.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="issueType">Issue Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of issue" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing & Account</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="refund">Refund Request</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief description of your issue" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide as much detail as possible about your issue or question..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>Email Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    For fastest response, email us directly:
                  </p>
                  <p className="font-medium">support@aiaffiliatepro.com</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Average response time: 6-12 hours
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Support Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9 AM - 6 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10 AM - 4 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Response times may be longer on weekends and holidays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Before You Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check these resources for quick answers:
                  </p>
                  <div className="space-y-3">
                    <a href="/faq" className="flex items-center space-x-2 text-sm text-primary hover:underline">
                      <HelpCircle className="h-4 w-4" />
                      <span>FAQ Page</span>
                    </a>
                    <a href="/help-center" className="flex items-center space-x-2 text-sm text-primary hover:underline">
                      <MessageSquare className="h-4 w-4" />
                      <span>Help Center</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Choose Your Preferred Contact Method</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <HelpCircle className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle>Technical Support</CardTitle>
                  <CardDescription>Extension issues, bugs, and troubleshooting</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get help with installation, setup, and technical problems.
                  </p>
                  <Button variant="outline" className="w-full">Email: support@aiaffiliatepro.com</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CreditCard className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle>Billing & Account</CardTitle>
                  <CardDescription>Payments, refunds, and account questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Questions about pricing, billing, or account management.
                  </p>
                  <Button variant="outline" className="w-full">Email: billing@aiaffiliatepro.com</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle>Partnership & Business</CardTitle>
                  <CardDescription>Partnerships, affiliates, and business inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in partnerships or have business questions?
                  </p>
                  <Button variant="outline" className="w-full">Email: partners@aiaffiliatepro.com</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Response Times */}
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-4">Expected Response Times</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Priority Support</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Account access issues: 2-4 hours</li>
                  <li>• Billing and payment problems: 4-8 hours</li>
                  <li>• Critical extension failures: 6-12 hours</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Standard Support</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• General questions: 12-24 hours</li>
                  <li>• Feature requests: 24-48 hours</li>
                  <li>• Partnership inquiries: 2-3 business days</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Internal Links */}
          <div className="pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <a href="/help-center" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Help Center</h4>
                <p className="text-sm text-muted-foreground">Browse tutorials and guides</p>
              </a>
              <a href="/faq" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">FAQ</h4>
                <p className="text-sm text-muted-foreground">Quick answers to common questions</p>
              </a>
              <a href="/refund-policy" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Refund Policy</h4>
                <p className="text-sm text-muted-foreground">30-day money-back guarantee</p>
              </a>
              <a href="/terms-of-service" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Terms of Service</h4>
                <p className="text-sm text-muted-foreground">Usage guidelines and policies</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
