
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "./Logo";
import { CalendarIcon, UserIcon, ClockIcon, ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";

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
                      <div className="grid grid-cols-2 gap-4">
                        <a href="/features/ai-content-generation" className="block p-3 hover:bg-accent rounded-lg">
                          <div className="font-semibold">AI Content Generation</div>
                          <div className="text-sm text-muted-foreground">Generate reviews with GPT-4</div>
                        </a>
                        <a href="/features/seo-optimization" className="block p-3 hover:bg-accent rounded-lg">
                          <div className="font-semibold">SEO Optimization Suite</div>
                          <div className="text-sm text-muted-foreground">Built-in SEO best practices</div>
                        </a>
                        <a href="/features/amazon-integration" className="block p-3 hover:bg-accent rounded-lg">
                          <div className="font-semibold">Amazon Integration</div>
                          <div className="text-sm text-muted-foreground">Seamless affiliate linking</div>
                        </a>
                        <a href="/features/image-management" className="block p-3 hover:bg-accent rounded-lg">
                          <div className="font-semibold">Image Management</div>
                          <div className="text-sm text-muted-foreground">Auto image optimization</div>
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
                      <a href="/help-center" className="block p-3 hover:bg-accent rounded-lg">
                        <div className="font-semibold">Help Center</div>
                        <div className="text-sm text-muted-foreground">Support and tutorials</div>
                      </a>
                      <a href="/faq" className="block p-3 hover:bg-accent rounded-lg">
                        <div className="font-semibold">FAQ</div>
                        <div className="text-sm text-muted-foreground">Common questions</div>
                      </a>
                      <a href="/free-starter-kit" className="block p-3 hover:bg-accent rounded-lg">
                        <div className="font-semibold">Free Starter Kit</div>
                        <div className="text-sm text-muted-foreground">Templates and guides</div>
                      </a>
                      <a href="/case-studies" className="block p-3 hover:bg-accent rounded-lg">
                        <div className="font-semibold">Case Studies</div>
                        <div className="text-sm text-muted-foreground">Success stories</div>
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
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>

            <Button variant="default" size="lg" className="hidden lg:flex">Get Started Free</Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-4 mt-4">
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
                <div>
                  <button className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                    Features <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <a href="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
                <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
                <div>
                  <button className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                    Resources <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <a href="/reviews" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
                <Button variant="default" size="lg" className="w-full mt-4">Get Started Free</Button>
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
