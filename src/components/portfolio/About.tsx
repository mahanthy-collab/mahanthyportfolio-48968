import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target, TrendingUp } from "lucide-react";

const About = () => {
  const majorCourses = [
    "Digital Transformation",
    "Digital Product Management", 
    "Data Visualization for Managers"
  ];

  const minorCourses = [
    "International Marketing",
    "Sports Marketing"
  ];


  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A results-driven MBA graduate with a strong foundation in technology and extensive experience 
            in product management, corporate banking, and digital transformation initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education Section */}
          <Card className="card-shadow border-0">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src="/lovable-uploads/d44995bd-047a-41eb-8f8f-9d81c10e12a6.png" 
                    alt="IIM Trichy logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Master of Business Administration</h3>
                    <p className="text-primary font-medium">Indian Institute of Management, Tiruchirappalli</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">June 2023 - May 2025 • Trichy, IN</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Major Courses (IT & Marketing):</h4>
                    <div className="flex flex-wrap gap-2">
                      {majorCourses.map((course, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Minor Courses (Marketing):</h4>
                    <div className="flex flex-wrap gap-2">
                      {minorCourses.map((course, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src="/lovable-uploads/3dfb4478-02a2-41f1-9370-12c07ebd0696.png" 
                    alt="IIT Patna logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Bachelor of Technology</h3>
                    <p className="text-primary font-medium">Indian Institute of Technology, Patna</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Aug 2019 - May 2023 • Patna, IN</p>
                <p className="text-sm text-muted-foreground mt-1">Metallurgical & Materials Engineering</p>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="card-shadow border-0">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Professional Summary</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Core Expertise</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Product Management & Strategy</li>
                  <li>• Corporate Banking Solutions</li>
                  <li>• Digital Transformation Initiatives</li>
                  <li>• Agile Development & SDLC</li>
                  <li>• Stakeholder Management</li>
                </ul>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Industry Experience</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Financial Services & Banking</li>
                  <li>• FinTech & Payment Solutions</li>
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 rounded-lg p-3">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>Proven track record of delivering high-impact products with 95%+ approval ratings</span>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default About;