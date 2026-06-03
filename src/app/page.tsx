import HeroSection from '@/components/ui/landing/HeroSection';
import TrendingSection from '@/components/ui/landing/TrendingSection';
import CalculatorsGrid from '@/components/ui/landing/CalculatorsGrid';
import AdPlaceholder from '@/components/ui/ads/AdPlaceholder';

export default function Home() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <HeroSection />
      
      {/* Top AdSense Placeholder */}

      <div className="flex flex-col lg:flex-row gap-gutter-desktop">
        <div className="flex-1">
          <TrendingSection />                
          <CalculatorsGrid />
        </div>

        {/* Sidebar (Desktop) */}
        <aside className="hidden lg:block w-[300px] shrink-0">
          <div className="sticky top-24">
          </div>
        </aside>
      </div>
    </main>
  );
}
