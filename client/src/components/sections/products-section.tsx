import { Flame, TreePine, Shield, Microscope, Truck, Headphones, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import safetyMatchesImage from "@assets/image_1757346783410.png";

export default function ProductsSection() {
  const { ref } = useScrollAnimation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 fade-in-up" data-testid="products-title">
              Our Product Range
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up" data-testid="products-subtitle">
              Comprehensive range of safety matches and wooden match splints designed to meet diverse industrial requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Safety Matches */}
            <Card className="overflow-hidden hover-scale fade-in-up" data-testid="product-safety-matches">
              <img 
                src={safetyMatchesImage} 
                alt="Amar safety matches product boxes" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Flame className="w-8 h-8 text-accent mr-4" />
                  <h3 className="text-2xl font-bold text-primary">Safety Matches</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Premium quality safety matches manufactured using high-grade chemicals and wooden splints. 
                  Available in various box sizes and bulk packaging options.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Long burning time</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Moisture resistant</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Consistent ignition</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Safe strike surface</span>
                  </div>
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full"
                  data-testid="button-inquire-safety-matches"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Product Inquiry
                </Button>
              </CardContent>
            </Card>
            
            {/* Wooden Match Splints */}
            <Card className="overflow-hidden hover-scale fade-in-up" data-testid="product-wooden-splints">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Wooden match splints manufacturing" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <TreePine className="w-8 h-8 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold text-primary">Wooden Match Splints</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  High-quality wooden match splints made from sustainably sourced wood. 
                  Perfect for match manufacturing companies and industrial applications.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Premium wood quality</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Uniform dimensions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Low moisture content</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Bulk packaging available</span>
                  </div>
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full"
                  data-testid="button-inquire-wooden-splints"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Product Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Product Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-white rounded-lg shadow fade-in-up" data-testid="feature-safety">
              <Shield className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">Safety First</h4>
              <p className="text-sm text-muted-foreground">All products meet strict safety standards</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow fade-in-up" data-testid="feature-quality">
              <Microscope className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">Quality Control</h4>
              <p className="text-sm text-muted-foreground">Rigorous testing at every stage</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow fade-in-up" data-testid="feature-delivery">
              <Truck className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">Fast Delivery</h4>
              <p className="text-sm text-muted-foreground">Nationwide shipping network</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow fade-in-up" data-testid="feature-support">
              <Headphones className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">Dedicated customer service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
