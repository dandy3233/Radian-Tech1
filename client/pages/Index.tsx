import { HeroSection } from '@/components/sections/HeroSection';
import CompanyOverviewSection from '@/components/sections/CompanyOverviewSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/layout/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Main Sections */}
      <HeroSection />
      <CompanyOverviewSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
