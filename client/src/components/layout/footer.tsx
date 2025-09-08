import { Flame, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Flame className="text-accent-foreground text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Amar Splints</h3>
                  <p className="text-sm text-primary-foreground/80">Private Limited</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6">
                Leading manufacturer of premium safety matches and wooden match splints in India.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <button 
                    onClick={() => scrollToSection('products')} 
                    className="hover:text-accent transition-colors text-left"
                    data-testid="footer-safety-matches"
                  >
                    Safety Matches
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('products')} 
                    className="hover:text-accent transition-colors text-left"
                    data-testid="footer-wooden-splints"
                  >
                    Wooden Match Splints
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="hover:text-accent transition-colors text-left"
                    data-testid="footer-bulk-orders"
                  >
                    Bulk Orders
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="hover:text-accent transition-colors text-left"
                    data-testid="footer-custom-solutions"
                  >
                    Custom Solutions
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="hover:text-accent transition-colors text-left"
                    data-testid="footer-about"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('manufacturing')} 
                    className="hover:text-accent transition-colors text-left"
                    data-testid="footer-manufacturing"
                  >
                    Manufacturing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('manufacturing')} 
                    className="hover:text-accent transition-colors text-left"
                    data-testid="footer-quality"
                  >
                    Quality Standards
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="hover:text-accent transition-colors text-left"
                    data-testid="footer-contact"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3" />
                  <a href="tel:+919012889090" className="hover:text-accent transition-colors" data-testid="footer-phone">
                    +91 9012889090
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" />
                  <a href="mailto:admin@amarsplints.com" className="hover:text-accent transition-colors" data-testid="footer-email">
                    admin@amarsplints.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span data-testid="footer-address">Shamli, UP 247776</span>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="border-primary-foreground/20 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm" data-testid="footer-copyright">
              © 2024 Amar Splints Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-primary-foreground/80 hover:text-accent transition-colors text-sm" data-testid="footer-privacy">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/80 hover:text-accent transition-colors text-sm" data-testid="footer-terms">
                Terms of Service
              </button>
              <button className="text-primary-foreground/80 hover:text-accent transition-colors text-sm" data-testid="footer-sitemap">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
