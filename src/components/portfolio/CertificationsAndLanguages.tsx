import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Globe2 } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Level D Project Management Professional (PMP)",
      organization: "Project Management Institute",
      link: "/lovable-uploads/2c8138c6-69e8-43a3-aa7c-a546da6049c3.png"
    },
    {
      title: "Product Management Certification",
      organization: "Certified Product Management",
      link: "/lovable-uploads/10f407f0-89ae-47b5-a307-36f15c0ddfd1.png"
    },
    {
      title: "Accounting Fundamentals",
      organization: "Corporate Finance Institute",
      link: "/lovable-uploads/c0889534-cc2b-4a1a-bee4-d7a1f18b5fbb.png"
    },
    {
      title: "Satellite Photogrammetry and its Application",
      organization: "ISRO - Indian Space Research Organisation",
      link: "/lovable-uploads/7f2f5c21-95d4-4919-9fb7-0f9ded42b9fe.png"
    },
    {
      title: "Agile & Scrum Master",
      organization: "Agile Certification Institute"
    },
    {
      title: "Digital Transformation Specialist",
      organization: "IIM Trichy"
    },
    {
      title: "Data Analytics for Managers",
      organization: "IIM Trichy"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-4xl font-bold font-heading text-foreground">Certifications</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications demonstrating expertise across product management, 
            project leadership, and technical domains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-shadow border-0 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      {cert.link ? (
                        <button
                          onClick={() => window.open(cert.link, '_blank')}
                          className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer text-left group-hover:text-primary"
                        >
                          {cert.title}
                        </button>
                      ) : (
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                      )}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <p className="text-muted-foreground text-sm font-medium">
                      {cert.organization}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;