'use client';

import { useState, useRef } from 'react';
import { LuArrowDown, LuExternalLink, LuCopy, LuCheck } from 'react-icons/lu';

type Gender = 'male' | 'female';
type Mode = 'known' | 'estimate';

interface PercentileData {
  ageMax: number;
  decadeLabel: string;
  p10: number;
  p25: number;
  p50: number;
  p75: number;
  p90: number;
}

// FRIEND Registry (Kaminsky LA et al. 2015, Mayo Clin Proc)
const VO2_FRIEND: Record<Gender, PercentileData[]> = {
  male: [
    { ageMax: 29, decadeLabel: '20 to 29', p10: 32.1, p25: 40.1, p50: 48.0, p75: 55.2, p90: 61.8 },
    { ageMax: 39, decadeLabel: '30 to 39', p10: 30.2, p25: 35.9, p50: 42.4, p75: 49.2, p90: 56.5 },
    { ageMax: 49, decadeLabel: '40 to 49', p10: 26.8, p25: 31.9, p50: 37.8, p75: 45.0, p90: 52.1 },
    { ageMax: 59, decadeLabel: '50 to 59', p10: 22.8, p25: 27.1, p50: 32.6, p75: 39.7, p90: 45.6 },
    { ageMax: 69, decadeLabel: '60 to 69', p10: 19.8, p25: 23.7, p50: 28.2, p75: 34.5, p90: 40.3 },
    { ageMax: 200, decadeLabel: '70 and over', p10: 17.1, p25: 20.4, p50: 24.4, p75: 30.4, p90: 36.6 },
  ],
  female: [
    { ageMax: 29, decadeLabel: '20 to 29', p10: 23.9, p25: 30.5, p50: 37.6, p75: 44.7, p90: 51.3 },
    { ageMax: 39, decadeLabel: '30 to 39', p10: 20.9, p25: 25.3, p50: 30.2, p75: 36.1, p90: 41.4 },
    { ageMax: 49, decadeLabel: '40 to 49', p10: 18.8, p25: 22.1, p50: 26.7, p75: 32.4, p90: 38.4 },
    { ageMax: 59, decadeLabel: '50 to 59', p10: 17.3, p25: 19.9, p50: 23.4, p75: 27.6, p90: 32.0 },
    { ageMax: 69, decadeLabel: '60 to 69', p10: 14.6, p25: 17.2, p50: 20.0, p75: 23.8, p90: 27.0 },
    { ageMax: 200, decadeLabel: '70 and over', p10: 13.6, p25: 15.6, p50: 18.3, p75: 20.8, p90: 23.1 },
  ],
};

interface BandConfig {
  min: number;
  label: string;
  dotColor: string;
  textColor: string;
  pinColor: string;
}

const PERCENTILE_BANDS: BandConfig[] = [
  { min: 90, label: 'EXCELLENT', dotColor: 'bg-emerald-600', textColor: 'text-emerald-700 font-bold', pinColor: '#059669' },
  { min: 70, label: 'GOOD', dotColor: 'bg-emerald-500', textColor: 'text-emerald-600 font-bold', pinColor: '#10b981' },
  { min: 50, label: 'ABOVE AVERAGE', dotColor: 'bg-sky-500', textColor: 'text-sky-600 font-bold', pinColor: '#0284c7' },
  { min: 30, label: 'AVERAGE', dotColor: 'bg-slate-500', textColor: 'text-slate-700 font-bold', pinColor: '#64748b' },
  { min: 10, label: 'BELOW AVERAGE', dotColor: 'bg-amber-500', textColor: 'text-amber-600 font-bold', pinColor: '#d97706' },
  { min: 0, label: 'WELL BELOW AVERAGE', dotColor: 'bg-rose-600', textColor: 'text-rose-600 font-bold', pinColor: '#e11d48' },
];

function getOrdinal(n: number) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

interface Vo2ClassificationResult {
  value: number;
  headline: string;
  band: BandConfig;
  scalePercent: number;
  referenceNorm: PercentileData;
}

