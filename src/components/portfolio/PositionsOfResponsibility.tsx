import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const PositionsOfResponsibility = () => {
  const positions = [
    {
      title: "Senior Member",
      organization: "Consulate Club IIM Trichy",
      period: "2023-25",
      logo: "/lovable-uploads/consulate-logo.png",
      achievements: [
        "Organized and led the execution of four events, including two national-level competitions",
        "Leveraged vendor partnerships to secure sponsorships and foster collaborations for event",
        "Conducted comprehensive analysis and provided consultancy to optimize company strategies"
      ],
      year: "2024"
    },
    {
      title: "Assistant Head Coordinator",
      organization: "Training and Placement Cell, IIT Patna",
      period: "2023",
      logo: "/lovable-uploads/iit-patna-logo.png",
      achievements: [
        "Served for a year as the Assistant Head Coordinator in the Training & Placement Cell at IIT Patna",
        "Managed campus recruitment and training programs for a diverse cohort of over 450 students",
        "Secured a 15% participation rate from 100+ companies, ensuring their success in the initiative"
      ],
      certificateLink: "/lovable-uploads/tpc-certificate.png"
    },
    {
      title: "Co-ordinator",
      organization: "MaTEs Club",
      period: "2023",
      logo: "/lovable-uploads/mates-logo.png",
      achievements: [
        "Orchestrate execution of the flagship events MATES TRIVIA and MatEX inviting industry leaders",
        "Spearheaded 8-member team, optimizing operations, and raising a total of 15,000 INR in funds"
      ]
    },
    {
      title: "Hospitality Advisory",
      organization: "IIT Patna",
      period: "2023",
      logo: "/lovable-uploads/answesha-logo.png",
      achievements: [
        "Served as the advisor in the Hospitality Committee at the college technical fest Answesha'23",
        "Managed a 40-member team, catering to a footfall 10K+ attendees from 200+ Indian colleges",
        "Coordinated accommodation for 250+ people traveling from different locations all over India"
      ],
      certificateLink: "/lovable-uploads/answesha-certificate.png"
    }
  ];

  return (
    <section id="positions" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Positions of Responsibility</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leadership roles and organizational responsibilities that showcase my ability to manage teams, 
            coordinate events, and drive successful outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <img 
                        src={position.logo} 
                        alt={`${position.organization} logo`}
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <CardTitle className="text-xl">{position.title}</CardTitle>
                        <p className="text-primary font-semibold">{position.organization}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {position.period}
                      </div>
                      {position.year && (
                        <Badge variant="secondary">{position.year}</Badge>
                      )}
                    </div>
                  </div>
                  {position.certificateLink && (
                    <a 
                      href={position.certificateLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      title="View Certificate"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {position.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▪</span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositionsOfResponsibility;