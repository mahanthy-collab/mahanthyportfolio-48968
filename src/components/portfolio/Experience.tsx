import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Mindgate Solutions",
      position: "Business Analyst",
      period: "Jul 2025 - Present",
      location: "Chennai, IN",
      type: "Full-time",
      achievements: [
        "Led cross-functional collaboration between development, QA, and business teams across SDLC stages for agile stand-ups and sprint planning",
        "Authored PFDs and FRD documents, integrating regulatory changes, and drove UAT with 95% approval, reducing post-release issues and accelerating client acceptance",
        "Monitored and interpreted regional regulatory requirements, aligning product workflows with multi-level approval processes to ensure security and compliance",
        "Collaborated with QA for stakeholder-aware cross-functional teams, improving product stability by 20% through iterative feedback loops"
      ],
      skills: ["SDLC", "Agile", "BRD/SRS", "UAT", "Stakeholder Management", "Draw.io", "PPT", "Word", "Excel", "PDFs"]
    }
  ];

  const internships = [
    {
      company: "Success Numbers",
      position: "Business Analyst Intern",
      period: "Apr 2024 - Jun 2024",
      location: "Remote",
      achievements: [
        "Analyzed 25 competitors to uncover market trends & growth opportunities, informing new market entry strategies",
        "Led POS product development with 10+ Figma wireframes, directing product workflows and boosting UI efficiency by 20%",
        "Synthesized data from 200 primary & secondary sources, delivering insights that improved decision-making efficiency by 20%",
        "Planned marketing campaigns for enhanced reach through social media growth & customer acquisition, increasing efficiency by 17%",
        "Spearheaded POS product development by creating 10+ detailed Figma wireframes, shaping stakeholder needs & enhancing UI efficiency",
        "Redesigned Table Point of Sale (POS) software to meet the unique needs of 50+ key restaurant clients"
      ],
      skills: ["MS-PPT", "Figma", "Market Research", "Communication", "Financial Analysis"]
    },
    {
      company: "Husk Power Systems",
      position: "Data Analyst Intern",
      period: "Apr 2024 - May 2024",
      location: "Pune, IN", 
      achievements: [
        "Developed Power BI dashboards delivering real-time insights, enhancing decision-making efficiency by 25%",
        "Optimized data workflows for Marketing Suite Survey, Power App & Share Point, reducing manual input by 20%",
        "Streamlined the process of integration of Marketing enabling real-time reporting, reducing manual input by 20%"
      ],
      skills: ["Power BI", "Sheets", "MS-Power Automate", "Share Point", "Data"]
    }
  ];

  const projects = [
    {
      title: "Amazon Wellness Live Project",
      description: "Devised marketing and sales strategy for Amazon Wellness products, developed product ideas and planned GTM strategy",
      technologies: ["Product Strategy", "Marketing", "Go-to-Market", "Business Planning"],
      impact: "Built comprehensive soft launch strategy and action plan for market deployment",
      link: "https://drive.google.com/file/d/1sBVMyiTc3-IcG1yIo48W2yDE2UHDdO0s/view",
      logo: "/lovable-uploads/0386ceaa-1277-4c95-a73e-3fbdda49dbfe.png",
      coverImage: "/lovable-uploads/3a44eca6-5a6a-4875-a888-78b9c2cd3657.png"
    },
    {
      title: "Cricket Power BI Dashboard",
      description: "Gathered data using exploratory techniques to identify insights & created a player selection dashboard in Power BI",
      technologies: ["Power BI", "Data Analysis", "Sports Analytics", "Dashboard Design"],
      impact: "Enhanced decision-making for player selection with comprehensive analytics",
      logo: "/lovable-uploads/4bc35161-949a-44d0-8448-a5b16111a115.png",
      dashboardImage: "/lovable-uploads/91b86a50-3375-4491-80c9-469861799982.png"
    },
    {
      title: "Tableau Netflix Dashboard",
      description: "Developed a fully responsive and interactive Netflix Data Analysis Dashboard using Tableau user metrics data",
      technologies: ["Tableau", "Data Visualization", "Interactive Dashboards", "User Analytics"],
      impact: "Provided comprehensive insights into Netflix content distribution and user engagement",
      logo: "/lovable-uploads/9c2990cb-0f2a-4f4f-8f17-6012d38a8b43.png",
      dashboardImage: "/lovable-uploads/481ee950-01af-4446-8492-2add5f3fc172.png"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proven track record in product management, business analysis, and digital transformation 
            across banking and technology sectors.
          </p>
        </div>

        {/* Current Role */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            Current Position
          </h3>
          
          {experiences.map((exp, index) => (
            <Card key={index} className="card-shadow border-0 mb-6">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-background/50 hover:bg-background transition-colors duration-300 rounded-lg p-2 shadow-sm group">
                      <img 
                        src="/lovable-uploads/4fefd786-58dc-41ab-9e87-da5f7a812440.png" 
                        alt="Mindgate Solutions logo"
                        className="w-16 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{exp.position}</CardTitle>
                      <p className="text-primary font-semibold text-lg">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Internships */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Previous Internships</h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {internships.map((internship, index) => (
              <Card key={index} className="card-shadow border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-background/50 hover:bg-background transition-colors duration-300 rounded-lg p-1 shadow-sm group">
                      <img 
                        src={internship.company === "Success Numbers" ? "/lovable-uploads/5d938e11-adeb-41fd-a9e8-cb3acb5c863f.png" : "/lovable-uploads/51abc131-8dde-4086-a62b-e46c96a4b41f.png"} 
                        alt={`${internship.company} logo`}
                        className="w-12 h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground">{internship.position}</CardTitle>
                      <p className="text-primary font-medium">{internship.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {internship.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {internship.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <ul className="space-y-2 mb-4">
                      {internship.achievements.slice(0, 3).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2 text-sm">Skills & Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {internship.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;