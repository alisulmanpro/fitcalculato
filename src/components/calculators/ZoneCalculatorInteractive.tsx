'use client';

import React, { useMemo, useState } from 'react';
import {
    MdMonitorHeart,
    MdTune,
    MdPsychology,
    MdDirectionsRun,
    MdInfoOutline,
    MdWbSunny,
    MdSpeed,
    MdTrendingUp,
} from 'react-icons/md';
import ToolHero from '../ui/tool/ToolHero';

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type Method = 'tanaka' | 'traditional' | 'karvonen' | 'lthr';
type Experience = 'beginner' | 'intermediate' | 'advanced';

interface ZoneMeta {
    key: 'z1' | 'z2' | 'z3' | 'z4' | 'z5';
    title: string;
    name: string;
    desc: string;
    low: number;      // fraction of basis (0-1, may exceed 1 for zone 5 in LTHR mode)
    high: number;      // fraction of basis
    openLow?: boolean;  // no real floor (e.g. "under X")
    openHigh?: boolean; // no real ceiling (e.g. "X+")
    color: string;
}

/* Standard %MaxHR / %HRR based 5-zone model (Traditional, Tanaka, Karvonen) */
const STANDARD_ZONES: ZoneMeta[] = [
    { key: 'z1', title: 'Zone 1', name: 'Recovery', desc: 'Very light effort — active recovery, warm-up and cool-down.', low: 0.50, high: 0.60, color: '#60a5fa' },
    { key: 'z2', title: 'Zone 2', name: 'Aerobic Base', desc: 'Comfortable, conversational pace — the foundation of endurance and fat metabolism.', low: 0.60, high: 0.70, color: '#34d399' },
    { key: 'z3', title: 'Zone 3', name: 'Tempo', desc: 'Moderately hard, sustainable only for limited periods.', low: 0.70, high: 0.80, color: '#fbbf24' },
    { key: 'z4', title: 'Zone 4', name: 'Threshold', desc: 'Hard effort at or near your lactate threshold.', low: 0.80, high: 0.90, color: '#fb923c' },
    { key: 'z5', title: 'Zone 5', name: 'VO₂ Max', desc: 'Maximal, short high-intensity efforts.', low: 0.90, high: 1.00, color: '#f87171' },
];

/* LTHR-based 5-zone model (approximates the widely used Friel / TrainingPeaks scheme) */
const LTHR_ZONES: ZoneMeta[] = [
    { key: 'z1', title: 'Zone 1', name: 'Active Recovery', desc: 'Easy recovery pace, well below threshold.', low: 0, high: 0.85, openLow: true, color: '#60a5fa' },
    { key: 'z2', title: 'Zone 2', name: 'Aerobic (Endurance)', desc: 'Long, steady aerobic endurance work.', low: 0.85, high: 0.89, color: '#34d399' },
    { key: 'z3', title: 'Zone 3', name: 'Tempo', desc: 'Sustained, moderately hard tempo effort.', low: 0.90, high: 0.94, color: '#fbbf24' },
    { key: 'z4', title: 'Zone 4', name: 'Threshold', desc: 'At or just below your lactate threshold.', low: 0.95, high: 0.99, color: '#fb923c' },
    { key: 'z5', title: 'Zone 5', name: 'Anaerobic', desc: 'Short, very high-intensity efforts above threshold.', low: 1.00, high: 1.03, openHigh: true, color: '#f87171' },
];

const EXPERIENCE_TIPS: Record<Experience, { label: string; tip: string; targetFactor: number }> = {
    beginner: { label: 'Beginner', tip: 'Stay toward the lower half of this range while your aerobic base builds.', targetFactor: 0.25 },
    intermediate: { label: 'Intermediate', tip: 'Aim for the middle of this range for most steady endurance sessions.', targetFactor: 0.50 },
    advanced: { label: 'Advanced', tip: 'You can comfortably hold the upper half of this range for longer aerobic sessions.', targetFactor: 0.75 },
};

const METHOD_LABELS: Record<Method, string> = {
    traditional: 'Traditional Formula',
    tanaka: 'Tanaka Formula',
    karvonen: 'Karvonen Method (HRR)',
    lthr: 'LTHR (Lactate Threshold)',
};

/* ------------------------------------------------------------------ */
/* Component                                                          */
/* ------------------------------------------------------------------ */

