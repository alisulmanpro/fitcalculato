import { MdGridView, MdMonitorHeart, MdDirectionsRun } from "react-icons/md";
import { FaScaleBalanced } from "react-icons/fa6";

export interface Calculator {
  icon: string;
  title: string;
  desc: string;
  path: string;
}

export const calculators: Calculator[] = [
  { 
    icon: 'zone', 
    title: 'Zone 2 Heart Rate Calculator', 
    desc: 'Find your precise aerobic training zone for maximum endurance benefits.', 
    path: "/zone-two-heart-rate-calculator" 
  },
  {
    icon: 'vo2max',
    title: 'VO2 Max & Fitness Age',
    desc: 'Calculate your VO2 max and discover your true biological fitness age.',
    path: '/vo2-max-calculator'
  }
];

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  zone: MdMonitorHeart,
  vo2max: MdDirectionsRun,
};
