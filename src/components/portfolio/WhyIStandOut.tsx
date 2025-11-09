import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Target, Lightbulb, BarChart } from "lucide-react";

const WhyIStandOut = () => {
  const standoutPoints = [
    {
      title: "Versatile Expertise",
      description: "Diverse industry experience and proficiency in tools like Power BI, Figma, and Tableau, delivering data-driven solutions that optimize decision-making and business operations.",
      icon: BarChart
    },
    {
      title: "User-Centric Design",
      description: "Strong focus on UX/UI, ensuring products meet market needs and enhance user experience, backed by strategic, data-led insights.",
      icon: Target
    },
    {
      title: "Innovative Problem-Solving",
      description: "Proven ability to deliver tailored solutions, such as redesigning POS software for 50+ clients and shaping product strategies in competitive markets.",
      icon: Lightbulb
    },
    {
      title: "Detail-Oriented Strategy",
      description: "Expertise in creating wireframes, conducting competitor analysis, and developing pricing strategies that drive business alignment and growth.",
      icon: CheckCircle
    },
    {
      title: "Collaborative Leadership",
      description: "Strong leadership in managing teams and events, ensuring efficient execution, and driving impactful project results.",
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Why I <span className="text-primary">Stand Out?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I will help your business grow by 10x by solving for users, their needs and pain points, 
            thus solve for business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standoutPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="card-shadow border-0 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {index + 1}. {point.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyIStandOut;