import { useRouter } from "next/navigation";
import { MdMonitorHeart, MdDirectionsRun } from "react-icons/md";
import { FaScaleBalanced } from "react-icons/fa6";
import { Calculator } from "@/store/useCalculatorStore";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  zone: MdMonitorHeart,
  vo2max: MdDirectionsRun,
};

interface CalculatorCardProps {
  calculator: Calculator;
  isTrendingCard?: boolean;
}

export default function CalculatorCard({ calculator, isTrendingCard = false }: CalculatorCardProps) {
  const router = useRouter();
  const IconComponent = iconMap[calculator.icon] || FaScaleBalanced;

  if (isTrendingCard) {
    return (
      <article 
        className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 relative group cursor-pointer flex flex-col h-full"
        onClick={() => router.push(`/calculators/${calculator.slug}`)}
      >
        <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full font-label-sm text-label-sm">
          Trending
        </div>
        <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
          <IconComponent className="text-2xl" />
        </div>
        <h3 className="font-headline-md text-headline-md text-on-background mb-3 flex-1">{calculator.title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">{calculator.description}</p>
        <button className="w-full py-2.5 bg-surface-container border border-outline-variant rounded-lg font-label-md text-label-md text-primary group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-colors">
          {calculator.cta}
        </button>
      </article>
    );
  }

  return (
    <article 
      className="bg-surface-container-lowest border border-outline-variant rounded-lg p-5 hover:border-primary/30 transition-colors flex flex-col cursor-pointer" 
      onClick={() => router.push(`/calculators/${calculator.slug}`)}
    >
      <div className="flex items-start gap-4 mb-3">
        <div className="w-10 h-10 bg-surface-container-low rounded flex items-center justify-center text-on-surface-variant shrink-0">
          <IconComponent className="text-[20px]" />
        </div>
        <h3 className="font-headline-md text-headline-md text-on-background text-[18px] leading-gutter-desktop">{calculator.title}</h3>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant text-[14px] leading-margin-mobile">{calculator.description}</p>
      <button className="mt-auto pt-4 w-full py-2.5 bg-surface-container border border-outline-variant rounded-lg font-label-md text-label-md text-primary hover:bg-primary hover:text-on-primary hover:border-primary transition-colors">
        {calculator.cta}
      </button>
    </article>
  );
}
