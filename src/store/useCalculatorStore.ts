import { create } from 'zustand';
import { ReactNode } from 'react';

export interface Calculator {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  icon: string;
  isTrending: boolean;
  isFeatured: boolean;
  cta: string;
}

interface CalculatorState {
  calculators: Calculator[];
  getTrendingCalculators: () => Calculator[];
  getCalculatorsByCategory: (category: string) => Calculator[];
}

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
  calculators: [
    {
      id: 'zone-2-heart-rate',
      title: 'Zone 2 Heart Rate Calculator',
      description: 'Find your precise aerobic training zone for maximum endurance benefits.',
      slug: 'zone-2-heart-rate-calculator',
      category: 'heart-rate',
      icon: 'zone',
      isTrending: true,
      isFeatured: true,
      cta: 'Find My Zone 2 Range →'
    },
    {
      id: 'vo2-max',
      title: 'VO2 Max Calculator',
      description: 'Calculate your VO2 max and discover your true biological fitness age.',
      slug: 'vo2-max-calculator',
      category: 'performance',
      icon: 'vo2max',
      isTrending: true,
      isFeatured: true,
      cta: 'Calculate My VO2 Max →'
    }
  ],
  getTrendingCalculators: () => {
    return get().calculators.filter(calc => calc.isTrending);
  },
  getCalculatorsByCategory: (category: string) => {
    return get().calculators.filter(calc => calc.category === category);
  }
}));
