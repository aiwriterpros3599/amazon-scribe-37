
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

const RefundPolicy = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "30-Day Money Back Guarantee - AI Affiliate Pro Refund Policy",
    "description": "AI Affiliate Pro offers a 30-day money-back guarantee on all plans. Learn about our refund process for the Amazon review generator Chrome extension.",
    "url": "https://aiaffiliatepro.com/refund-policy",
    "mainEntity": {
      "@type": "Organization",
      "name": "AI Affiliate Pro",
      "url": "https://aiaffiliatepro.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "support@aiaffiliatepro.com",
        "contactType": "customer service"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>30-Day Money Back Guarantee - AI Affiliate Pro Refund Policy</title>
        <meta name="description" content="AI Affiliate Pro offers a 30-day money-back guarantee on all plans. Learn about our refund process for the Amazon review generator Chrome extension." />
        <meta name="keywords" content="AI Affiliate Pro refund, 30-day money back guarantee, Amazon review generator refund policy, Chrome extension refund" />
        <link rel="canonical" href="https://aiaffiliatepro.com/refund-policy" />
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
                <BreadcrumbPage>Refund Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">30-Day Money Back Guarantee</h1>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">100% Risk-Free Purchase</h2>
            <p className="text-green-700 text-lg">
              We're so confident you'll love AI Affiliate Pro that we offer a complete 30-day money-back guarantee. 
              If you're not completely satisfied with our Amazon review generator, we'll refund your purchase - no questions asked.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">30-Day Money Back Guarantee Overview</h2>
              <p className="mb-4">
                AI Affiliate Pro stands behind the quality of our Chrome extension. We offer a comprehensive 30-day money-back 
                guarantee on all our plans, giving you peace of mind when investing in our Amazon affiliate review generator.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full refund within 30 days of purchase</li>
                <li>No complicated requirements or hoops to jump through</li>
                <li>Fast processing - most refunds completed within 3-5 business days</li>
                <li>Available on all pricing plans (Free Starter, Pro Growth, Elite Agency)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Eligible Refund Conditions</h2>
              <p className="mb-4">We want you to be completely satisfied with AI Affiliate Pro. You're eligible for a full refund if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You request the refund within 30 days of your original purchase date</li>
                <li>You purchased directly through our website or authorized payment processors</li>
                <li>You provide a valid order number or payment confirmation</li>
                <li>You're experiencing technical issues that our support team cannot resolve</li>
                <li>The Chrome extension doesn't meet your expectations for Amazon affiliate content generation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Refund Process and Timeline</h2>
              <p className="mb-4">Our refund process is designed to be quick and hassle-free:</p>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Step-by-Step Process:</h3>
                <ol className="list-decimal pl-6 space-y-3">
                  <li><strong>Contact Support:</strong> Email us at support@aiaffiliatepro.com with "Refund Request" in the subject line</li>
                  <li><strong>Provide Information:</strong> Include your order number, email address, and reason for refund</li>
                  <li><strong>Confirmation:</strong> We'll confirm receipt of your request within 24 hours</li>
                  <li><strong>Processing:</strong> Refunds are processed within 3-5 business days</li>
                  <li><strong>Completion:</strong> You'll receive confirmation once the refund is issued</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What's Not Covered</h2>
              <p className="mb-4">While we offer generous refund terms, please note these exceptions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refund requests made after the 30-day window has expired</li>
                <li>Purchases made through unauthorized third-party sellers</li>
                <li>Accounts that have been suspended for violating our Terms of Service</li>
                <li>Requests without valid proof of purchase or order information</li>
                <li>Chargebacks initiated without first contacting our support team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How to Request a Refund</h2>
              <p className="mb-4">Getting your refund is simple. Here are multiple ways to contact us:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">Primary refund method</p>
                  <p><strong>support@aiaffiliatepro.com</strong></p>
                  <p className="text-sm">Include "Refund Request" in subject</p>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Contact Form</h3>
                  <p className="text-sm text-muted-foreground mb-2">Alternative method</p>
                  <a href="/contact-us" className="text-primary hover:underline">Visit Contact Page</a>
                  <p className="text-sm">Select "Billing & Refunds" as issue type</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-3 mt-6">Required Information:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your full name and email address used for purchase</li>
                <li>Order number or transaction ID</li>
                <li>Date of purchase</li>
                <li>Brief reason for requesting refund (optional but helpful)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Processing Time and Payment Method</h2>
              <p className="mb-4">
                Refunds are processed back to your original payment method within 3-5 business days after approval:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Credit/Debit Cards:</strong> 3-5 business days (may take up to 2 billing cycles to appear)</li>
                <li><strong>PayPal:</strong> 1-2 business days</li>
                <li><strong>Bank Transfer:</strong> 5-7 business days</li>
                <li><strong>Digital Wallets:</strong> 1-3 business days</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Note: Processing times may vary depending on your financial institution and payment processor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Support Information</h2>
              <p className="mb-4">
                Before requesting a refund, consider reaching out to our support team. Many issues can be resolved quickly:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Support Email:</strong> support@aiaffiliatepro.com</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
                <p><strong>Support Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
                <p><strong>Help Resources:</strong> <a href="/help-center" className="text-primary hover:underline">Visit Help Center</a></p>
              </div>
            </section>
          </div>

          {/* Internal Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Related Pages</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/terms-of-service" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Terms of Service</h4>
                <p className="text-sm text-muted-foreground">Read our complete terms and conditions</p>
              </a>
              <a href="/contact-us" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Contact Support</h4>
                <p className="text-sm text-muted-foreground">Get help from our support team</p>
              </a>
              <a href="/faq" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">FAQ</h4>
                <p className="text-sm text-muted-foreground">Find answers to common questions</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
