import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function HeroSection() {
  const { ref } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient text-primary-foreground pt-24 pb-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 parallax" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")',
          opacity: 0.3
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 fade-in-up" data-testid="hero-title">
            Premium Safety Matches &<br />Wooden Match Splints
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 fade-in-up" data-testid="hero-description">
            Leading manufacturer of high-quality safety matches and wooden match splints in India. 
            Trusted by industries nationwide for superior quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
            <Button 
              size="lg"
              onClick={() => scrollToSection('products')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg hover-scale"
              data-testid="button-view-products"
            >
              📦 View Our Products
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-blue-500 hover:bg-white hover:text-primary px-8 py-4 text-lg"
              data-testid="button-get-quote"
            >
              📄 Get Quote
            </Button>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
          <div className="text-center fade-in-up" data-testid="stat-experience">
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-primary-foreground/80">Years Experience</div>
          </div>
          <div className="text-center fade-in-up" data-testid="stat-clients">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-primary-foreground/80">Happy Clients</div>
          </div>
          <div className="text-center fade-in-up" data-testid="stat-production">
            <div className="text-3xl font-bold mb-2">1M+</div>
            <div className="text-primary-foreground/80">Matches Daily</div>
          </div>
          <div className="text-center fade-in-up" data-testid="stat-quality">
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-primary-foreground/80">Quality Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
