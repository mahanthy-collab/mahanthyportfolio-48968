import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink, 
  Download,
  Calendar,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dhanavathmahanthy@gmail.com",
      action: "mailto:dhanavathmahanthy@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9440897449",
      action: "tel:+919440897449"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Trichy, Tamil Nadu, India",
      action: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/MahanthyD",
      action: "https://linkedin.com/in/MahanthyD"
    }
  ];

  const quickActions = [
    {
      title: "Download Resume",
      description: "Get my latest resume in PDF format",
      icon: Download,
      action: "#",
      variant: "default" as const
    },
    {
      title: "View Portfolio",
      description: "Explore my detailed project portfolio",
      icon: ExternalLink,
      action: "https://bit.ly/MahanthyDhanavathPortfolio",
      variant: "outline" as const
    },
    {
      title: "Schedule a Call",
      description: "Book a time to discuss opportunities",
      icon: Calendar,
      action: "#",
      variant: "secondary" as const
    }
  ];

  const availability = [
    "Available for full-time positions",
    "Open to product management roles",
    "Interested in fintech/banking opportunities",
    "Ready to relocate for the right opportunity"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm actively seeking new opportunities in product management and business analysis. 
            Let's discuss how I can contribute to your team's success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <Card className="card-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <contact.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-muted-foreground">{contact.label}</p>
                        {contact.action ? (
                          <a 
                            href={contact.action}
                            className="text-sm text-foreground hover:text-primary transition-colors truncate block"
                            target={contact.action.startsWith('http') ? '_blank' : undefined}
                            rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground truncate">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant={action.variant}
                      size="lg"
                      className="h-auto p-6 flex-col gap-3 text-center"
                      asChild={action.action.startsWith('http')}
                    >
                      {action.action.startsWith('http') ? (
                        <a href={action.action} target="_blank" rel="noopener noreferrer">
                          <action.icon className="h-6 w-6" />
                          <div>
                            <div className="font-medium">{action.title}</div>
                            <div className="text-xs opacity-80">{action.description}</div>
                          </div>
                        </a>
                      ) : (
                        <>
                          <action.icon className="h-6 w-6" />
                          <div>
                            <div className="font-medium">{action.title}</div>
                            <div className="text-xs opacity-80">{action.description}</div>
                          </div>
                        </>
                      )}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Availability & Status */}
          <div className="space-y-6">
            <Card className="card-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl">Current Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Available for Opportunities</span>
                </div>
                
                <div className="space-y-2">
                  {availability.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl">Preferred Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Product Manager</Badge>
                  <Badge variant="secondary">Business Analyst</Badge>
                  <Badge variant="outline">Technical Product Manager</Badge>
                  <Badge variant="secondary">Digital Transformation Lead</Badge>
                  <Badge variant="outline">Fintech Product Owner</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl">Portfolio Link</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    For detailed project information and case studies:
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://bit.ly/MahanthyDhanavathPortfolio" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      bit.ly/MahanthyDhanavathPortfolio
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Make an Impact
            </h3>
            <p className="text-muted-foreground mb-6">
              With my proven track record in product management and business analysis, 
              I'm excited to bring value to your organization. Let's discuss how my skills 
              align with your team's goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="mailto:dhanavathmahanthy@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/MahanthyD" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;