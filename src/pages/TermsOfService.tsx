
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

const TermsOfService = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - AI Affiliate Pro",
    "description": "Read AI Affiliate Pro's terms of service for our Amazon affiliate review generator. Understand usage rights, limitations, and guidelines for our Chrome extension.",
    "url": "https://aiaffiliatepro.com/terms-of-service",
    "mainEntity": {
      "@type": "Organization",
      "name": "AI Affiliate Pro",
      "url": "https://aiaffiliatepro.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "legal@aiaffiliatepro.com",
        "contactType": "customer service"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service - AI Affiliate Pro | Amazon Review Generator Extension</title>
        <meta name="description" content="Read AI Affiliate Pro's terms of service for our Amazon affiliate review generator. Understand usage rights, limitations, and guidelines for our Chrome extension." />
        <meta name="keywords" content="AI Affiliate Pro terms of service, Chrome extension terms, Amazon affiliate guidelines, review generator terms" />
        <link rel="canonical" href="https://aiaffiliatepro.com/terms-of-service" />
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
                <BreadcrumbPage>Terms of Service</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Effective Date: January 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing, downloading, or using AI Affiliate Pro ("the Service," "our Extension," or "the Software"), 
                you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). 
                These Terms constitute a legally binding agreement between you ("User," "you," or "your") and AI Affiliate Pro 
                ("Company," "we," "our," or "us").
              </p>
              <p className="mb-4">
                If you do not agree to these Terms, you may not access or use our Chrome extension and related services. 
                By continuing to use AI Affiliate Pro, you confirm your acceptance of these Terms and any future updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
              <p className="mb-4">
                AI Affiliate Pro is a Chrome extension that leverages artificial intelligence to generate Amazon product 
                reviews, comparisons, and affiliate marketing content. Our service is designed to help Amazon affiliates, 
                content creators, and digital marketers create high-quality product reviews efficiently.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Service Requirements</h3>
              <p className="mb-4">To use AI Affiliate Pro, you must have:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>A valid Chrome browser installation (latest version recommended)</li>
                <li>An active, stable internet connection</li>
                <li>Your own OpenAI API key for content generation</li>
                <li>An Amazon Associates account (for affiliate link integration)</li>
                <li>Compliance with all applicable laws and platform policies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Service Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI-powered product review generation using GPT models</li>
                <li>Amazon product data extraction and analysis</li>
                <li>Customizable review templates and formatting</li>
                <li>Bulk content generation capabilities</li>
                <li>SEO optimization suggestions</li>
                <li>Affiliate link integration and management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
              <p className="mb-4">As a user of AI Affiliate Pro, you agree to:</p>
              
              <h3 className="text-xl font-semibold mb-3">Lawful and Ethical Use</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Use the service in compliance with all applicable local, state, national, and international laws</li>
                <li>Respect intellectual property rights of third parties</li>
                <li>Not use the service for any illegal, fraudulent, or malicious purposes</li>
                <li>Maintain the security and confidentiality of your account information</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Amazon Associates Compliance</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Comply with Amazon Associates Program Operating Agreement</li>
                <li>Follow Amazon's affiliate marketing policies and guidelines</li>
                <li>Properly disclose affiliate relationships as required by Amazon</li>
                <li>Not manipulate or artificially inflate affiliate commissions</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Content Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Review and edit all AI-generated content before publication</li>
                <li>Ensure accuracy of product information and claims</li>
                <li>Not generate false, misleading, or deceptive product reviews</li>
                <li>Properly disclose affiliate relationships per FTC guidelines</li>
                <li>Take full responsibility for all published content</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Prohibited Activities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reverse engineering, decompiling, or attempting to extract source code</li>
                <li>Creating derivative works or competing products</li>
                <li>Sharing, reselling, or distributing your account access</li>
                <li>Using automated tools to circumvent usage limitations</li>
                <li>Attempting to hack, breach, or compromise our security</li>
                <li>Generating content that violates platform terms of service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Content and Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold mb-3">Generated Content</h3>
              <p className="mb-4">
                Content generated by AI Affiliate Pro is provided for your commercial use in accordance with these Terms. 
                However, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>All generated content must be reviewed and edited before publication</li>
                <li>You are solely responsible for the accuracy and compliance of published content</li>
                <li>AI-generated content may not always be factually accurate or up-to-date</li>
                <li>You must verify all product information and claims before publication</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Intellectual Property Rights</h3>
              <p className="mb-4">
                AI Affiliate Pro and all related technology, software, algorithms, and content (excluding user-generated content) 
                are the exclusive property of the Company and are protected by copyright, trademark, and other intellectual 
                property laws.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Third-Party Content</h3>
              <p className="mb-4">
                Our service processes publicly available Amazon product information. You must respect Amazon's terms of service 
                and intellectual property rights when using this data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Payment Terms and Billing</h2>
              
              <h3 className="text-xl font-semibold mb-3">One-Time Payment Model</h3>
              <p className="mb-4">
                AI Affiliate Pro operates on a one-time payment model with no recurring monthly fees:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Free Starter Plan: 10 articles per month at no cost</li>
                <li>Pro Growth Plan: 30 articles per month with one-time payment</li>
                <li>Elite Agency Plan: Unlimited articles with one-time payment</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Payment Processing</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>All payments are processed securely through third-party payment providers</li>
                <li>Prices are listed in USD and may be subject to applicable taxes</li>
                <li>Payment must be completed before accessing premium features</li>
                <li>We reserve the right to change pricing with 30 days notice</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Additional Costs</h3>
              <p className="mb-4">
                Note that using AI Affiliate Pro requires your own OpenAI API key, which incurs separate charges 
                directly from OpenAI based on your usage. These costs are not included in our pricing and are your responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by applicable law, AI Affiliate Pro shall not be liable for:
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Excluded Damages</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Any indirect, incidental, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Damages arising from affiliate marketing activities or results</li>
                <li>Content accuracy, completeness, or compliance issues</li>
                <li>Third-party service interruptions (Amazon, OpenAI, etc.)</li>
                <li>Unauthorized access to or use of your account</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Maximum Liability</h3>
              <p className="mb-4">
                In no event shall our total liability to you exceed the amount you paid for the service in the 
                twelve (12) months preceding the claim.
              </p>

              <h3 className="text-xl font-semibold mb-3">User Acknowledgment</h3>
              <p className="mb-4">
                You acknowledge that AI-generated content may contain inaccuracies and that you are solely responsible 
                for reviewing, editing, and verifying all content before publication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              
              <h3 className="text-xl font-semibold mb-3">Termination by Company</h3>
              <p className="mb-4">
                We may terminate or suspend your access to AI Affiliate Pro immediately, without prior notice or liability, 
                if you:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Violate any provision of these Terms</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Compromise the security or integrity of our service</li>
                <li>Use the service in a manner that harms other users or our business</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Termination by User</h3>
              <p className="mb-4">
                You may discontinue using AI Affiliate Pro at any time by uninstalling the Chrome extension. 
                Termination does not entitle you to a refund unless within our refund policy period.
              </p>

              <h3 className="text-xl font-semibold mb-3">Effect of Termination</h3>
              <p className="mb-4">
                Upon termination, your right to use the service ceases immediately. Provisions that by their nature 
                should survive termination shall survive, including intellectual property rights, liability limitations, 
                and dispute resolution clauses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Governing Law and Disputes</h2>
              
              <h3 className="text-xl font-semibold mb-3">Governing Law</h3>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], 
                without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold mb-3">Dispute Resolution</h3>
              <p className="mb-4">
                Any disputes arising from these Terms or your use of AI Affiliate Pro shall be resolved through:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li>Good faith negotiation between the parties</li>
                <li>Mediation if negotiation fails</li>
                <li>Binding arbitration as a last resort</li>
              </ol>

              <h3 className="text-xl font-semibold mb-3">Class Action Waiver</h3>
              <p className="mb-4">
                You agree that any dispute resolution proceedings will be conducted only on an individual basis 
                and not in a class, consolidated, or representative action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. When we make changes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>We will update the "Effective Date" at the top of this document</li>
                <li>Significant changes will be communicated via email or extension notification</li>
                <li>Continued use of our service constitutes acceptance of updated Terms</li>
                <li>If you disagree with changes, you must discontinue using the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Legal Department</strong></p>
                <p>Email: <a href="mailto:legal@aiaffiliatepro.com" className="text-primary hover:underline">legal@aiaffiliatepro.com</a></p>
                <p>Response Time: Within 5 business days</p>
              </div>
              <p className="mt-4">
                For technical support, visit our <a href="/help-center" className="text-primary hover:underline">Help Center</a> or 
                contact <a href="/contact-us" className="text-primary hover:underline">Customer Support</a>.
              </p>
            </section>
          </div>

          {/* Internal Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Related Pages</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/privacy-policy" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Privacy Policy</h4>
                <p className="text-sm text-muted-foreground">Learn how we protect your data</p>
              </a>
              <a href="/refund-policy" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Refund Policy</h4>
                <p className="text-sm text-muted-foreground">30-day money-back guarantee</p>
              </a>
              <a href="/#pricing" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Pricing Plans</h4>
                <p className="text-sm text-muted-foreground">View our pricing options</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
