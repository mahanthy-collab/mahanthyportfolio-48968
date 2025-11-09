import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Trophy, BookOpen } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Research Paper: The Banjara Lifestyle & Community",
      description: "Research paper published with 3500+ viewership at IRJMS (International Research Journal of Management Sociology & Humanities)",
      type: "Research",
      icon: BookOpen,
      link: "https://www.irjms.com/wp-content/uploads/2020/10/IRJMS-2020-020-website.pdf",
      impact: "3500+ Views"
    },
    {
      title: "IIM Lucknow Case Competition",
      description: "Secured 12th position among 3,267 participants in IIM Lucknow's Triple Bottom Line 2.0 case study competition",
      type: "Competition",
      icon: Trophy,
      impact: "12th Position out of 3,267 participants"
    },
    {
      title: "IIT Patna E-Cell Start-Up Competition",
      description: "Received 20,000 INR cash prize among 15 stalls at IIT Patna's 1-week IIT E-cell Start-Up Competition",
      type: "Competition",
      icon: Award,
      impact: "₹20,000 Cash Prize"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic excellence, research contributions, and competitive achievements 
            demonstrating leadership and analytical capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-shadow border-0 group hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg text-foreground leading-tight">
                        {achievement.title}
                      </CardTitle>
                      {achievement.link && (
                        <a 
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs mt-2">
                      {achievement.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
                
                <div className="bg-primary/5 rounded-lg p-3">
                  <p className="text-sm text-primary font-medium">
                    {achievement.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;