function calculateClassification(gender: Gender, age: number, vo2: number): Vo2ClassificationResult {
  const brackets = VO2_FRIEND[gender];
  const norm = brackets.find((b) => age <= b.ageMax) ?? brackets[brackets.length - 1];

  let percentileNumber: number;
  let percentilePositionText: string;

  if (vo2 <= norm.p10) {
    percentileNumber = 5;
    percentilePositionText = 'below the 10th';
  } else if (vo2 >= norm.p90) {
    percentileNumber = 95;
    percentilePositionText = 'above the 90th';
  } else {
    const points: [number, number][] = [
      [10, norm.p10],
      [25, norm.p25],
      [50, norm.p50],
      [75, norm.p75],
      [90, norm.p90],
    ];

    percentileNumber = 50;
    for (let i = 0; i < points.length - 1; i++) {
      const [pLow, valLow] = points[i];
      const [pHigh, valHigh] = points[i + 1];
      if (vo2 >= valLow && vo2 <= valHigh) {
        percentileNumber = Math.round(pLow + ((pHigh - pLow) * (vo2 - valLow)) / (valHigh - valLow));
        break;
      }
    }
    percentilePositionText = `around the ${getOrdinal(percentileNumber)}`;
  }

  const band = PERCENTILE_BANDS.find((b) => percentileNumber >= b.min) ?? PERCENTILE_BANDS[PERCENTILE_BANDS.length - 1];

  // Scale bar calculation (0% represents 10th percentile, 100% represents 90th percentile)
  let scalePercent = ((vo2 - norm.p10) / (norm.p90 - norm.p10)) * 100;
  scalePercent = Math.min(100, Math.max(0, scalePercent));

  const roundedVo2Display = Math.round(vo2);
  const sexLabel = gender === 'male' ? 'men' : 'women';
  const headline = `A VO2 max of ${roundedVo2Display} ml/kg/min sits ${percentilePositionText} percentile for ${sexLabel} aged ${norm.decadeLabel}, which is "${band.label.charAt(0) + band.label.slice(1).toLowerCase()}".`;

  return {
    value: Math.round(vo2 * 10) / 10,
    headline,
    band,
    scalePercent,
    referenceNorm: norm,
  };
}

