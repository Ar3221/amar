import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Flame, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navigationItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Products", href: "products" },
    { label: "Manufacturing", href: "manufacturing" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <header className={`bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-2xl' : ''}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Flame className="text-primary-foreground text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Amar Splints</h1>
              <p className="text-sm text-muted-foreground">Private Limited</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors"
                data-testid={`nav-${item.href}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+919012889090" 
              className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
              data-testid="header-phone"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 9012889090</span>
            </a>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" data-testid="mobile-menu-trigger">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg text-foreground hover:text-primary transition-colors p-2"
                      data-testid={`mobile-nav-${item.href}`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-4 border-t">
                    <a 
                      href="tel:+919012889090" 
                      className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors p-2"
                      data-testid="mobile-phone"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">+91 9012889090</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
