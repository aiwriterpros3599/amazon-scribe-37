
import { Helmet } from "react-helmet-async";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "FAQ - AI Affiliate Pro | Amazon Review Generator Questions & Answers",
    "description": "Find answers to common questions about AI Affiliate Pro Chrome extension. Learn about features, pricing, and using our Amazon affiliate review generator.",
    "url": "https://aiaffiliatepro.com/faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does AI Affiliate Pro work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI Affiliate Pro is a Chrome extension that uses GPT-4 AI to generate high-quality Amazon product reviews. Simply visit any Amazon product page, click the extension, and it will create a comprehensive review based on the product information, customer feedback, and specifications."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need an OpenAI API key?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you need your own OpenAI API key to use AI Affiliate Pro. This ensures you have direct access to the latest AI models and keeps your usage costs separate. We provide detailed setup instructions to help you get your API key."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between the pricing plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Free Starter allows 10 articles per month, Pro Growth offers 30 articles per month for a one-time payment of $47, and Elite Agency provides unlimited articles for $197. All plans include the same AI-powered features."
        }
      }
    ]
  };

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "How does AI Affiliate Pro work?",
          a: "AI Affiliate Pro is a Chrome extension that uses GPT-4 AI to generate high-quality Amazon product reviews. Simply visit any Amazon product page, click the extension, and it will create a comprehensive review based on the product information, customer feedback, and specifications."
        },
        {
          q: "How do I install the Chrome extension?",
          a: "Visit the Chrome Web Store, search for 'AI Affiliate Pro', and click 'Add to Chrome'. Once installed, the extension icon will appear in your browser toolbar. You'll need to set up your OpenAI API key before generating your first review."
        },
        {
          q: "Do I need an OpenAI API key?",
          a: "Yes, you need your own OpenAI API key to use AI Affiliate Pro. This ensures you have direct access to the latest AI models and keeps your usage costs separate. We provide detailed setup instructions to help you get your API key from OpenAI's website."
        },
        {
          q: "How do I set up my Amazon affiliate ID?",
          a: "In the extension settings, enter your Amazon Associates tracking ID. This will automatically be added to all generated affiliate links, ensuring you receive commissions for any sales generated through your reviews."
        },
        {
          q: "Can I try it before purchasing?",
          a: "Yes! Our Free Starter plan allows you to generate up to 10 articles per month at no cost. This gives you a chance to test the extension and see the quality of AI-generated content before upgrading to a paid plan."
        },
        {
          q: "What Amazon sites are supported?",
          a: "AI Affiliate Pro works with all major Amazon marketplaces including Amazon.com, Amazon.co.uk, Amazon.de, Amazon.fr, Amazon.it, Amazon.es, Amazon.ca, Amazon.com.au, and Amazon.co.jp."
        }
      ]
    },
    {
      title: "Features and Functionality",
      questions: [
        {
          q: "How accurate is the AI content generation?",
          a: "Our AI uses GPT-4 to analyze product specifications, customer reviews, and market data to create accurate, helpful reviews. While highly accurate, we recommend reviewing and editing the generated content to match your personal experience and brand voice."
        },
        {
          q: "Can I customize the review templates?",
          a: "Yes, AI Affiliate Pro includes customizable templates for different review styles including detailed reviews, comparison articles, buyer's guides, and quick summaries. You can also create your own custom templates."
        },
        {
          q: "Does it work with WordPress or other CMS platforms?",
          a: "The extension generates HTML-formatted content that can be easily copied and pasted into any content management system including WordPress, Shopify, Wix, Squarespace, or any HTML editor."
        },
        {
          q: "What's the difference between GPT-3.5 and GPT-4 content?",
          a: "GPT-4 provides more accurate, detailed, and nuanced reviews with better understanding of product context. While GPT-3.5 is faster and less expensive, GPT-4 delivers higher quality content that's more likely to convert readers into buyers."
        },
        {
          q: "Can I generate bulk reviews for multiple products?",
          a: "Yes, our Pro and Elite plans include bulk generation features. You can queue multiple products and generate reviews in batches, saving significant time when working on large affiliate projects."
        },
        {
          q: "How does the SEO optimization work?",
          a: "The extension automatically includes relevant keywords, proper heading structure, meta descriptions, and schema markup. It also suggests internal linking opportunities and optimizes content length for search engine visibility."
        },
        {
          q: "Can I edit the generated content?",
          a: "Absolutely! All generated content is fully editable within the extension. You can modify text, add personal experiences, adjust formatting, and customize the content to match your unique voice and brand."
        }
      ]
    },
    {
      title: "Pricing and Plans",
      questions: [
        {
          q: "What's the difference between the pricing plans?",
          a: "Free Starter: 10 articles per month at no cost. Pro Growth: 30 articles per month for a one-time payment of $47. Elite Agency: Unlimited articles for a one-time payment of $197. All plans include the same AI-powered features."
        },
        {
          q: "Are there any monthly fees?",
          a: "No! AI Affiliate Pro uses a one-time payment model. You pay once and keep the features forever. The only ongoing cost is your OpenAI API usage, which you pay directly to OpenAI based on your actual usage."
        },
        {
          q: "How do I upgrade or downgrade my plan?",
          a: "You can upgrade to a higher plan at any time from your account dashboard. Downgrading isn't applicable since our plans are one-time purchases, but you can continue using your current plan indefinitely."
        },
        {
          q: "What happens if I exceed my article limit?",
          a: "On Free Starter and Pro Growth plans, you'll need to wait until the next month or upgrade to continue generating articles. Elite Agency plan users have unlimited articles and never hit usage limits."
        },
        {
          q: "Is there a refund policy?",
          a: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not completely satisfied with AI Affiliate Pro, contact our support team for a full refund within 30 days of purchase."
        }
      ]
    },
    {
      title: "Technical Support",
      questions: [
        {
          q: "What browsers are supported besides Chrome?",
          a: "Currently, AI Affiliate Pro is designed specifically for Chrome and Chromium-based browsers like Edge, Brave, and Opera. We're working on Firefox and Safari versions for future releases."
        },
        {
          q: "The extension isn't loading or working properly",
          a: "First, ensure you have the latest version of Chrome and the extension. Check that your OpenAI API key is correctly entered and has available credits. If issues persist, try disabling other extensions temporarily or contact our support team."
        },
        {
          q: "I'm getting API connection errors",
          a: "This usually indicates an issue with your OpenAI API key or account. Verify your API key is active, has sufficient credits, and is properly configured in the extension settings. Check OpenAI's status page for any service disruptions."
        },
        {
          q: "How can I improve the extension's performance?",
          a: "For best performance, use the latest Chrome version, ensure a stable internet connection, and consider using GPT-3.5 for faster generation if speed is more important than content quality. Clear your browser cache if you experience slowdowns."
        },
        {
          q: "Can I use this on multiple devices?",
          a: "Yes, you can install and use AI Affiliate Pro on multiple Chrome installations. Your account and usage limits are tied to your license, not specific devices. Simply install the extension and log in with your account credentials."
        },
        {
          q: "How do I clear cache and data?",
          a: "Go to Chrome Settings > Privacy and Security > Clear browsing data. You can also reset the extension by going to chrome://extensions/, finding AI Affiliate Pro, and clicking 'Remove' then reinstalling from the Chrome Web Store."
        }
      ]
    },
    {
      title: "Amazon Integration",
      questions: [
        {
          q: "How do I add my Amazon affiliate ID?",
          a: "In the extension settings, locate the 'Amazon Settings' section and enter your Amazon Associates tracking ID (also called tag). This will automatically be appended to all generated affiliate links to ensure you receive commissions."
        },
        {
          q: "Can I use this for international Amazon sites?",
          a: "Yes, AI Affiliate Pro supports all major Amazon marketplaces. The extension will detect which Amazon site you're on and generate appropriate affiliate links for that marketplace using your corresponding affiliate ID."
        },
        {
          q: "Does this comply with Amazon's policies?",
          a: "Yes, AI Affiliate Pro generates content that complies with Amazon Associates Program policies. However, you're responsible for ensuring your content includes proper affiliate disclosures and follows all Amazon guidelines for your region."
        },
        {
          q: "How are affiliate links generated?",
          a: "The extension automatically creates properly formatted Amazon affiliate links using your tracking ID. Links include all necessary parameters for commission tracking and are compatible with Amazon's SiteStripe and Associates tools."
        },
        {
          q: "Can I track my affiliate performance?",
          a: "While AI Affiliate Pro generates the affiliate links, performance tracking is done through your Amazon Associates dashboard. We recommend using Amazon's reporting tools or third-party analytics to monitor your affiliate earnings and click-through rates."
        }
      ]
    },
    {
      title: "Account and Billing",
      questions: [
        {
          q: "How do I cancel my account?",
          a: "Since our plans are one-time purchases, there's no recurring billing to cancel. You can continue using your purchased plan indefinitely. If you want to stop using the extension, simply remove it from Chrome."
        },
        {
          q: "Can multiple team members use one account?",
          a: "Each license is designed for individual use. For teams, we recommend purchasing separate licenses for each team member to ensure optimal performance and avoid usage conflicts. Contact us for volume licensing options."
        },
        {
          q: "How do I view my usage statistics?",
          a: "Your usage statistics are available in the extension dashboard, showing articles generated this month, remaining quota, and historical usage patterns. This helps you track your content generation and plan upgrades if needed."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various digital payment methods through our secure payment processor. All transactions are processed with enterprise-grade security."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - AI Affiliate Pro | Amazon Review Generator Questions & Answers</title>
        <meta name="description" content="Find answers to common questions about AI Affiliate Pro Chrome extension. Learn about features, pricing, and using our Amazon affiliate review generator." />
        <meta name="keywords" content="AI Affiliate Pro FAQ, Amazon review generator questions, Chrome extension help, affiliate marketing questions" />
        <link rel="canonical" href="https://aiaffiliatepro.com/faq" />
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
                <BreadcrumbPage>FAQ</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about AI Affiliate Pro and learn how to get the most out of our Amazon review generator.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <h3 className="font-medium">{faq.q}</h3>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>{faq.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Additional FAQ Topics */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Additional Questions</h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="plagiarism" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  <h3 className="font-medium">Is the content plagiarism-free?</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>Yes, AI Affiliate Pro generates original content for each product. The AI creates unique reviews based on product specifications and features, not by copying existing content. However, we recommend running content through plagiarism checkers as a best practice.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="review-time" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  <h3 className="font-medium">How long do generated reviews typically take?</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>Review generation typically takes 30-60 seconds depending on the complexity of the product and your chosen AI model. GPT-3.5 is faster (30-45 seconds) while GPT-4 takes longer (45-90 seconds) but provides higher quality content.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="export-content" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  <h3 className="font-medium">Can I export my generated content?</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>Yes, all generated content can be exported in multiple formats including HTML, Markdown, and plain text. You can copy the content directly to your clipboard or export it as files for use in your preferred publishing platform.</p>
                </AccordionContent>
              </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mobile-app" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  <h3 className="font-medium">Is there a mobile app version?</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>Currently, AI Affiliate Pro is only available as a Chrome extension for desktop browsers. While you can use Chrome mobile browsers, the full functionality is optimized for desktop use. We're considering mobile app development for future releases.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our support team is here to help you succeed with AI Affiliate Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/contact-us">Contact Support</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/help-center">Visit Help Center</a>
              </Button>
            </div>
          </div>

          {/* Internal Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <a href="/help-center" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Help Center</h4>
                <p className="text-sm text-muted-foreground">Browse tutorials and guides</p>
              </a>
              <a href="/contact-us" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Contact Support</h4>
                <p className="text-sm text-muted-foreground">Get personalized help</p>
              </a>
              <a href="/#pricing" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Pricing Plans</h4>
                <p className="text-sm text-muted-foreground">Choose your plan</p>
              </a>
              <a href="/refund-policy" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-2">Refund Policy</h4>
                <p className="text-sm text-muted-foreground">30-day money-back guarantee</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
