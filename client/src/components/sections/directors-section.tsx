import { User, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import directorImage from "@assets/image_1757348545859.png";

export default function DirectorsSection() {
  const { ref } = useScrollAnimation();

  return (
    <section id="directors" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 fade-in-up" data-testid="directors-title">
              Board of Directors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up" data-testid="directors-subtitle">
              Meet the experienced leadership team behind Amar Splints Private Limited's success and commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Director placeholders - replace with actual director information */}
            <Card className="text-center hover-scale fade-in-up" data-testid="director-card-1">
              <CardContent className="p-8">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={directorImage} 
                    alt="Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Anuj Kumar</h3>
                <p className="text-accent font-semibold mb-4">Managing Director</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Anuj Kumar Garg is the Managing Director at Amar Splints Private Limited, where he has played a pivotal role in the company's growth since its incorporation in 2011. Under his leadership, Amar Splints has evolved from a modest manufacturing unit into one of India's largest, most prominent exporters of safety match splints.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-scale fade-in-up" data-testid="director-card-3">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Director Name</h3>
                <p className="text-accent font-semibold mb-4">Technical Director</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Please provide director information including name, position, and brief background.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Leadership Values */}
          <div className="mt-16 bg-muted rounded-xl p-8 fade-in-up">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4" data-testid="leadership-values-title">
                Our Leadership Values
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="leadership-value-1">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Committed to maintaining the highest standards in every aspect of our business operations.
                </p>
              </div>
              <div className="text-center" data-testid="leadership-value-2">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Continuously improving our processes and products to serve our customers better.
                </p>
              </div>
              <div className="text-center" data-testid="leadership-value-3">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Integrity</h4>
                <p className="text-sm text-muted-foreground">
                  Building trust through transparent business practices and ethical leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}