export default function ZoneCalculatorInteractive() {
    const [age, setAge] = useState<number | ''>('');
    const [restingHR, setRestingHR] = useState<number | ''>('');
    const [knownMaxHR, setKnownMaxHR] = useState<number | ''>('');
    const [lthr, setLthr] = useState<number | ''>('');
    const [adjustTemp, setAdjustTemp] = useState(false);
    const [experience, setExperience] = useState<Experience>('beginner');
    const [method, setMethod] = useState<Method>('karvonen');

    // Reference Max HR estimate — used for display and for traditional/tanaka/karvonen.
    const calculatedMaxHR = useMemo(() => {
        if (knownMaxHR !== '') return Number(knownMaxHR);
        const numericAge = Number(age) || 0;
        return method === 'traditional'
            ? 220 - numericAge
            : Math.round(208 - 0.7 * numericAge);
    }, [age, knownMaxHR, method]);

    const usingLTHR = method === 'lthr' && lthr !== '' && Number(lthr) > 0;
    const usingHRR =
        method === 'karvonen' &&
        restingHR !== '' &&
        Number(restingHR) > 30 &&
        Number(restingHR) < calculatedMaxHR;
    const karvonenNeedsRestingHR = method === 'karvonen' && !usingHRR;

    const zoneDefs = usingLTHR ? LTHR_ZONES : STANDARD_ZONES;
    const environmentOffset = adjustTemp ? 3 : 0;

    const computeZone = (def: ZoneMeta): [number, number] => {
        let low: number;
        let high: number;

        if (usingLTHR) {
            const base = Number(lthr);
            low = Math.round(base * def.low);
            high = Math.round(base * def.high);
        } else if (usingHRR) {
            const reserve = calculatedMaxHR - Number(restingHR);
            low = Math.round(reserve * def.low + Number(restingHR));
            high = Math.round(reserve * def.high + Number(restingHR));
        } else {
            low = Math.round(calculatedMaxHR * def.low);
            high = Math.round(calculatedMaxHR * def.high);
        }

        return [low + environmentOffset, high + environmentOffset];
    };

    const zones = useMemo(() => {
        const result: Record<string, [number, number]> = {};
        zoneDefs.forEach((def) => {
            result[def.key] = computeZone(def);
        });
        return result;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zoneDefs, calculatedMaxHR, restingHR, lthr, adjustTemp, usingLTHR, usingHRR]);

    const hasValidInput = age !== '' || knownMaxHR !== '' || usingLTHR;

    const z2Def = zoneDefs.find((z) => z.key === 'z2')!;
    const [minZ2, maxZ2] = zones.z2 || [0, 0];
    const recommendedTarget = Math.round(
        minZ2 + (maxZ2 - minZ2) * EXPERIENCE_TIPS[experience].targetFactor
    );

    return (
        <div className="flex flex-col gap-8 md:gap-12 w-full">
            {/* ---------------------------------------------------------- */}
            {/* Hero                                                       */}
            {/* ---------------------------------------------------------- */}
            <ToolHero />

            {/* ---------------------------------------------------------- */}
            {/* Calculator: Form + Results                                 */}
            {/* ---------------------------------------------------------- */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* ---------- Form ---------- */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-outline-variant pb-4">
                        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white shrink-0">
                            <MdTune className="text-xl" />
                        </div>
                        <h2 className="font-headline-md text-headline-md text-on-surface">Your Data</h2>
                    </div>

                    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                        {/* Age + Resting HR */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="age">
                                    Age
                                </label>
                                <input
                                    className="w-full bg-surface rounded-lg border border-outline-variant h-12 px-4 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary"
                                    id="age"
                                    type="number"
                                    min={1}
                                    max={120}
                                    placeholder="e.g. 32"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value === '' ? '' : Math.max(0, parseInt(e.target.value) || 0))}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="resting-hr">
                                    Resting HR
                                </label>
                                <div className="relative">
                                    <input
                                        className="w-full bg-surface rounded-lg border border-outline-variant h-12 pl-4 pr-12 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary"
                                        id="resting-hr"
                                        type="number"
                                        placeholder="60"
                                        value={restingHR}
                                        onChange={(e) => setRestingHR(e.target.value === '' ? '' : Math.max(0, parseInt(e.target.value) || 0))}
                                    />
                                    <span className="absolute right-4 top-3 text-outline font-label-sm text-label-sm">BPM</span>
                                </div>
                            </div>
                        </div>

                        {/* Known Max HR + Method */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="max-hr">
                                    Known Max HR <span className="text-outline font-normal text-xs">(opt)</span>
                                </label>
                                <div className="relative">
                                    <input
                                        className="w-full bg-surface rounded-lg border border-outline-variant h-12 pl-4 pr-12 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary"
                                        id="max-hr"
                                        type="number"
                                        placeholder={`Auto ${calculatedMaxHR || '—'}`}
                                        value={knownMaxHR}
                                        onChange={(e) => setKnownMaxHR(e.target.value === '' ? '' : Math.max(0, parseInt(e.target.value) || 0))}
                                    />
                                    <span className="absolute right-4 top-3 text-outline font-label-sm text-label-sm">BPM</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="method">
                                    Calculation Method
                                </label>
                                <select
                                    className="w-full bg-surface rounded-lg border border-outline-variant h-12 px-4 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary"
                                    id="method"
                                    value={method}
                                    onChange={(e) => setMethod(e.target.value as Method)}
                                >
                                    <option value="karvonen">Karvonen (HRR)</option>
                                    <option value="tanaka">Tanaka Formula</option>
                                    <option value="traditional">Traditional Formula</option>
                                    <option value="lthr">LTHR (Lactate Threshold)</option>
                                </select>
                            </div>
                        </div>

                        {karvonenNeedsRestingHR && (
                            <p className="flex items-start gap-2 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2">
                                <MdInfoOutline className="text-base shrink-0 mt-0.5" />
                                Enter a valid Resting HR to use the more precise Heart Rate Reserve
                                (Karvonen) calculation. Showing a %Max HR estimate for now.
                            </p>
                        )}

                        {/* LTHR conditional input */}
                        {method === 'lthr' && (
                            <div className="flex flex-col gap-1">
                                <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="lthr">
                                    Lactate Threshold HR
                                </label>
                                <div className="relative">
                                    <input
                                        className="w-full bg-surface rounded-lg border border-outline-variant h-12 pl-4 pr-12 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary"
                                        id="lthr"
                                        type="number"
                                        placeholder="e.g. 165"
                                        value={lthr}
                                        onChange={(e) => setLthr(e.target.value === '' ? '' : Math.max(0, parseInt(e.target.value) || 0))}
                                    />
                                    <span className="absolute right-4 top-3 text-outline font-label-sm text-label-sm">BPM</span>
                                </div>
                                <p className="flex items-start gap-2 text-on-surface-variant font-label-sm text-label-sm mt-1">
                                    <MdSpeed className="text-base shrink-0 mt-0.5" />
                                    LTHR is best measured from a 20–30 minute time-trial test, not estimated.
                                </p>
                            </div>
                        )}

                        {/* Advanced Parameters */}
                        <div className="flex flex-col gap-4 bg-surface-container-low p-4 rounded-lg mt-2 border border-outline-variant border-dashed">
                            <div className="flex items-center gap-2">
                                <MdPsychology className="text-primary text-xl" />
                                <span className="font-label-md text-label-md font-semibold text-on-surface">Fine-Tuning</span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                                    <MdTrendingUp className="text-base" />
                                    Training Experience
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {(Object.keys(EXPERIENCE_TIPS) as Experience[]).map((lvl) => (
                                        <label key={lvl} className="cursor-pointer">
                                            <input
                                                className="peer sr-only"
                                                type="radio"
                                                name="experience"
                                                checked={experience === lvl}
                                                onChange={() => setExperience(lvl)}
                                            />
                                            <div className="px-3 py-1.5 rounded-full border border-outline-variant text-on-surface-variant font-label-sm text-label-sm peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary-container capitalize hover:bg-surface-bright transition-colors">
                                                {EXPERIENCE_TIPS[lvl].label}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                                <p className="font-label-sm text-label-sm text-on-surface-variant">
                                    Used to suggest exactly where in your Zone 2 range to target — not to
                                    change the range itself.
                                </p>
                            </div>

                            <div className="pt-2 border-t border-outline-variant">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <input
                                            className="peer sr-only"
                                            type="checkbox"
                                            checked={adjustTemp}
                                            onChange={(e) => setAdjustTemp(e.target.checked)}
                                        />
                                        <div className="w-10 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                                    </div>
                                    <span className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                                        <MdWbSunny className="text-base" />
                                        Adjust for Heat/Humidity (+3 BPM)
                                    </span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>

                {/* ---------- Results ---------- */}
                {hasValidInput ? (
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-6 relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-container rounded-full opacity-20 blur-3xl z-0"></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between border-b border-outline-variant pb-4 mb-4 gap-2 flex-wrap">
                                <h2 className="font-headline-md text-headline-md text-on-surface">Your Target Results</h2>
                                <span className="font-label-sm text-[10px] text-white bg-primary-container px-2.5 py-1 rounded-full font-semibold">
                                    {METHOD_LABELS[method]}
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-center py-6 bg-surface-container-low rounded-xl border border-primary-fixed mb-4">
                                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2 font-bold">
                                    Zone 2 {usingLTHR ? '(Aerobic, % LTHR)' : '(Aerobic Base)'}
                                </span>
                                <div className="flex items-baseline gap-2 text-primary">
                                    <span className="font-headline-xl text-[48px] font-bold leading-none tracking-tight">{minZ2}</span>
                                    <span className="font-headline-md text-headline-md font-medium text-on-surface-variant">–</span>
                                    <span className="font-headline-xl text-[48px] font-bold leading-none tracking-tight">{maxZ2}</span>
                                </div>
                                <span className="font-label-md text-label-md text-on-surface-variant mt-2">Beats Per Minute (BPM)</span>
                            </div>

                            <div className="flex items-center gap-3 bg-surface rounded-lg p-3 border border-outline-variant mb-4">
                                <MdTrendingUp className="text-secondary text-xl shrink-0" />
                                <p className="font-body-md text-[14px] leading-snug text-on-surface-variant">
                                    <span className="font-semibold text-on-surface">Suggested target for you: {recommendedTarget} BPM.</span>{' '}
                                    {EXPERIENCE_TIPS[experience].tip}
                                </p>
                            </div>

                            {!usingLTHR && (
                                <div className="w-full flex flex-col gap-2 mb-4">
                                    <div className="flex justify-between font-label-sm text-label-sm text-outline px-1">
                                        <span>Rest ({restingHR || 'N/A'})</span>
                                        <span className="font-semibold text-secondary">Z2 ({minZ2}-{maxZ2})</span>
                                        <span>Max ({calculatedMaxHR})</span>
                                    </div>
                                    <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden flex">
                                        {(() => {
                                            const restBase = Number(restingHR) || 0;
                                            const range = calculatedMaxHR - restBase;
                                            let leftPercent = 50;
                                            let middlePercent = 25;
                                            let rightPercent = 25;
                                            if (range > 0 && minZ2 > restBase && maxZ2 > minZ2) {
                                                leftPercent = Math.max(0, Math.min(100, ((minZ2 - restBase) / range) * 100));
                                                middlePercent = Math.max(0, Math.min(100 - leftPercent, ((maxZ2 - minZ2) / range) * 100));
                                                rightPercent = Math.max(0, 100 - (leftPercent + middlePercent));
                                            }
                                            return (
                                                <>
                                                    <div className="h-full bg-outline-variant opacity-30 transition-all duration-500" style={{ width: `${leftPercent}%` }} />
                                                    <div className="h-full bg-secondary transition-all duration-500" style={{ width: `${middlePercent}%` }} />
                                                    <div className="h-full bg-outline-variant opacity-30 transition-all duration-500" style={{ width: `${rightPercent}%` }} />
                                                </>
                                            );
                                        })()}
                                    </div>
                                </div>
                            )}

                            <div className="bg-surface rounded-lg p-4 border border-outline-variant flex gap-4 mt-auto">
                                <div className="text-secondary mt-1 shrink-0">
                                    <MdDirectionsRun className="text-2xl" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-label-md text-label-md font-semibold text-on-surface">The &quot;Talk Test&quot; Benchmark</span>
                                    <p className="font-body-md text-[14px] leading-snug text-on-surface-variant">
                                        At {minZ2}-{maxZ2} BPM, you should be able to hold a full
                                        conversation comfortably without gasping for breath. If you can&apos;t,
                                        you&apos;re likely slipping into Zone 3.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center text-on-surface-variant min-h-[300px] w-full">
                        <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center mb-4">
                            <MdMonitorHeart className="text-3xl text-primary" />
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Awaiting Input</h3>
                        <p className="font-body-md text-body-md max-w-xs">
                            Enter your Age, Known Max HR, or LTHR to calculate your personalized
                            training zones.
                        </p>
                    </div>
                )}
            </section>

            {/* ---------------------------------------------------------- */}
            {/* Zone Table                                                 */}
            {/* ---------------------------------------------------------- */}
            {hasValidInput && (
                <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col gap-4">
                    <h2 className="font-headline-md text-headline-md text-on-surface">All Five Heart Rate Zones</h2>
                    <div className="flex flex-col gap-2">
                        {zoneDefs.map((def) => {
                            const [low, high] = zones[def.key] || [0, 0];
                            const isZ2 = def.key === 'z2';
                            const rangeLabel = def.openLow
                                ? `Under ${high}`
                                : def.openHigh
                                    ? `${low}+`
                                    : `${low}–${high}`;
                            return (
                                <div
                                    key={def.key}
                                    className={`flex items-center gap-4 rounded-lg px-4 py-3 border transition-colors ${isZ2
                                            ? 'bg-primary-container/10 border-primary-fixed'
                                            : 'bg-surface border-outline-variant'
                                        }`}
                                >
                                    <span
                                        className="w-3 h-10 rounded-full shrink-0"
                                        style={{ backgroundColor: def.color }}
                                    />
                                    <div className="flex flex-col flex-1 min-w-0">
                                        <div className="flex items-baseline gap-2 flex-wrap">
                                            <span className="font-label-md text-label-md font-bold text-on-surface">{def.title}</span>
                                            <span className="font-label-sm text-label-sm text-on-surface-variant">{def.name}</span>
                                        </div>
                                        <p className="font-body-md text-[13px] text-on-surface-variant truncate">{def.desc}</p>
                                    </div>
                                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface whitespace-nowrap">
                                        {rangeLabel} <span className="font-label-sm text-label-sm font-normal text-outline">BPM</span>
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}
        </div>
    );
}