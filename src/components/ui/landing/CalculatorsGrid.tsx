'use client';

import { MdGridView, MdMonitorHeart } from "react-icons/md";
import { FaScaleBalanced } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

interface CalculatorProps {
  icon: string;
  title: string;
  desc: string;
  path: string;
}

const calculators: CalculatorProps[] = [
  { icon: 'zone', title: 'Zone 2 Heart Rate Calculator', desc: 'Find your precise aerobic training zone for maximum endurance benefits.', path: "/zone-two-heart-rate-calculator" },

];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
zone: MdMonitorHeart,
};

export default function CalculatorsGrid() {
  const router = useRouter();
  return (
    <section>
      <div className="flex items-center gap-2 mb-8">
        <MdGridView className="text-primary text-2xl shrink-0" />
        <h2 className="font-headline-lg text-headline-lg text-on-background">All Calculators</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-gutter-desktop">
        {calculators.map((calc: CalculatorProps, i) => {
          const IconComponent = iconMap[calc.icon] || FaScaleBalanced;
          return (
            <article key={i} className="bg-surface-container-lowest border border-outline-variant rounded-lg p-5 hover:border-primary/30 transition-colors flex flex-col cursor-pointer" onClick={() => router.push(calc.path)}>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 bg-surface-container-low rounded flex items-center justify-center text-on-surface-variant shrink-0">
                  <IconComponent className="text-[20px]" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background text-[18px] leading-gutter-desktop">{calc.title}</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant text-[14px] leading-margin-mobile">{calc.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
