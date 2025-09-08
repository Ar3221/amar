import { ServerCog, Users, Factory } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ManufacturingSection() {
  const { ref } = useScrollAnimation();

  const processSteps = [
    {
      number: 1,
      title: "Raw Material Selection",
      description: "Premium quality wood sourced from sustainable forests, ensuring consistent grain and moisture content."
    },
    {
      number: 2,
      title: "Precision Cutting",
      description: "Advanced machinery cuts wooden splints to exact specifications with minimal waste and maximum efficiency."
    },
    {
      number: 3,
      title: "Chemical Treatment",
      description: "Safe and effective chemical application using state-of-the-art coating systems for optimal ignition properties."
    },
    {
      number: 4,
      title: "Quality Testing",
      description: "Comprehensive quality control testing ensures every batch meets our stringent quality standards."
    }
  ];

  return (
    <section id="manufacturing" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 fade-in-up" data-testid="manufacturing-title">
              Manufacturing Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up" data-testid="manufacturing-subtitle">
              Our state-of-the-art manufacturing process combines traditional expertise with modern technology 
              to deliver products of unmatched quality and consistency.
            </p>
          </div>
          
          {/* Process Timeline */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Quality control testing facility" 
                className="rounded-xl shadow-lg w-full h-auto hover-scale"
                data-testid="manufacturing-image"
              />
            </div>
            
            <div className="space-y-8 fade-in-up">
              {processSteps.map((step) => (
                <div key={step.number} className="flex items-start" data-testid={`process-step-${step.number}`}>
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-muted rounded-xl fade-in-up" data-testid="capability-production">
              <ServerCog className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Production Capacity</h3>
              <p className="text-3xl font-bold text-accent mb-2">1M+</p>
              <p className="text-muted-foreground">Matches per day</p>
            </div>
            
            <div className="text-center p-8 bg-muted rounded-xl fade-in-up" data-testid="capability-workforce">
              <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Skilled Workforce</h3>
              <p className="text-3xl font-bold text-accent mb-2">100+</p>
              <p className="text-muted-foreground">Trained professionals</p>
            </div>
            
            <div className="text-center p-8 bg-muted rounded-xl fade-in-up" data-testid="capability-facility">
              <Factory className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Facility Size</h3>
              <p className="text-3xl font-bold text-accent mb-2">50,000</p>
              <p className="text-muted-foreground">Sq ft manufacturing area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
