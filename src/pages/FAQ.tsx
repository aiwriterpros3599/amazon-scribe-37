
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SearchIcon, HelpCircleIcon, MessageCircleIcon, BookOpenIcon, CreditCardIcon, SettingsIcon } from "lucide-react";
import Logo from "@/components/Logo";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: <BookOpenIcon className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      questions: [
        {
          question: "How does the AI Amazon product review generator work?",
          answer: "Our Chrome extension uses advanced GPT-4 AI models to analyze Amazon product data and generate high-quality, unique content. Simply visit any Amazon product page, click our extension icon, and watch as professional reviews, comparisons, and buying guides are created in seconds. The AI understands product features, benefits, and creates persuasive copy that converts visitors into buyers."
        },
        {
          question: "How quickly can I start generating Amazon product reviews?",
          answer: "You can start generating content within 5 minutes of purchase! Simply install the Chrome extension from the Chrome Web Store, add your OpenAI API key in the settings, and you're ready to go. No complex setup, no learning curve - just instant, professional content creation."
        },
        {
          question: "What browsers are supported besides Chrome?",
          answer: "Currently, AI Affiliate Pro is exclusively designed for Google Chrome as a Chrome extension. We chose Chrome for its robust extension capabilities and widespread adoption among marketers. Support for other browsers may be considered in future updates based on user demand."
        },
        {
          question: "Do I need any technical skills to use this?",
          answer: "No technical skills required! AI Affiliate Pro is designed for marketers, not developers. The interface is intuitive - just click, generate, and customize. Our step-by-step tutorials and video guides walk you through every feature."
        },
        {
          question: "Can I try it before purchasing?",
          answer: "Yes! We offer a Free Starter plan that includes 10 articles per month with core features. This lets you test the extension and see the content quality before upgrading to a paid plan."
        }
      ]
    },
    {
      title: "Features and Functionality",
      icon: <SettingsIcon className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      questions: [
        {
          question: "Is this better than other Amazon affiliate content tools?",
          answer: "Yes! Unlike other tools that create generic content, our AI generates personalized, SEO-optimized reviews that read naturally. We support all Amazon domains worldwide, include advanced SEO features, and provide a professional editor. Most importantly, our content converts better because it's written specifically for Amazon affiliate marketing."
        },
        {
          question: "How accurate is the AI content generation?",
          answer: "Our AI content is highly accurate, drawing from real Amazon product data, customer reviews, and specifications. The GPT-4 models understand context and create factual, detailed reviews. However, we always recommend reviewing and customizing the content to match your brand voice and add personal insights."
        },
        {
          question: "Can I customize the review templates?",
          answer: "Absolutely! The advanced editor allows you to modify templates, adjust tone, add personal experiences, and customize the content structure. You can save your preferred styles and reuse them for consistency across your affiliate site."
        },
        {
          question: "Is the content generated unique and SEO-optimized?",
          answer: "Yes! Every piece of content is 100% unique and optimized for search engines. Our AI generates original content that includes targeted keywords, proper header structure, meta descriptions, schema markup, and other SEO elements that help your content rank higher on Google."
        },
        {
          question: "Does it work with WordPress/other CMS?",
          answer: "The extension generates content that can be copied and pasted into any CMS including WordPress, Shopify, Wix, or static HTML sites. We're working on direct integrations with popular platforms for seamless publishing workflows."
        },
        {
          question: "What's the difference between GPT-3.5 and GPT-4 content?",
          answer: "GPT-4 produces more sophisticated, nuanced content with better understanding of context and persuasive writing. It creates longer, more detailed reviews with better product analysis. GPT-3.5 is faster and more cost-effective for basic reviews, while GPT-4 excels at complex comparisons and buying guides."
        }
      ]
    },
    {
      title: "Pricing and Plans",
      icon: <CreditCardIcon className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      questions: [
        {
          question: "What's the difference between the Free and Pro plans?",
          answer: "The Free Starter plan includes 10 articles per month with GPT-3.5 access, basic editor features, and email support. The Pro Growth plan offers 30 articles per month with GPT-4 access, advanced SEO features, content repurposing tools, priority support, and includes our Affiliate Marketing Course."
        },
        {
          question: "What's included in the 30-day money-back guarantee?",
          answer: "We offer a risk-free 30-day money-back guarantee. If you're not completely satisfied with AI Affiliate Pro for any reason, contact our support team within 30 days for a full refund. No questions asked, no hassle. We're confident you'll love the results."
        },
        {
          question: "How do I upgrade/downgrade my plan?",
          answer: "You can change your plan anytime from your account dashboard. Upgrades take effect immediately, and you'll only pay the difference. For downgrades, changes take effect at your next billing cycle, and we'll provide a prorated credit."
        },
        {
          question: "Is there a mobile app version?",
          answer: "Currently, AI Affiliate Pro is a Chrome extension designed for desktop use where affiliate marketers typically do their content creation and research. A mobile companion app is on our roadmap for content editing and management on the go."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: <HelpCircleIcon className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      questions: [
        {
          question: "Do I need my own OpenAI API key?",
          answer: "Yes, you'll need your own OpenAI API key for content generation. This ensures your data privacy, gives you control over costs (typically $0.01-$0.10 per article), and provides unlimited usage based on your needs. Setting up an API key takes 2 minutes and we provide step-by-step instructions plus video tutorials."
        },
        {
          question: "What happens if I exceed my article limit?",
          answer: "If you reach your monthly article limit, you can either wait until next month for your limit to reset, upgrade to a higher plan for more articles, or use your own API credits to continue generating content immediately."
        },
        {
          question: "How long do generated reviews typically take?",
          answer: "Most reviews generate in 15-30 seconds depending on content length and complexity. Product comparisons and buying guides may take 30-60 seconds. The process is much faster than writing manually and the results are consistently high-quality."
        },
        {
          question: "Can I export my generated content?",
          answer: "Yes! All generated content can be exported in multiple formats including HTML, Markdown, and plain text. You can also copy content directly to your clipboard for easy pasting into your preferred editor or CMS."
        },
        {
          question: "Is the content plagiarism-free?",
          answer: "Absolutely! All AI-generated content is original and unique. The AI doesn't copy existing reviews but creates new content based on product data and specifications. Each piece of content is completely original and passes plagiarism checks."
        }
      ]
    },
    {
      title: "Amazon Integration",
      icon: <SearchIcon className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
      questions: [
        {
          question: "Which Amazon domains and countries are supported?",
          answer: "We support all major Amazon domains worldwide including amazon.com (US), amazon.ca (Canada), amazon.co.uk (UK), amazon.de (Germany), amazon.fr (France), amazon.es (Spain), amazon.it (Italy), amazon.in (India), amazon.com.mx (Mexico), amazon.com.br (Brazil), amazon.com.au (Australia), amazon.jp (Japan), and more. The extension automatically detects the domain and extracts product data accordingly."
        },
        {
          question: "How do I add my Amazon affiliate ID?",
          answer: "In the extension settings, you can add your Amazon Associate tracking IDs for different countries. The extension will automatically insert your affiliate links when generating content, ensuring you earn commissions from every click."
        },
        {
          question: "Can I use this for international Amazon sites?",
          answer: "Yes! The extension works seamlessly across all Amazon international domains. It automatically detects the local Amazon site and generates content appropriate for that market, including local pricing, availability, and regional product variations."
        },
        {
          question: "Does this comply with Amazon affiliate guidelines?",
          answer: "Yes, our content generation follows Amazon's affiliate program policies. We include proper disclosures, maintain honest review standards, and ensure compliance with FTC guidelines for affiliate marketing. However, always review Amazon's current terms as they can change."
        }
      ]
    },
    {
      title: "Account and Billing",
      icon: <MessageCircleIcon className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500",
      questions: [
        {
          question: "Can multiple team members use one account?",
          answer: "The Free and Pro plans are designed for individual use. The Elite Agency plan includes team collaboration features and can accommodate multiple users under one account with proper user management and access controls."
        },
        {
          question: "How do I cancel my account?",
          answer: "You can cancel anytime from your account settings. For paid plans, you'll retain access until your current billing period ends. For the Free plan, you can simply stop using the service or delete the extension."
        },
        {
          question: "Can I use this for multiple websites and niches?",
          answer: "Absolutely! There are no restrictions on the number of websites, niches, or affiliate programs you can use this with. Create content for technology, health, fitness, home & garden, beauty, sports, or any other niche. The AI adapts to any product category automatically."
        }
      ]
    }
  ];

  // Schema.org structured data for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    )
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Navigation Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Home</a>
              <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Features</a>
              <a href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Pricing</a>
              <a href="/help-center" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Help Center</a>
              <a href="/contact-us" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Contact</a>
            </nav>
            <Button variant="default" size="lg" className="font-semibold">
              Get Started Free
            </Button>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground">Home</a>
              <span>/</span>
              <span className="text-foreground">FAQ</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <HelpCircleIcon className="w-10 h-10" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Find answers to common questions about AI Affiliate Pro Chrome extension. 
                Learn about features, pricing, and using our Amazon affiliate review generator.
              </p>
              
              <div className="flex items-center justify-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">35+</div>
                  <div className="text-white/80">Questions Answered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-white/80">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-white/80">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8 mb-16">
                {faqCategories.map((category, index) => (
                  <a
                    key={index}
                    href={`#category-${index}`}
                    className="group"
                  >
                    <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                      <CardHeader className="text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}>
                          {category.icon}
                        </div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <Badge variant="outline" className="mx-auto">
                          {category.questions.length} questions
                        </Badge>
                      </CardHeader>
                    </Card>
                  </a>
                ))}
              </div>

              {/* FAQ Content */}
              <div className="space-y-16">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} id={`category-${categoryIndex}`} className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white`}>
                        {category.icon}
                      </div>
                      <h2 className="text-3xl font-bold">{category.title}</h2>
                    </div>
                    
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((item, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`item-${categoryIndex}-${index}`} 
                          className="border border-border rounded-lg px-6 bg-background/50"
                        >
                          <AccordionTrigger className="text-left font-semibold hover:text-primary text-lg">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pt-4 text-lg leading-relaxed">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>

              {/* Contact Support */}
              <div className="text-center mt-20">
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5 p-8">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold mb-4">Still Have Questions?</CardTitle>
                    <p className="text-xl text-muted-foreground mb-8">
                      Can't find the answer you're looking for? Our support team is here to help.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="default" size="lg" asChild>
                        <a href="/contact-us">Contact Support</a>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <a href="/help-center">Visit Help Center</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t border-border py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-10">
              <div className="space-y-6">
                <Logo />
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The #1 Chrome extension for Amazon product review generation. 
                  Transform your affiliate marketing with AI.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-6">Product</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><a href="/#features" className="hover:text-foreground transition-colors">Features</a></li>
                  <li><a href="/#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                  <li><a href="/#testimonials" className="hover:text-foreground transition-colors">Testimonials</a></li>
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

export default FAQ;
