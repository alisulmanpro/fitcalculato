"use client"
import { useRouter } from "next/navigation";
import { MdTrendingUp, MdMonitorHeart } from "react-icons/md";

export default function TrendingSection() {

  const router = useRouter();

  return (
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-8">
        <MdTrendingUp className="text-secondary text-2xl shrink-0" />
        <h2 className="font-headline-lg text-headline-lg text-on-background">Trending Tools</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
        {/* Card 1 */}
        <article className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 relative group cursor-pointer flex flex-col h-full">
          <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full font-label-sm text-label-sm">Popular</div>
          <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
            <MdMonitorHeart className="text-2xl" />
          </div>
          <h3 className="font-headline-md text-headline-md text-on-background mb-3 flex-1">Zone 2 Heart Rate Calculator</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">Find your precise aerobic training zone for maximum endurance benefits.</p>
          <button className="w-full py-2.5 bg-surface-container border border-outline-variant rounded-lg font-label-md text-label-md text-primary group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-colors" onClick={() => router.push("zone-two-heart-rate-calculator")}>
            Use Calculator
          </button>
        </article>
      </div>
    </section>
  );
}
