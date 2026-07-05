"use client"

import { MdGridView } from "react-icons/md";
import { useCalculatorStore } from "@/store/useCalculatorStore";
import CalculatorCard from "@/components/ui/cards/CalculatorCard";

export default function CalculatorsGrid() {
  const calculators = useCalculatorStore((state) => state.calculators);

  return (
    <section>
      <div className="flex items-center gap-2 mb-8">
        <MdGridView className="text-primary text-2xl shrink-0" />
        <h2 className="font-headline-lg text-headline-lg text-on-background">All Calculators</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-gutter-desktop">
        {calculators.map((calc) => (
          <CalculatorCard key={calc.id} calculator={calc} />
        ))}
      </div>
    </section>
  );
}
