
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

const AmazonAffiliateMarketing = () => {
  const articles = [
    {
      title: "How to Start Amazon Affiliate Marketing in 2025: Complete Beginner's Guide",
      excerpt: "Learn everything you need to know to start your Amazon affiliate marketing journey from scratch. Step-by-step guide with real examples and proven strategies.",
      author: "David Mitchell",
      date: "January 20, 2025",
      readTime: "15 min read",
      slug: "how-to-start-amazon-affiliate-marketing-2025",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Amazon Affiliate Commission Rates 2025: Complete Category Breakdown",
      excerpt: "Comprehensive guide to Amazon's commission structure across all categories. Find the highest-paying niches and maximize your earnings potential.",
      author: "David Mitchell",
      date: "January 18, 2025",
      readTime: "12 min read",
      slug: "amazon-affiliate-commission-rates-2025",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "10 Best Amazon Affiliate Niches That Actually Make Money in 2025",
      excerpt: "Discover the most profitable Amazon affiliate niches based on real data. Includes competition analysis and earning potential for each niche.",
      author: "David Mitchell",
      date: "January 16, 2025",
      readTime: "18 min read",
      slug: "best-amazon-affiliate-niches-2025",
      image: "/placeholder.svg?height=400&width=600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Amazon Affiliate Marketing - AI Affiliate Pro Blog</title>
        <meta name="description" content="Expert Amazon affiliate marketing strategies, tips, and guides. Learn how to start, optimize, and scale your Amazon Associates business with proven techniques." />
        <meta name="keywords" content="amazon affiliate marketing, amazon associates, affiliate marketing tips, amazon commission rates, affiliate marketing guide" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Amazon Affiliate Marketing",
            "description": "Expert Amazon affiliate marketing strategies, tips, and guides",
            "url": "https://aiaffiliatepro.com/blog/category/amazon-affiliate-marketing",
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
                <BreadcrumbPage>Amazon Affiliate Marketing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Amazon Affiliate Marketing</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Master Amazon affiliate marketing with our comprehensive guides, strategies, and expert tips. 
            Learn how to build a profitable Amazon Associates business from scratch.
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
                    <Badge variant="outline">Amazon Affiliate Marketing</Badge>
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

export default AmazonAffiliateMarketing;
