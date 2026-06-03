import { MdGridView, MdMonitorHeart } from "react-icons/md";
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
];

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  zone: MdMonitorHeart,
};
