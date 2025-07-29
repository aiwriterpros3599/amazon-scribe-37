
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AwardIcon, CheckCircleIcon, TrendingUpIcon, UserIcon } from "lucide-react";

const FounderBio = () => {
  return (
    <section className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">Meet Our Founder</h2>
          <p className="text-xl text-muted-foreground">
            Leading Amazon affiliate marketing innovation since 2017
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 hover:shadow-large transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center text-white">
                  <UserIcon className="w-16 h-16" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <CardTitle className="text-3xl mb-2">David Mitchell</CardTitle>
                  <p className="text-xl text-muted-foreground mb-4">
                    Founder & Lead Developer, AI Affiliate Pro
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge variant="outline">8+ Years Experience</Badge>
                    <Badge variant="outline">$500K+ Generated</Badge>
                    <Badge variant="outline">Amazon Associate</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Meet David Mitchell, a seasoned affiliate marketing professional with over 8 years of 
                  specialized experience in Amazon affiliate marketing. As a certified Amazon Associate 
                  and member of the Amazon Influencer Program since 2017, David has generated over $500K 
                  in affiliate commissions while helping thousands of consumers make informed purchasing decisions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  His expertise in combining AI technology with affiliate marketing strategies has made 
                  AI Affiliate Pro the go-to solution for content creators and marketers worldwide.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <AwardIcon className="w-5 h-5 mr-2 text-primary" />
                    Professional Credentials
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Amazon Associate since 2017",
                      "Amazon Influencer Program Member",
                      "Google Analytics Certified",
                      "Digital Marketing Institute Certified",
                      "8+ years affiliate marketing experience",
                      "Featured in MarketingLand, SearchEngineJournal",
                      "Speaker at Affiliate Summit East 2023"
                    ].map((credential, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                        <span className="text-sm">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <TrendingUpIcon className="w-5 h-5 mr-2 text-primary" />
                    Partnership Badges
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "Amazon Associate", icon: "🏪" },
                      { name: "Google Analytics", icon: "📊" },
                      { name: "DMI Certified", icon: "🎓" },
                      { name: "BBB Accredited", icon: "⭐" },
                      { name: "Trustpilot Partner", icon: "💎" },
                      { name: "Chrome Partner", icon: "🌐" }
                    ].map((badge, index) => (
                      <Card key={index} className="p-3 text-center">
                        <div className="text-2xl mb-1">{badge.icon}</div>
                        <div className="text-xs font-medium">{badge.name}</div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderBio;
