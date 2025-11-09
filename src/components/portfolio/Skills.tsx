import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  BarChart3, 
  Settings, 
  Users, 
  Briefcase,
  Brain,
  Globe,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: Briefcase,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      skills: [
        { name: "Product Strategy", level: 90 },
        { name: "User Research", level: 85 },
        { name: "Roadmap Planning", level: 90 },
        { name: "Stakeholder Management", level: 95 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Go-to-Market Strategy", level: 80 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Data Visualization", level: 90 },
        { name: "Market Research", level: 95 },
        { name: "Business Intelligence", level: 80 },
        { name: "Excel/Sheets", level: 90 },
        { name: "SQL", level: 70 }
      ]
    },
    {
      title: "Business Analysis",
      icon: Brain,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      skills: [
        { name: "Requirements Gathering", level: 95 },
        { name: "Process Mapping", level: 90 },
        { name: "BRD/SRS Documentation", level: 95 },
        { name: "UAT Management", level: 90 },
        { name: "Workflow Design", level: 85 },
        { name: "Gap Analysis", level: 85 }
      ]
    }
  ];

  const tools = [
    { category: "Design & Prototyping", items: ["Figma", "Miro", "Canva"] },
    { category: "Project Management", items: ["JIRA", "Asana", "MS Project"] },
    { category: "Analytics & BI", items: ["Power BI", "Tableau", "Google Analytics"] },
    { category: "Documentation", items: ["SharePoint", "MS Office Suite", "Google Workspace", "Word"] },
    { category: "Banking Platforms", items: ["SWIFT Network", "Core Banking", "Payment Gateways"] }
  ];


  return (
    <section className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning product management, technical implementation, 
            and business strategy with proven expertise in banking and fintech domains.
          </p>
        </div>

        {/* Core Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-shadow border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 ${category.bgColor} rounded-lg`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Platforms */}
        <Card className="card-shadow border-0 mb-16">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Settings className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-2xl">Tools & Platforms</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((toolGroup, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold text-foreground">{toolGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {toolGroup.items.map((tool, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default Skills;