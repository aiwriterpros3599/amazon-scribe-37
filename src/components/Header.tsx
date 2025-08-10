
import { useState } from "react";
import { Button } from "@/components/ui/button";
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

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
  );
};

export default Header;
