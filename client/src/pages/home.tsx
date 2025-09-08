import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProductsSection from "@/components/sections/products-section";
import ManufacturingSection from "@/components/sections/manufacturing-section";
import QualitySection from "@/components/sections/quality-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ManufacturingSection />
        <QualitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
