import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MamaBear",
      description: "We will bear the load with care... 💙 - Developed a maternity service app using Figma, applying Product Management concepts, from business model creation to defining product metrics, empowering new mothers with mental health and baby growth support",
      technologies: ["Product Management", "Figma", "UX/UI Design", "Market Research", "Business Strategy"],
      impact: "Strategized GTM plan, market sizing, product roadmap for the 'MAMA' app, ensuring successful market entry",
      bulletPoints: [
        "Strategized GTM plan, market sizing, product roadmap for the 'MAMA' app, ensuring successful market entry",
        "Designed wireframes using Balsamiq and Figma, applying UX/UI principles to enhance user experience functionality", 
        "Developed pricing strategies for the app, aligning with market trends & business objectives to optimize revenue"
      ],
      link: "https://www.figma.com/community/file/1429169767741194837/mamabear",
      logo: "/lovable-uploads/mamabear-logo.png"
    },
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
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
            Key Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovative projects showcasing expertise in product management, data analytics, 
            and business strategy across diverse domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 overflow-x-auto">{/* Changed from lg:grid-cols-3 to lg:grid-cols-4 for single line layout */}
          {projects.map((project, index) => (
            <Card key={index} className="card-shadow border-0 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  {project.logo && (
                    <img 
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="h-8 w-8 object-contain"
                    />
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Bullet Points for detailed projects */}
                {project.bulletPoints && (
                  <div className="space-y-2">
                    {project.bulletPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {!project.bulletPoints && (
                    <div className="flex items-start gap-2 text-sm bg-muted/50 rounded-lg p-3">
                      <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{project.impact}</span>
                    </div>
                  )}
                </div>

                {/* Project Images */}
                {project.coverImage && (
                  <div className="mt-4">
                    <button
                      onClick={() => window.open(project.coverImage, '_blank')}
                      className="w-full hover:opacity-90 transition-opacity"
                    >
                      <img 
                        src={project.coverImage}
                        alt={`${project.title} cover`}
                        className="w-full h-32 object-cover rounded-lg border cursor-pointer"
                      />
                    </button>
                  </div>
                )}

                {project.dashboardImage && (
                  <div className="mt-4">
                    <button
                      onClick={() => window.open(project.dashboardImage, '_blank')}
                      className="w-full hover:opacity-90 transition-opacity"
                    >
                      <img 
                        src={project.dashboardImage}
                        alt={`${project.title} dashboard`}
                        className="w-full h-32 object-cover rounded-lg border cursor-pointer"
                      />
                    </button>
                  </div>
                )}

                {/* Link */}
                {project.link && (
                  <button
                    onClick={() => window.open(project.link, '_blank')}
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mt-4"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Project Details
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;