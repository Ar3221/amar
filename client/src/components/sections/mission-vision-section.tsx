import { Target, Eye, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function MissionVisionSection() {
  const { ref } = useScrollAnimation();

  return (
    <section id="mission-vision" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 fade-in-up" data-testid="mission-vision-title">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up" data-testid="mission-vision-subtitle">
              Driving India's manufacturing excellence through strategic partnerships, sustainable practices, and global outreach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <Card className="hover-scale fade-in-up" data-testid="mission-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To strategically source wood directly, uplifting rural communities and strengthening agriculturists 
                  while enhancing India's export sector. We are committed to promoting economic self-reliance through 
                  local employment and sustainable manufacturing practices.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Empowering rural communities</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Enhancing India's export sector</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Strategic direct wood sourcing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="hover-scale fade-in-up" data-testid="vision-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To achieve direct procurement, premium quality manufacturing, and global excellence in customer service. 
                  We aim to innovate technical expertise to redefine India's product imports and global presence, 
                  leading manufacturing excellence worldwide.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 text-accent mr-3" />
                    <span className="text-sm">Global excellence in customer service</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-accent mr-3" />
                    <span className="text-sm">Premium quality manufacturing</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-accent mr-3" />
                    <span className="text-sm">Redefining India's global presence</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="bg-white rounded-xl p-8 fade-in-up">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4" data-testid="values-title">
                Our Core Values
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="value-quality">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Quality Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Manufacturing quality products at affordable prices with rigorous quality control and timely delivery.
                </p>
              </div>
              <div className="text-center" data-testid="value-innovation">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Continuously improving our processes and products through advanced technology and technical expertise.
                </p>
              </div>
              <div className="text-center" data-testid="value-sustainability">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Sustainability</h4>
                <p className="text-sm text-muted-foreground">
                  Supporting rural communities and agriculturists through sustainable manufacturing and local employment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


