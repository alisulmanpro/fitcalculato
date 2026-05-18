import { MdDirectionsRun } from "react-icons/md";

interface ResultsDisplayProps {
  minZ2: number;
  maxZ2: number;
  restingHR: number;
  maxHR: number;
  calculationMethod?: 'traditional' | 'tanaka' | 'karvonen' | 'lthr';
}

export default function ResultsDisplay({
  minZ2,
  maxZ2,
  restingHR,
  maxHR,
  calculationMethod = 'karvonen',
}: ResultsDisplayProps) {
  // Dynamic calculation for progress gauge
  const range = maxHR - restingHR;
  let leftPercent = 50;
  let middlePercent = 25;
  let rightPercent = 25;

  if (range > 0 && minZ2 > restingHR && maxZ2 > minZ2) {
    leftPercent = Math.max(0, Math.min(100, ((minZ2 - restingHR) / range) * 100));
    middlePercent = Math.max(0, Math.min(100 - leftPercent, ((maxZ2 - minZ2) / range) * 100));
    rightPercent = Math.max(0, 100 - (leftPercent + middlePercent));
  }

  const methodLabel = {
    traditional: '220 - Age Formula',
    tanaka: 'Tanaka Formula',
    karvonen: 'Karvonen Method (HRR)',
    lthr: 'LTHR (Lactate Threshold)'
  }[calculationMethod];

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-container rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between border-b border-outline-variant pb-4 mb-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">Your Target Results</h2>
          <span className="font-label-sm text-[10px] text-white bg-primary-container px-2.5 py-1 rounded-full font-semibold capitalize">
            {methodLabel}
          </span>
        </div>
        {/* Primary Result Highlight */}
        <div className="flex flex-col items-center justify-center py-6 bg-surface-container-low rounded-xl border border-primary-fixed mb-6 transition-all duration-300">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2 font-bold">Optimal Zone 2 Range</span>
          <div className="flex items-baseline gap-2 text-primary">
            <span className="font-headline-xl text-[48px] font-bold leading-none tracking-tight animate-pulse">{minZ2}</span>
            <span className="font-headline-md text-headline-md font-medium text-on-surface-variant">-</span>
            <span className="font-headline-xl text-[48px] font-bold leading-none tracking-tight animate-pulse">{maxZ2}</span>
          </div>
          <span className="font-label-md text-label-md text-on-surface-variant mt-2">Beats Per Minute (BPM)</span>
        </div>
        {/* Mini Gauge Visual */}
        <div className="w-full flex flex-col gap-2 mb-6">
          <div className="flex justify-between font-label-sm text-label-sm text-outline px-1">
            <span>Rest ({restingHR || 'N/A'})</span>
            <span className="font-semibold text-secondary">Z2 ({minZ2}-{maxZ2})</span>
            <span>Max ({maxHR})</span>
          </div>
          <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden flex">
            <div 
              className="h-full bg-outline-variant opacity-30 transition-all duration-500 ease-out" 
              style={{ width: `${leftPercent}%` }}
            ></div>
            <div 
              className="h-full bg-secondary transition-all duration-500 ease-out" 
              style={{ width: `${middlePercent}%` }}
            ></div>
            <div 
              className="h-full bg-outline-variant opacity-30 transition-all duration-500 ease-out" 
              style={{ width: `${rightPercent}%` }}
            ></div>
          </div>
        </div>
        {/* Actionable Insight */}
        <div className="bg-surface rounded-lg p-4 border border-outline-variant flex gap-4 mt-auto">
          <div className="text-secondary mt-1 shrink-0">
            <MdDirectionsRun className="text-2xl" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-label-md font-semibold text-on-surface">The &quot;Talk Test&quot; Benchmark</span>
            <p className="font-body-md text-[14px] leading-snug text-on-surface-variant">At {minZ2}-{maxZ2} BPM, you should be able to hold a full conversation comfortably without gasping for breath. If you can&apos;t, you are likely slipping into Zone 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
}