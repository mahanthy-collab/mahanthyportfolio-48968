import { Card, CardContent } from "@/components/ui/card";

const Internships = () => {
  const internships = [
    {
      name: "Husk Power Systems", 
      logo: "/lovable-uploads/51abc131-8dde-4086-a62b-e46c96a4b41f.png",
      role: "Data Analyst Intern",
      type: "Summer Internship 2022"
    },
    {
      name: "Success Numbers",
      logo: "/lovable-uploads/5d938e11-adeb-41fd-a9e8-cb3acb5c863f.png", 
      role: "Business Analyst Intern",
      type: "Winter Internship 2023"
    }
  ];

  const associatedOrganizations = [
    {
      name: "Husk Power Systems",
      logo: "/lovable-uploads/51abc131-8dde-4086-a62b-e46c96a4b41f.png"
    },
    {
      name: "Success Numbers",
      logo: "/lovable-uploads/5d938e11-adeb-41fd-a9e8-cb3acb5c863f.png"
    },
    {
      name: "Mindgate Solutions",
      logo: "/lovable-uploads/4fefd786-58dc-41ab-9e87-da5f7a812440.png"
    },
    {
      name: "DRDO",
      logo: "/lovable-uploads/48aef1c7-4960-49c4-ba04-18ffd9526819.png"
    },
    {
      name: "SWACHH AI",
      logo: "/lovable-uploads/8e2e35da-60c5-4ca0-9762-0e14a2b26e60.png"
    },
    {
      name: "ISRO",
      logo: "/lovable-uploads/a50b3b73-745e-4611-918e-815831df4730.png"
    }
  ];

  return (
    <section id="internships" className="py-16 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-foreground mb-4">
            Internship Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gained valuable industry experience through internships at innovative companies 
            in renewable energy and analytics sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {internships.map((internship, index) => (
            <Card key={index} className="card-shadow border-0 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <img 
                    src={internship.logo} 
                    alt={`${internship.name} logo`}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {internship.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-1">{internship.role}</p>
                <p className="text-xs text-muted-foreground">{internship.type}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Associated Organizations */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            Associated Organizations
          </h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {associatedOrganizations.map((org, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img 
                  src={org.logo}
                  alt={`${org.name} logo`}
                  className="h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;