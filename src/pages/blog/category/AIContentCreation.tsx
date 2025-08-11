
import { Helmet } from "react-helmet-async";
import BlogLayout from "@/components/BlogLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, UserIcon, ClockIcon, ArrowRightIcon } from "lucide-react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";

const AIContentCreation = () => {
  const articles = [
    {
      title: "AI Content Generation for Affiliate Marketing: Complete 2025 Guide",
      excerpt: "Discover how AI is revolutionizing affiliate marketing content creation. Learn the best tools, strategies, and workflows to scale your content production.",
      author: "David Mitchell",
      date: "January 19, 2025",
      readTime: "14 min read",
      slug: "ai-content-generation-affiliate-marketing-2025",
      image: "/images/blog/ai-content-generation-featured.png"
    },
    {
      title: "ChatGPT vs Specialized AI Tools for Product Reviews: Which Works Better?",
      excerpt: "Comprehensive comparison of ChatGPT and specialized AI writing tools for creating product reviews. Real testing results and recommendations.",
      author: "David Mitchell",
      date: "January 17, 2025",
      readTime: "16 min read",
      slug: "chatgpt-vs-specialized-ai-tools-product-reviews",
      image: "/images/blog/chatgpt-vs-ai-tools-featured.png"
    },
    {
      title: "How AI is Revolutionizing Amazon Product Review Writing in 2025",
      excerpt: "Explore the impact of AI on product review writing. Learn about quality concerns, best practices, and the future of automated content creation.",
      author: "David Mitchell",
      date: "January 15, 2025",
      readTime: "12 min read",
      slug: "ai-revolutionizing-amazon-product-review-writing-2025",
      image: "/images/blog/ai-product-review-writing-featured.png"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Creation - AI Affiliate Pro Blog</title>
        <meta name="description" content="Master AI content creation for affiliate marketing. Learn about the best AI tools, automation strategies, and how to create high-converting content at scale." />
        <meta name="keywords" content="AI content creation, AI writing tools, automated content, AI for affiliate marketing, content automation, AI product reviews" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AI Content Creation",
            "description": "Master AI content creation for affiliate marketing with expert guides and strategies",
            "url": "https://aiaffiliatepro.com/blog/category/ai-content-creation",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": articles.map((article, index) => ({
                "@type": "Article",
                "position": index + 1,
                "name": article.title,
                "description": article.excerpt,
                "url": `https://aiaffiliatepro.com/blog/${article.slug}`
              }))
            }
          })}
        </script>
      </Helmet>

      <BlogLayout>
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>AI Content Creation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Content Creation</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Harness the power of artificial intelligence to create high-quality affiliate marketing content at scale. 
            Learn about the latest AI tools, automation strategies, and best practices for AI-powered content creation.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>{articles.length} Articles</span>
            <span>•</span>
            <span>Updated Weekly</span>
          </div>
        </div>

        <div className="grid gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-large transition-all">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 md:h-full object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="space-y-4">
                    <Badge variant="outline">AI Content Creation</Badge>
                    <h2 className="text-2xl font-bold leading-tight hover:text-primary transition-colors">
                      <a href={`/blog/${article.slug}`}>
                        {article.title}
                      </a>
                    </h2>
                    <p className="text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t mt-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <UserIcon className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <a 
                      href={`/blog/${article.slug}`}
                      className="text-primary hover:text-primary/80 transition-colors flex items-center"
                    >
                      Read More
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </BlogLayout>
    </>
  );
};

export default AIContentCreation;