export default function Vo2MaxCalculatorForm() {
  const [gender, setGender] = useState<Gender>('male');
  const [age, setAge] = useState<number | ''>('');
  const [mode, setMode] = useState<Mode>('known');
  const [vo2Input, setVo2Input] = useState<number | ''>('');
  const [restingHr, setRestingHr] = useState<number | ''>('');

  const [error, setError] = useState<string>('');
  const [result, setResult] = useState<Vo2ClassificationResult | null>(null);
  const [copied, setCopied] = useState(false);

  const resultRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const parsedAge = Number(age);
    if (!parsedAge || parsedAge < 13 || parsedAge > 100) {
      setError('Please enter a valid age between 13 and 100.');
      return;
    }

    let calculatedVo2: number;

    if (mode === 'known') {
      const parsedVo2 = Number(vo2Input);
      if (!parsedVo2 || parsedVo2 < 10 || parsedVo2 > 90) {
        setError('Please enter a VO2 max value between 10 and 90 ml/kg/min.');
        return;
      }
      calculatedVo2 = parsedVo2;
    } else {
      const parsedHr = Number(restingHr);
      if (!parsedHr || parsedHr < 30 || parsedHr > 120) {
        setError('Please enter a resting heart rate between 30 and 120 bpm.');
        return;
      }
      // Uth et al. (2004) formula: VO2max = 15.3 * (HRmax / HRrest), where HRmax = 208 - 0.7 * age (Tanaka)
      const hrMax = 208 - 0.7 * parsedAge;
      calculatedVo2 = 15.3 * (hrMax / parsedHr);
    }

    const calculatedResult = calculateClassification(gender, parsedAge, calculatedVo2);
    setResult(calculatedResult);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const handleCopy = () => {
    if (!result) return;
    const text = `VO2 Max: ${result.value} ml/kg/min\nClassification: ${result.band.label}\n${result.headline}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToNextSection = () => {
    window.scrollBy({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl">
      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 border border-base-300 shadow-md p-6 sm:p-8 space-y-6"
      >
        {/* Sex */}
        <div className="space-y-2">
          <label className="block text-sm font-bold tracking-wide text-base-content">Sex</label>
          <div
            role="radiogroup"
            aria-label="Sex"
            className="flex gap-2 rounded-xl border border-base-300 bg-base-200 p-1.5"
          >
            <button
              type="button"
              role="radio"
              aria-checked={gender === 'male'}
              onClick={() => setGender('male')}
              className={`h-11 flex-1 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                gender === 'male'
                  ? 'bg-primary text-primary-content shadow-sm'
                  : 'text-base-content/70 hover:text-base-content hover:bg-base-300/50'
              }`}
            >
              Male
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={gender === 'female'}
              onClick={() => setGender('female')}
              className={`h-11 flex-1 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                gender === 'female'
                  ? 'bg-primary text-primary-content shadow-sm'
                  : 'text-base-content/70 hover:text-base-content hover:bg-base-300/50'
              }`}
            >
              Female
            </button>
          </div>
          <p className="text-xs text-base-content/60">Reference norms differ for men and women.</p>
        </div>

        {/* Age */}
        <div className="space-y-2">
          <label htmlFor="vo2-age" className="block text-sm font-bold tracking-wide text-base-content">
            Age
          </label>
          <input
            id="vo2-age"
            type="number"
            inputMode="decimal"
            placeholder="e.g. 42"
            min="13"
            max="100"
            value={age}
            onChange={(e) => setAge(e.target.value ? Number(e.target.value) : '')}
            className="input input-bordered w-full h-12 text-base bg-base-100 border-base-300 text-base-content placeholder:text-base-content/40 focus:outline-primary focus:border-primary rounded-xl"
          />
        </div>

        {/* Mode Selector */}
        <div className="space-y-2">
          <label className="block text-sm font-bold tracking-wide text-base-content">
            How do you want to start?
          </label>
          <div
            role="radiogroup"
            aria-label="How do you want to start?"
            className="flex gap-2 rounded-xl border border-base-300 bg-base-200 p-1.5"
          >
            <button
              type="button"
              role="radio"
              aria-checked={mode === 'known'}
              onClick={() => setMode('known')}
              className={`h-11 flex-1 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                mode === 'known'
                  ? 'bg-primary text-primary-content shadow-sm'
                  : 'text-base-content/70 hover:text-base-content hover:bg-base-300/50'
              }`}
            >
              I know my VO2 max
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={mode === 'estimate'}
              onClick={() => setMode('estimate')}
              className={`h-11 flex-1 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                mode === 'estimate'
                  ? 'bg-primary text-primary-content shadow-sm'
                  : 'text-base-content/70 hover:text-base-content hover:bg-base-300/50'
              }`}
            >
              Estimate it for me
            </button>
          </div>
        </div>

        {/* Dynamic Inputs based on mode */}
        {mode === 'known' ? (
          <div className="space-y-2">
            <label htmlFor="vo2-value" className="block text-sm font-bold tracking-wide text-base-content">
              VO2 max (ml/kg/min)
            </label>
            <input
              id="vo2-value"
              type="number"
              step="0.1"
              inputMode="decimal"
              placeholder="e.g. 45"
              min="10"
              max="90"
              value={vo2Input}
              onChange={(e) => setVo2Input(e.target.value ? Number(e.target.value) : '')}
              className="input input-bordered w-full h-12 text-base bg-base-100 border-base-300 text-base-content placeholder:text-base-content/40 focus:outline-primary focus:border-primary rounded-xl"
            />
            <p className="text-xs text-base-content/60">
              From a lab test, treadmill test, or a Garmin / Apple Watch / Whoop reading.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <label htmlFor="vo2-rhr" className="block text-sm font-bold tracking-wide text-base-content">
              Resting heart rate (bpm)
            </label>
            <input
              id="vo2-rhr"
              type="number"
              inputMode="decimal"
              placeholder="e.g. 58"
              min="30"
              max="120"
              value={restingHr}
              onChange={(e) => setRestingHr(e.target.value ? Number(e.target.value) : '')}
              className="input input-bordered w-full h-12 text-base bg-base-100 border-base-300 text-base-content placeholder:text-base-content/40 focus:outline-primary focus:border-primary rounded-xl"
            />
            <p className="text-xs text-base-content/60">
              Measured first thing in the morning, before getting out of bed. Calculated using the validated Uth et al. formula.
            </p>
          </div>
        )}

        {/* Error message */}
        {error && (
          <p className="text-sm font-medium text-error bg-error/10 border border-error/30 rounded-xl p-3">
            {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary btn-lg w-full text-primary-content font-bold text-base md:text-lg shadow-md hover:shadow-primary/30 transition-all cursor-pointer flex items-center justify-center relative group"
        >
          <span>See where I stand</span>
          <span className="absolute right-4 text-xs tracking-widest text-primary-content/80 uppercase font-mono hidden sm:inline-flex items-center gap-1">
            SCROLL <LuArrowDown className="text-xs group-hover:translate-y-0.5 transition-transform" />
          </span>
        </button>
      </form>

      {/* Results Card */}
      {result && (
        <div
          ref={resultRef}
          className="card bg-base-100 border border-base-300 shadow-md p-6 sm:p-8 space-y-6 animate-fadeIn"
          aria-live="polite"
        >
          {/* Status badge */}
          <div className="flex items-center gap-2.5">
            <span
              className={`inline-block h-3 w-3 rounded-full ${result.band.dotColor}`}
              aria-hidden="true"
            />
            <span
              className={`text-xs sm:text-sm font-bold tracking-wider uppercase ${result.band.textColor}`}
            >
              {result.band.label}
            </span>
          </div>

          {/* Large VO2 Max value */}
          <div className="flex items-baseline gap-2">
            <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-base-content font-mono">
              {result.value.toFixed(1)}
            </span>
            <span className="text-base-content/60 text-sm sm:text-base font-semibold">ml/kg/min</span>
          </div>

          {/* Headline interpretation */}
          <p className="text-base sm:text-lg text-base-content leading-relaxed font-normal">
            {result.headline}
          </p>

          {/* Percentile Scale Bar */}
          <div className="pt-2">
            <div className="relative h-2.5 w-full rounded-full bg-base-300">
              {/* Dot Marker */}
              <div
                className="absolute -top-1.5 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-base-100 shadow-md transition-all duration-500"
                style={{
                  left: `${result.scalePercent}%`,
                  backgroundColor: result.band.pinColor,
                }}
                aria-hidden="true"
              />
            </div>
            <div className="mt-2.5 flex justify-between text-xs text-base-content/70 font-semibold">
              <span>10th percentile</span>
              <span>90th percentile</span>
            </div>
          </div>

          {/* Caveat */}
          <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed">
            This is an estimate. In studio, cardiorespiratory fitness can be measured directly or via step tests without running to failure.
          </p>

          {/* Reference citation */}
          <div className="pt-4 border-t border-base-300">
            <p className="text-xs font-bold tracking-wider text-base-content/70 uppercase mb-2">
              REFERENCES
            </p>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4919021/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:underline font-semibold transition-colors"
            >
              Kaminsky LA et al. 2015, Mayo Clin Proc (FRIEND registry)
              <LuExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Context footnote */}
          <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed">
            VO2 max covers the cardiorespiratory pillar. Comprehensive healthspan programs evaluate the other three key physical pillars as well: body composition, stability and strength.
          </p>

          {/* Action Button & Tools */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={scrollToNextSection}
              className="btn btn-outline border-base-300 hover:border-primary hover:bg-primary/10 hover:text-primary flex-1 h-12 text-sm font-bold transition-all flex items-center justify-center cursor-pointer relative group rounded-xl"
            >
              <span>Score all four pillars, free</span>
              <span className="absolute right-4 text-xs tracking-widest text-base-content/60 group-hover:text-primary uppercase font-mono hidden sm:inline-flex items-center gap-1">
                SCROLL <LuArrowDown className="text-xs group-hover:translate-y-0.5 transition-transform" />
              </span>
            </button>

            <button
              onClick={handleCopy}
              className="btn btn-outline border-base-300 hover:border-base-content/30 h-12 px-5 text-sm font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer rounded-xl"
            >
              {copied ? <LuCheck className="w-4 h-4 text-success" /> : <LuCopy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

