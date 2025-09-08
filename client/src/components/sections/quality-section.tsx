import { Award, Leaf, Shield, Download, Microscope, ClipboardCheck, Bus, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function QualitySection() {
  const { ref } = useScrollAnimation();

  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Quality Management System",
      color: "text-accent"
    },
    {
      icon: Leaf,
      title: "FSC Certified",
      description: "Sustainable Forestry",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Safety Standards",
      description: "IS 5323 Compliance",
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "Excellence Award",
      description: "Industry Recognition",
      color: "text-purple-600"
    }
  ];

  const qualityFeatures = [
    {
      icon: Microscope,
      text: "Advanced laboratory testing facilities"
    },
    {
      icon: ClipboardCheck,
      text: "Batch-wise quality documentation"
    },
    {
      icon: Bus,
      text: "Certified quality control professionals"
    },
    {
      icon: TrendingUp,
      text: "Continuous process improvement"
    }
  ];

  return (
    <section className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 fade-in-up" data-testid="quality-title">
              Quality Standards & Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up" data-testid="quality-subtitle">
              Our commitment to excellence is backed by international certifications and rigorous quality control processes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6 fade-in-up">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg text-center hover-scale"
                  data-testid={`certification-${index}`}
                >
                  <cert.icon className={`w-12 h-12 ${cert.color} mb-4 mx-auto`} />
                  <h3 className="font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
            
            <div className="fade-in-up">
              <h3 className="text-3xl font-bold text-primary mb-6" data-testid="quality-commitment-title">
                Uncompromising Quality
              </h3>
              <p className="text-lg text-muted-foreground mb-6" data-testid="quality-description">
                Every product undergoes comprehensive quality testing to ensure it meets our exacting standards. 
                Our quality control laboratory is equipped with the latest testing equipment and staffed by experienced professionals.
              </p>
              
              <div className="space-y-4 mb-8">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center" data-testid={`quality-feature-${index}`}>
                    <feature.icon className="w-5 h-5 text-primary mr-3" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
