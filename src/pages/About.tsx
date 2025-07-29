
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FounderBio from "@/components/FounderBio";
import Logo from "@/components/Logo";
import { 
  RocketIcon, 
  UsersIcon, 
  TrendingUpIcon, 
  ShieldCheckIcon,
  AwardIcon,
  GlobeIcon,
  BrainCircuitIcon,
  CheckCircleIcon
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>
          <Button variant="default" size="lg">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              About AI Affiliate Pro
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Revolutionizing Amazon affiliate marketing through AI-powered content creation. 
              Join 50,000+ successful affiliates who trust our Chrome extension.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                <RocketIcon className="w-5 h-5 mr-2" />
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold">Our Mission</h2>
              <p className="text-xl text-muted-foreground">
                Empowering content creators with AI technology to build successful affiliate businesses
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  Democratizing High-Quality Content Creation
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that every content creator, regardless of their writing experience or technical 
                  background, should have access to professional-grade content creation tools. Our AI-powered 
                  Chrome extension levels the playing field, allowing anyone to create compelling Amazon 
                  product reviews that convert visitors into buyers.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By combining cutting-edge artificial intelligence with deep understanding of affiliate 
                  marketing psychology, we've created a tool that doesn't just save time – it creates 
                  better content than most people can write manually.
                </p>
              </div>
              
              <Card className="p-8 border-2 hover:shadow-large transition-all">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                    <BrainCircuitIcon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold">AI-Powered Innovation</h4>
                  <p className="text-muted-foreground">
                    Leveraging the latest advances in natural language processing 
                    to create human-quality content at machine speed.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-feature">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">By the Numbers</h2>
            <p className="text-xl text-muted-foreground">
              Our impact on the affiliate marketing community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "50,000+",
                label: "Active Users",
                description: "Content creators worldwide",
                icon: <UsersIcon className="w-8 h-8" />
              },
              {
                number: "2.5M+",
                label: "Reviews Generated",
                description: "Professional content created",
                icon: <RocketIcon className="w-8 h-8" />
              },
              {
                number: "$50M+",
                label: "Affiliate Revenue",
                description: "Generated by our users",
                icon: <TrendingUpIcon className="w-8 h-8" />
              },
              {
                number: "15+",
                label: "Countries Supported",
                description: "Amazon domains worldwide",
                icon: <GlobeIcon className="w-8 h-8" />
              }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-8 border-2 hover:shadow-large transition-all">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <FounderBio />

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We never compromise on content quality. Every feature is designed to produce professional-grade results that convert.",
                icon: <AwardIcon className="w-8 h-8" />
              },
              {
                title: "User Success",
                description: "Your success is our success. We measure our progress by the affiliate revenue our users generate.",
                icon: <TrendingUpIcon className="w-8 h-8" />
              },
              {
                title: "Transparency",
                description: "No hidden fees, no misleading claims. We're honest about what our tool can and cannot do.",
                icon: <ShieldCheckIcon className="w-8 h-8" />
              },
              {
                title: "Innovation",
                description: "We stay at the cutting edge of AI technology to give our users every competitive advantage.",
                icon: <BrainCircuitIcon className="w-8 h-8" />
              },
              {
                title: "Community",
                description: "We build tools that strengthen the affiliate marketing community and help creators support each other.",
                icon: <UsersIcon className="w-8 h-8" />
              },
              {
                title: "Accessibility",
                description: "Professional content creation tools should be available to everyone, regardless of budget or experience.",
                icon: <GlobeIcon className="w-8 h-8" />
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 border-2 hover:shadow-large transition-all group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your Affiliate Business?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90">
              Join thousands of successful affiliates who've chosen AI Affiliate Pro
            </p>
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
              <RocketIcon className="w-6 h-6 mr-2" />
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
