import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/layout/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Main Sections */}
      <HeroSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
