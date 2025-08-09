
import BlogLayout from "@/components/BlogLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, UserIcon, ClockIcon, ArrowRightIcon, SearchIcon, TrendingUpIcon } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const featuredArticles = [
    {
      title: "How to Start Amazon Affiliate Marketing in 2025: Complete Beginner's Guide",
      excerpt: "Learn Amazon affiliate marketing from scratch in 2025. Step-by-step guide with proven strategies to earn your first $1,000. Real examples included.",
      category: "Amazon Affiliate Marketing",
      author: "David Mitchell",
      date: "January 20, 2025",
      readTime: "15 min read",
      slug: "how-to-start-amazon-affiliate-marketing-2025",
      image: "/placeholder.svg?height=400&width=600",
      featured: true
    },
    {
      title: "AI Content Generation for Affiliate Marketing: Complete 2025 Guide",
      excerpt: "Discover how AI is revolutionizing affiliate marketing content creation. Learn the best tools, strategies, and workflows to scale your content production.",
      category: "AI Content Creation",
      author: "David Mitchell", 
      date: "January 19, 2025",
      readTime: "14 min read",
      slug: "ai-content-generation-affiliate-marketing-2025",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "How to Write Amazon Product Reviews That Actually Convert in 2025",
      excerpt: "Master the art of writing high-converting Amazon product reviews. Complete guide with templates, examples, and proven conversion strategies.",
      category: "Product Review Writing",
      author: "David Mitchell",
      date: "January 18, 2025", 
      readTime: "16 min read",
      slug: "how-to-write-amazon-product-reviews-convert-2025",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "25 Best Chrome Extensions for Affiliate Marketers and Content Creators",
      excerpt: "Discover the top Chrome extensions that will supercharge your affiliate marketing workflow. Comprehensive review with feature comparisons and recommendations.",
      category: "Chrome Extension Tips",
      author: "David Mitchell",
      date: "January 17, 2025",
      readTime: "18 min read", 
      slug: "best-chrome-extensions-affiliate-marketers-2025",
      image: "/placeholder.svg?height=400&width=600"
    }
  ];

  const categories = [
    {
      name: "Amazon Affiliate Marketing",
      description: "Complete strategies, tips, and guides for Amazon Associates success. From beginner setups to advanced scaling techniques.",
      count: 3,
      slug: "amazon-affiliate-marketing",
      icon: "🛒",
      color: "bg-blue-500/10 text-blue-700"
    },
    {
      name: "AI Content Creation", 
      description: "Leverage artificial intelligence for automated affiliate content creation. Tools, workflows, and optimization strategies.",
      count: 3,
      slug: "ai-content-creation",
      icon: "🤖",
      color: "bg-purple-500/10 text-purple-700"
    },
    {
      name: "Product Review Writing",
      description: "Master the art of writing compelling product reviews that convert visitors into buyers. Templates and examples included.",
      count: 3,
      slug: "product-review-writing",
      icon: "✍️",
      color: "bg-green-500/10 text-green-700"
    },
    {
      name: "Chrome Extension Tips",
      description: "Browser tools and automation techniques for affiliate marketers. Productivity hacks and extension recommendations.",
      count: 3,
      slug: "chrome-extension-tips",
      icon: "🔧",
      color: "bg-orange-500/10 text-orange-700"
    }
  ];

  const trendingTopics = [
    "AI Product Reviews",
    "Amazon Commission Rates",
    "Affiliate SEO",
    "Content Automation",
    "Chrome Extensions",
    "Conversion Optimization"
  ];

  return (
    <>
      <Helmet>
        <title>AI Affiliate Pro Blog - Expert Amazon Affiliate Marketing Insights</title>
        <meta name="description" content="Master Amazon affiliate marketing with expert insights, AI content creation strategies, and proven techniques. Learn from comprehensive guides and tutorials." />
        <meta name="keywords" content="affiliate marketing blog, amazon affiliate tips, AI content creation, product review writing, chrome extension marketing, affiliate marketing strategies" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "AI Affiliate Pro Blog",
            "description": "Expert insights, strategies, and tutorials for Amazon affiliate marketing success",
            "url": "https://aiaffiliatepro.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "AI Affiliate Pro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://aiaffiliatepro.com/logo.png"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": featuredArticles.map((article, index) => ({
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

      <BlogLayout 
        title="AI Affiliate Pro Blog"
        description="Expert insights, strategies, and tutorials for Amazon affiliate marketing success with AI-powered content creation"
      >
        {/* Search and Newsletter Section */}
        <div className="mb-16">
          <Card className="bg-gradient-feature p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">Stay Updated with the Latest Strategies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Search our comprehensive library of affiliate marketing guides, or subscribe to get the latest 
                strategies and AI tools delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search articles..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="default">Subscribe</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Trending Topics */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <TrendingUpIcon className="w-5 h-5 mr-2 text-primary" />
            <h2 className="text-xl font-bold">Trending Topics</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {trendingTopics.map((topic, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1 cursor-pointer hover:bg-primary hover:text-white transition-colors">
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticles[0] && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm mr-3">Featured</span>
              Latest Guide
            </h2>
            <Card className="border-2 border-primary/20 hover:shadow-large transition-all">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredArticles[0].image}
                    alt={featuredArticles[0].title}
                    className="w-full h-64 lg:h-full object-cover rounded-l-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">Featured Guide</Badge>
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <Badge variant="outline">{featuredArticles[0].category}</Badge>
                    <h3 className="text-2xl font-bold leading-tight hover:text-primary transition-colors">
                      <a href={`/blog/${featuredArticles[0].slug}`}>
                        {featuredArticles[0].title}
                      </a>
                    </h3>
                    <p className="text-muted-foreground">
                      {featuredArticles[0].excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t">
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
                      href={`/blog/${featuredArticles[0].slug}`}
                      className="text-primary hover:text-primary/80 transition-colors flex items-center font-semibold"
                    >
                      Read Full Guide
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Explore Categories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-large transition-all group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`text-2xl p-3 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="group-hover:text-primary transition-colors">
                          <a href={`/blog/category/${category.slug}`}>
                            {category.name}
                          </a>
                        </CardTitle>
                        <Badge variant="secondary">{category.count} articles</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredArticles.slice(1).map((article, index) => (
              <Card key={index} className="hover:shadow-large transition-all group">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge variant="outline" className="absolute top-4 left-4 bg-background">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    <a href={`/blog/${article.slug}`}>
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
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
                      href={`/blog/${article.slug}`}
                      className="text-primary hover:text-primary/80 transition-colors text-sm flex items-center font-medium"
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

        {/* Newsletter CTA */}
        <div>
          <Card className="bg-gradient-hero text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Never Miss a Strategy</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Join 10,000+ affiliate marketers who get our latest guides, AI tools, and proven strategies 
              delivered directly to their inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email..." 
                className="flex-1 bg-white text-black"
              />
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Subscribe Free
              </Button>
            </div>
            <p className="text-sm opacity-80 mt-3">
              No spam. Unsubscribe anytime. 100% free forever.
            </p>
          </Card>
        </div>
      </BlogLayout>
    </>
  );
};

export default Blog;
