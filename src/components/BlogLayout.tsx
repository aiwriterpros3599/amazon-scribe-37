
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Logo from "./Logo";
import { CalendarIcon, UserIcon, ClockIcon } from "lucide-react";

interface BlogLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  showSidebar?: boolean;
}

const BlogLayout = ({ children, title, description, showSidebar = true }: BlogLayoutProps) => {
  const popularArticles = [
    {
      title: "Amazon Affiliate Marketing for Beginners: Complete 2025 Guide",
      slug: "amazon-affiliate-marketing-beginners-guide-2025",
      category: "Amazon Affiliate Marketing"
    },
    {
      title: "AI Product Review Generator: Transform Your Affiliate Marketing",
      slug: "ai-product-review-generator-affiliate-marketing",
      category: "AI Content Creation"
    },
    {
      title: "Best Chrome Extensions for Amazon Affiliates (2025 Review)",
      slug: "best-chrome-extensions-amazon-affiliates-2025",
      category: "Chrome Extension Marketing"
    }
  ];

  const categories = [
    { name: "Amazon Affiliate Marketing", count: 3, slug: "amazon-affiliate-marketing" },
    { name: "Product Review Strategies", count: 3, slug: "product-review-strategies" },
    { name: "AI Content Creation", count: 3, slug: "ai-content-creation" },
    { name: "Chrome Extension Marketing", count: 3, slug: "chrome-extension-marketing" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="/blog" className="text-foreground font-medium">Blog</a>
            <a href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          </nav>
          <Button variant="default" size="lg">Get Started</Button>
        </div>
      </header>

      {title && (
        <section className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>
              {description && (
                <p className="text-xl text-white/90">{description}</p>
              )}
            </div>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 py-12">
        <div className={`grid ${showSidebar ? 'lg:grid-cols-4' : 'grid-cols-1'} gap-12`}>
          <main className={showSidebar ? 'lg:col-span-3' : 'col-span-1'}>
            {children}
          </main>

          {showSidebar && (
            <aside className="space-y-8">
              {/* Extension CTA */}
              <Card className="border-2 border-primary/20 bg-gradient-feature">
                <CardHeader>
                  <CardTitle className="text-center">Start Creating Reviews</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Generate professional Amazon product reviews in seconds
                  </p>
                  <Button variant="default" size="lg" className="w-full">
                    Get AI Affiliate Pro
                  </Button>
                </CardContent>
              </Card>

              {/* Popular Articles */}
              <Card>
                <CardHeader>
                  <CardTitle>Popular Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <h4 className="font-semibold text-sm mb-2 hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <a 
                        href={`/blog/category/${category.slug}`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {category.name}
                      </a>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
