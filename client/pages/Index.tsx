import { HeroSection } from '@/components/sections/HeroSection';
import CompanyOverviewSection from '@/components/sections/CompanyOverviewSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyOverviewSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
}