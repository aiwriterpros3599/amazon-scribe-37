
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "./Logo";
import { MenuIcon, XIcon } from "lucide-react";

interface BlogLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  showSidebar?: boolean;
}

const BlogLayout = ({ children, title, description, showSidebar = true }: BlogLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                      <div className="grid gap-3">
                        <a href="/features/ai-content-generation" className="block p-3 hover:bg-accent rounded-lg transition-colors">
                          <div className="font-semibold text-foreground">AI Content Generation</div>
                          <div className="text-sm text-muted-foreground">Generate high-quality Amazon product reviews with AI</div>
                        </a>
                        <a href="/features/seo-optimization-suite" className="block p-3 hover:bg-accent rounded-lg transition-colors">
                          <div className="font-semibold text-foreground">SEO Optimization Suite</div>
                          <div className="text-sm text-muted-foreground">Built-in SEO best practices for better rankings</div>
                        </a>
                        <a href="/features/amazon-integration" className="block p-3 hover:bg-accent rounded-lg transition-colors">
                          <div className="font-semibold text-foreground">Amazon Integration</div>
                          <div className="text-sm text-muted-foreground">Seamless integration with Amazon affiliate program</div>
                        </a>
                        <a href="/features/image-management" className="block p-3 hover:bg-accent rounded-lg transition-colors">
                          <div className="font-semibold text-foreground">Image Management</div>
                          <div className="text-sm text-muted-foreground">Automatic image optimization and management</div>
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/how-it-works">
                    How It Works
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/pricing">
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/blog">
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[300px]">
                      <a href="/help-center" className="block p-3 hover:bg-accent rounded-lg transition-colors">
                        <div className="font-semibold text-foreground">Help Center</div>
                        <div className="text-sm text-muted-foreground">Support documentation and tutorials</div>
                      </a>
                      <a href="/faq" className="block p-3 hover:bg-accent rounded-lg transition-colors">
                        <div className="font-semibold text-foreground">FAQ</div>
                        <div className="text-sm text-muted-foreground">Frequently asked questions</div>
                      </a>
                      <a href="/resources/free-starter-kit" className="block p-3 hover:bg-accent rounded-lg transition-colors">
                        <div className="font-semibold text-foreground">Free Starter Kit</div>
                        <div className="text-sm text-muted-foreground">Templates and getting started guides</div>
                      </a>
                      <a href="/resources/case-studies" className="block p-3 hover:bg-accent rounded-lg transition-colors">
                        <div className="font-semibold text-foreground">Case Studies</div>
                        <div className="text-sm text-muted-foreground">Real success stories from our users</div>
                      </a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/reviews">
                    Reviews
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>

            <Button variant="default" size="lg" className="hidden lg:flex">
              Get Started Free
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-3 mt-4">
                <a href="/" className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                  Home
                </a>
                <div className="px-3 py-2">
                  <div className="font-medium text-foreground mb-2">Features</div>
                  <div className="ml-4 space-y-2">
                    <a href="/features/ai-content-generation" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                      AI Content Generation
                    </a>
                    <a href="/features/seo-optimization-suite" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                      SEO Optimization Suite
                    </a>
                    <a href="/features/amazon-integration" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Amazon Integration
                    </a>
                    <a href="/features/image-management" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Image Management
                    </a>
                  </div>
                </div>
                <a href="/how-it-works" className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                  How It Works
                </a>
                <a href="/pricing" className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                  Pricing
                </a>
                <a href="/blog" className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                  Blog
                </a>
                <div className="px-3 py-2">
                  <div className="font-medium text-foreground mb-2">Resources</div>
                  <div className="ml-4 space-y-2">
                    <a href="/help-center" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Help Center
                    </a>
                    <a href="/faq" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                      FAQ
                    </a>
                    <a href="/resources/free-starter-kit" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Free Starter Kit
                    </a>
                    <a href="/resources/case-studies" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Case Studies
                    </a>
                  </div>
                </div>
                <a href="/reviews" className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                  Reviews
                </a>
                <Button variant="default" size="lg" className="mx-3 mt-4">
                  Get Started Free
                </Button>
              </nav>
            </div>
          )}
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
