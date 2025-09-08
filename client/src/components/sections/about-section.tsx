import { Award, Leaf } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
              Established as a leading manufacturer of safety matches and wooden match splints, 
              we have been serving industries across India with unwavering commitment to quality and excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern manufacturing facility" 
                className="rounded-xl shadow-2xl w-full h-auto hover-scale"
                data-testid="about-image"
              />
            </div>
            
            <div className="fade-in-up">
              <h3 className="text-3xl font-bold text-primary mb-6" data-testid="about-story-title">Our Story</h3>
              <p className="text-lg text-muted-foreground mb-6" data-testid="about-description-1">
                Located in the heart of Uttar Pradesh's industrial belt, Amar Splints Private Limited has grown 
                from a small-scale operation to one of India's most trusted manufacturers of safety matches and wooden match splints.
              </p>
              <p className="text-lg text-muted-foreground mb-8" data-testid="about-description-2">
                Our state-of-the-art facility in Village Kandela combines traditional craftsmanship with modern 
                manufacturing techniques, ensuring every product meets the highest standards of quality and safety.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-muted rounded-lg" data-testid="about-certification">
                  <Award className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">ISO Certified</h4>
                  <p className="text-sm text-muted-foreground">Quality Management System</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-lg" data-testid="about-eco-friendly">
                  <Leaf className="w-8 h-8 text-green-600 mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">Eco-Friendly</h4>
                  <p className="text-sm text-muted-foreground">Sustainable Manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
