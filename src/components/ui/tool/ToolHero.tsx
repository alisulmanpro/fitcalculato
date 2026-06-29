import Image from "next/image";
export default function ToolHero() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-on-surface-variant">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Cardio Calculators</span>
      </div>
      <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background">Zone 2 Heart Rate Calculator: How to Calculate Your Fat-Burning Zone and Actually Use It </h1>
      <Image 
      src="/Gym.jpg" 
      alt="Zone 2 Heart Rate Calculator Usage in Gym" 
      width={1200}
      height={600}/>
    <p className="font-body-lg text-body-lg text-on-surface-variant">
      Zone 2 training (typically 55-75% of your maximum heart rate) is the foundation of endurance fitness. It builds mitochondrial density, improves fat oxidation, and enhances aerobic capacity without overtaxing your recovery system. Discover your personalized Zone 2 training parameters below.
    </p>
    </section>
  );
}
