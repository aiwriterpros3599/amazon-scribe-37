
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

const PrivacyPolicy = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - AI Affiliate Pro",
    "description": "Learn how AI Affiliate Pro protects your data. Our privacy policy covers data collection, usage, and security for our Amazon affiliate review generator extension.",
    "url": "https://aiaffiliatepro.com/privacy-policy",
    "mainEntity": {
      "@type": "Organization",
      "name": "AI Affiliate Pro",
      "url": "https://aiaffiliatepro.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "privacy@aiaffiliatepro.com",
        "contactType": "customer service"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy - AI Affiliate Pro | Amazon Review Generator Chrome Extension</title>
        <meta name="description" content="Learn how AI Affiliate Pro protects your data. Our privacy policy covers data collection, usage, and security for our Amazon affiliate review generator extension." />
        <meta name="keywords" content="AI Affiliate Pro privacy policy, Chrome extension privacy, Amazon affiliate data protection, review generator privacy" />
        <link rel="canonical" href="https://aiaffiliatepro.com/privacy-policy" />
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
                <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">Extension Usage Data</h3>
              <p className="mb-4">
                AI Affiliate Pro collects minimal usage data to improve our Chrome extension and provide you with the best experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Number of reviews generated per session</li>
                <li>Extension installation and activation data</li>
                <li>Error reports and diagnostic information</li>
                <li>Feature usage analytics (which tools you use most)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Amazon Product Data</h3>
              <p className="mb-4">
                When you use AI Affiliate Pro to generate reviews, we temporarily process:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Product titles, descriptions, and specifications from Amazon pages</li>
                <li>Product images and pricing information (for context)</li>
                <li>Customer review data (publicly available information only)</li>
                <li>Your Amazon affiliate ID (when provided)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email address (for account creation and support communications)</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>OpenAI API key (stored locally in your browser, never on our servers)</li>
                <li>Support communications and feedback</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Review Generation:</strong> Processing Amazon product data to create AI-powered reviews</li>
                <li><strong>Service Improvement:</strong> Analyzing usage patterns to enhance our Chrome extension features</li>
                <li><strong>Customer Support:</strong> Providing technical assistance and responding to your inquiries</li>
                <li><strong>Analytics:</strong> Understanding how our extension is used to prioritize new features</li>
                <li><strong>Communication:</strong> Sending important updates, security notifications, and support messages</li>
                <li><strong>Fraud Prevention:</strong> Detecting and preventing unauthorized access or misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Sharing and Third Parties</h2>
              <p className="mb-4">AI Affiliate Pro integrates with the following third-party services:</p>
              
              <h3 className="text-xl font-semibold mb-3">OpenAI API</h3>
              <p className="mb-4">
                We use OpenAI's GPT models to generate high-quality product reviews. Your API key is stored locally 
                in your browser and never transmitted to our servers. Product data is sent to OpenAI for processing 
                according to their privacy policy.
              </p>

              <h3 className="text-xl font-semibold mb-3">Amazon</h3>
              <p className="mb-4">
                Our extension retrieves publicly available product information from Amazon pages. This data is used 
                solely for review generation and is not stored permanently on our servers.
              </p>

              <h3 className="text-xl font-semibold mb-3">Payment Processors</h3>
              <p className="mb-4">
                We use secure third-party payment processors for handling transactions. Your payment information 
                is processed directly by these providers and is not stored on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security and Storage</h2>
              <p className="mb-4">We implement industry-standard security measures to protect your data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Encryption:</strong> All data transmission uses SSL/TLS encryption</li>
                <li><strong>Secure Infrastructure:</strong> Our servers are hosted on secure, compliant platforms</li>
                <li><strong>Access Control:</strong> Limited access to personal data on a need-to-know basis</li>
                <li><strong>Regular Audits:</strong> Security assessments and updates are performed regularly</li>
                <li><strong>Local Storage:</strong> Sensitive data like API keys are stored locally on your device</li>
                <li><strong>Data Minimization:</strong> We collect and retain only necessary information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
              <p className="mb-4">You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal data we have about you</li>
                <li><strong>Correction:</strong> Update or correct inaccurate personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (right to be forgotten)</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to processing of your personal data for specific purposes</li>
                <li><strong>Restriction:</strong> Request limitation of processing under certain circumstances</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at <strong>privacy@aiaffiliatepro.com</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information for Privacy Questions</h2>
              <p className="mb-4">
                If you have questions about this privacy policy or how we handle your personal data, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Privacy Officer</strong></p>
                <p>Email: <a href="mailto:privacy@aiaffiliatepro.com" className="text-primary hover:underline">privacy@aiaffiliatepro.com</a></p>
                <p>Response Time: Within 72 hours</p>
              </div>
              <p className="mt-4">
                For general support inquiries, visit our <a href="/help-center" className="text-primary hover:underline">Help Center</a> or 
                contact <a href="/contact-us" className="text-primary hover:underline">Customer Support</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to Privacy Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices or for legal, 
                regulatory, or operational reasons. When we make changes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We will update the "Last updated" date at the top of this policy</li>
                <li>Significant changes will be communicated via email or extension notification</li>
                <li>Continued use of our extension constitutes acceptance of the updated policy</li>
                <li>Previous versions will be archived and available upon request</li>
              </ul>
            </section>
          </div>

          {/* Internal Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Related Pages</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/terms-of-service" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Terms of Service</h4>
                <p className="text-sm text-muted-foreground">Read our terms and conditions</p>
              </a>
              <a href="/contact-us" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Contact Us</h4>
                <p className="text-sm text-muted-foreground">Get in touch with our team</p>
              </a>
              <a href="/help-center" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Help Center</h4>
                <p className="text-sm text-muted-foreground">Find answers and tutorials</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
