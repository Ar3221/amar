

import { Award, Leaf } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import manufacturingImage from "@assets/manufacturing-splints-production.png";

export default function AboutSection() {
  const { ref } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 fade-in-up" data-testid="about-title">
              About Amar Splints Private Limited
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up" data-testid="about-subtitle">
              Founded in 1992 and officially incorporated in 2011, Amar Splints Private Limited is a leading manufacturer 
              of safety matches and match splints, serving both domestic and international markets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <img 
                src={manufacturingImage}
                alt="Amar Splints manufacturing facility - wooden splints production line" 
                className="rounded-xl shadow-2xl w-full h-auto hover-scale"
                data-testid="about-image"
              />
            </div>
            
            <div className="fade-in-up">
              <h3 className="text-3xl font-bold text-primary mb-6" data-testid="about-story-title">Our Story</h3>
              <p className="text-lg text-muted-foreground mb-6" data-testid="about-description-1">
                Over the past three decades, Amar Splints has perfected the art of manufacturing match splints and matchboxes 
                that meet the highest standards, earning the trust of industry leaders like ITC Limited and serving renowned brands 
                such as Homelight, Aim, Ship, Tekka, and Mangaldeep Dhoop across North India.
              </p>
              <p className="text-lg text-muted-foreground mb-8" data-testid="about-description-2">
                Our mission focuses on strategic direct wood sourcing, uplifting rural communities, strengthening agriculturists, 
                and enhancing India's export sector. We are committed to promoting economic self-reliance through local employment 
                and sustainable manufacturing practices.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-muted rounded-lg" data-testid="about-certification">
                  <Award className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">30+ Years</h4>
                  <p className="text-sm text-muted-foreground">Manufacturing Excellence</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-lg" data-testid="about-eco-friendly">
                  <Leaf className="w-8 h-8 text-green-600 mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">Global Export</h4>
                  <p className="text-sm text-muted-foreground">Africa, Middle East, Latin America</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
