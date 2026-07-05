"use client"
import { MdTrendingUp } from "react-icons/md";
import { useCalculatorStore } from "@/store/useCalculatorStore";
import CalculatorCard from "@/components/ui/cards/CalculatorCard";

export default function TrendingSection() {
  const allCalculators = useCalculatorStore((state) => state.calculators);
  const trendingCalculators = allCalculators.filter(calc => calc.isTrending);

  if (!trendingCalculators || trendingCalculators.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-8">
        <MdTrendingUp className="text-secondary text-2xl shrink-0" />
        <h2 className="font-headline-lg text-headline-lg text-on-background">Trending Tools</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
        {trendingCalculators.map((calc) => (
          <CalculatorCard key={calc.id} calculator={calc} isTrendingCard={true} />
        ))}
      </div>
    </section>
  );
}
