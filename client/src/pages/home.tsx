import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProductsSection from "@/components/sections/products-section";
import ManufacturingSection from "@/components/sections/manufacturing-section";
import ProductionProcessSection from "@/components/sections/production-process-section";
import MissionVisionSection from "@/components/sections/mission-vision-section";
import QualitySection from "@/components/sections/quality-section";
import DirectorsSection from "@/components/sections/directors-section";
import ContactSection from "@/components/sections/contact-section";
import BackToTop from "@/components/ui/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ManufacturingSection />
        <ProductionProcessSection />
        <MissionVisionSection />
        <QualitySection />
        <DirectorsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
