import { Play, Factory, Settings, Package, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ProductionProcessSection() {
  const { ref } = useScrollAnimation();

  const processSteps = [
    {
      icon: Factory,
      title: "Raw Material Preparation",
      description: "High-quality wood is carefully selected and prepared for the manufacturing process."
    },
    {
      icon: Settings,
      title: "Precision Cutting",
      description: "Advanced machinery cuts the wood into precise splint dimensions with consistent quality."
    },
    {
      icon: Package,
      title: "Quality Control",
      description: "Each splint undergoes rigorous quality checks to ensure it meets our high standards."
    },
    {
      icon: CheckCircle,
      title: "Packaging & Export",
      description: "Finished products are carefully packaged and prepared for export to global markets."
    }
  ];

  return (
    <section id="production-process" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 fade-in-up" data-testid="production-process-title">
              Our Production Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up" data-testid="production-process-subtitle">
              Discover how we manufacture high-quality safety match splints using advanced technology and strict quality control measures.
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-16 fade-in-up">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/8SX9do1cT_k"
                    title="Amar Splints Production Process"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-testid="production-video"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Watch Our Manufacturing Process</h3>
                  <p className="text-muted-foreground">
                    See how we transform raw materials into premium safety match splints through our state-of-the-art production facility.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="text-center hover-scale fade-in-up" data-testid={`process-step-${index + 1}`}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white rounded-xl p-8 fade-in-up">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4" data-testid="production-capabilities-title">
                Production Capabilities
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="capability-1">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <h4 className="font-semibold mb-2">Daily Production</h4>
                <p className="text-sm text-muted-foreground">
                  Thousands of high-quality splints produced daily
                </p>
              </div>
              <div className="text-center" data-testid="capability-2">
                <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
                <h4 className="font-semibold mb-2">Quality Rate</h4>
                <p className="text-sm text-muted-foreground">
                  Consistently high quality with minimal defects
                </p>
              </div>
              <div className="text-center" data-testid="capability-3">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <h4 className="font-semibold mb-2">Production</h4>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock manufacturing capabilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

