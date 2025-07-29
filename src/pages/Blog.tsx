
import BlogLayout from "@/components/BlogLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, UserIcon, ClockIcon, ArrowRightIcon } from "lucide-react";

const Blog = () => {
  const featuredArticles = [
    {
      title: "Amazon Affiliate Marketing for Beginners: Complete 2025 Guide",
      excerpt: "Learn Amazon affiliate marketing from scratch in 2025. Step-by-step guide with proven strategies to earn your first $1,000. Free templates included.",
      category: "Amazon Affiliate Marketing",
      author: "David Mitchell",
      date: "January 15, 2025",
      readTime: "12 min read",
      slug: "amazon-affiliate-marketing-beginners-guide-2025",
      image: "/placeholder.svg?height=400&width=600",
      featured: true
    },
    {
      title: "AI Product Review Generator: Transform Your Affiliate Marketing in 2025",
      excerpt: "Discover how AI product review generators can transform your affiliate marketing. Create professional reviews 10x faster with our complete guide.",
      category: "AI Content Creation",
      author: "David Mitchell", 
      date: "January 12, 2025",
      readTime: "10 min read",
      slug: "ai-product-review-generator-affiliate-marketing",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "How to Write Amazon Product Reviews That Convert (2025 Template)",
      excerpt: "Learn to write high-converting Amazon product reviews with our proven 2025 template. Includes examples, SEO tips, and conversion strategies.",
      category: "Product Review Strategies",
      author: "David Mitchell",
      date: "January 10, 2025", 
      readTime: "8 min read",
      slug: "how-to-write-amazon-product-reviews-convert-template",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Best Chrome Extensions for Amazon Affiliates (2025 Review)",
      excerpt: "Discover the top Chrome extensions for Amazon affiliates in 2025. Boost productivity, research products, and automate content creation.",
      category: "Chrome Extension Marketing",
      author: "David Mitchell",
      date: "January 8, 2025",
      readTime: "15 min read", 
      slug: "best-chrome-extensions-amazon-affiliates-2025",
      image: "/placeholder.svg?height=400&width=600"
    }
  ];

  const categories = [
    {
      name: "Amazon Affiliate Marketing",
      description: "Strategies, tips, and guides for Amazon Associates success",
      count: 3,
      slug: "amazon-affiliate-marketing"
    },
    {
      name: "Product Review Strategies", 
      description: "How to write compelling product reviews that convert",
      count: 3,
      slug: "product-review-strategies"
    },
    {
      name: "AI Content Creation",
      description: "Leverage AI for automated affiliate content creation",
      count: 3,
      slug: "ai-content-creation"
    },
    {
      name: "Chrome Extension Marketing",
      description: "Browser tools and automation for affiliate marketers",
      count: 3,
      slug: "chrome-extension-marketing"
    }
  ];

  return (
    <BlogLayout 
      title="AI Affiliate Pro Blog"
      description="Expert insights, strategies, and tutorials for Amazon affiliate marketing success"
    >
      {/* Featured Article */}
      {featuredArticles[0] && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          <Card className="border-2 border-primary/20 hover:shadow-large transition-all">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredArticles[0].image}
                  alt={featuredArticles[0].title}
                  className="w-full h-64 md:h-full object-cover rounded-l-lg"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <Badge variant="outline">{featuredArticles[0].category}</Badge>
                  <h3 className="text-2xl font-bold leading-tight hover:text-primary transition-colors">
                    <a href={`/blog/article/${featuredArticles[0].slug}`}>
                      {featuredArticles[0].title}
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    {featuredArticles[0].excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <UserIcon className="w-4 h-4 mr-1" />
                      {featuredArticles[0].author}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {featuredArticles[0].date}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {featuredArticles[0].readTime}
                    </div>
                  </div>
                  <a 
                    href={`/blog/article/${featuredArticles[0].slug}`}
                    className="text-primary hover:text-primary/80 transition-colors flex items-center"
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Recent Articles */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.slice(1).map((article, index) => (
            <Card key={index} className="hover:shadow-large transition-all">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <Badge variant="outline" className="w-fit">{article.category}</Badge>
                <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                  <a href={`/blog/article/${article.slug}`}>
                    {article.title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <a 
                    href={`/blog/article/${article.slug}`}
                    className="text-primary hover:text-primary/80 transition-colors text-sm flex items-center"
                  >
                    Read More
                    <ArrowRightIcon className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-large transition-all group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <a href={`/blog/category/${category.slug}`}>
                        {category.name}
                      </a>
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                  <Badge variant="secondary">{category.count} articles</Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </BlogLayout>
  );
};

export default Blog;
