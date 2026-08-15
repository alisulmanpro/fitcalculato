'use client';

import React, { ChangeEvent, useState } from 'react';
import {
    MdSpeed,
    MdInfoOutline,
    MdWarningAmber,
    MdCheckCircle,
    MdTrendingDown,
    MdFitnessCenter,
    MdClose,
    MdLocalFireDepartment
} from 'react-icons/md';

interface ZoneData {
    zone: number;
    feel: string;
    intensityName: string;
    percentage: string;
    minBpm: number;
    maxBpm: number;
    color: string;
    badgeColor: string;
    description: string;
    benefits: string;
    whatToDo: string;
}

export default function ZoneCalculatorForm() {
    const [isCalculated, setIsCalculated] = useState<boolean>(false);
    const [activeModal, setActiveModal] = useState<'high' | 'low' | 'zone2' | 'guide' | null>(null);
    const [value, setValue] = useState<{
        age: string;
        heartRate: string;
    }>({
        age: '',
        heartRate: ''
    });

    const [submittedData, setSubmittedData] = useState<{
        age: number;
        heartRate: number;
    } | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value: inputValue } = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: inputValue,
        }));
    };

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        const ageNum = parseInt(value.age, 10);
        const hrNum = parseInt(value.heartRate, 10);

        if (!ageNum || ageNum < 10) return;

        setSubmittedData({
            age: ageNum,
            heartRate: hrNum || 0
        });
        setIsCalculated(true);

        // Smooth scroll to results
        setTimeout(() => {
            const el = document.getElementById('zone-results-view');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    // Calculate core metrics only based on submitted data
    const numericAge = submittedData ? submittedData.age : 25;
    const userHR = submittedData && submittedData.heartRate > 0 ? submittedData.heartRate : null;
    const maxHR = 220 - numericAge;

    // 5 Training Zones definitions based on Max HR (Fox & Haskell standard)
    const zones: ZoneData[] = [
        {
            zone: 1,
            feel: 'Easy',
            intensityName: 'Low (Active Recovery / Warm-up)',
            percentage: '50% - 60%',
            minBpm: Math.round(maxHR * 0.50),
            maxBpm: Math.round(maxHR * 0.60),
            color: '#38bdf8',
            badgeColor: 'badge-info',
            description: 'Comfortable, very light breathing. You can sing a song or talk smoothly.',
            benefits: 'Builds basic circulatory efficiency, aids active recovery, warms up muscles.',
            whatToDo: 'Ideal for warm-ups, cool-downs, and easy recovery strolls.'
        },
        {
            zone: 2,
            feel: 'Steady',
            intensityName: 'Moderate (Aerobic Base / Fat Burn)',
            percentage: '60% - 70%',
            minBpm: Math.round(maxHR * 0.60),
            maxBpm: Math.round(maxHR * 0.70),
            color: '#22c55e',
            badgeColor: 'badge-success',
            description: 'Comfortable conversational pace. You can speak full sentences without gasping.',
            benefits: 'Burns maximum body fat as primary fuel and builds huge aerobic endurance.',
            whatToDo: 'Target 60-80% of your workout routine in this zone to burn fat effortlessly.'
        },
        {
            zone: 3,
            feel: 'Moderately Hard',
            intensityName: 'Moderately High (Cardio Endurance)',
            percentage: '70% - 80%',
            minBpm: Math.round(maxHR * 0.70),
            maxBpm: Math.round(maxHR * 0.80),
            color: '#eab308',
            badgeColor: 'badge-warning',
            description: 'Moderate panting. You can speak short 3-4 word sentences at a time.',
            benefits: 'Improves lung capacity, cardiac output, and aerobic fitness.',
            whatToDo: 'Great for steady tempo training sessions 1-2 times per week.'
        },
        {
            zone: 4,
            feel: 'Hard',
            intensityName: 'High (Anaerobic / Threshold)',
            percentage: '80% - 90%',
            minBpm: Math.round(maxHR * 0.80),
            maxBpm: Math.round(maxHR * 0.90),
            color: '#f97316',
            badgeColor: 'badge-warning',
            description: 'Heavy breathing and high muscle burn. Speech is limited to single words.',
            benefits: 'Raises your lactate threshold, allowing you to sustain high speed longer.',
            whatToDo: 'Best suited for high-intensity interval training (HIIT) with recovery intervals.'
        },
        {
            zone: 5,
            feel: 'Very Hard',
            intensityName: 'Very High / Peak (VO2 Max & Sprints)',
            percentage: '90% - 100%',
            minBpm: Math.round(maxHR * 0.90),
            maxBpm: maxHR,
            color: '#ef4444',
            badgeColor: 'badge-error',
            description: 'Maximal exertion sprint. Gasping for air, legs feel on fire.',
            benefits: 'Peak cardiovascular power, speed acceleration, and VO2 Max capacity.',
            whatToDo: 'Keep intervals short (10-45 seconds) with full recovery in between.'
        }
    ];

    // Determine current user zone and accurate meter pointer position (0% to 100%)
    let currentZone: ZoneData | null = null;
    let hrPositionPercent = 2;
    let hrStatusLabel = '';

    if (userHR) {
        const z1Min = zones[0].minBpm;
        const z5Max = zones[4].maxBpm;

        if (userHR < z1Min) {
            // Heart rate is below Zone 1 minimum (e.g. 88 BPM < 99 BPM)
            hrPositionPercent = 2; // Pin to the very start of the meter
            currentZone = null;
            hrStatusLabel = 'Below Zone 1 (Resting / Warm-up)';
        } else if (userHR >= z5Max) {
            // Heart rate is at or exceeds Max HR
            hrPositionPercent = 98;
            currentZone = zones[4];
            hrStatusLabel = 'Zone 5: Peak Max Effort';
        } else {
            // Find which zone user falls into
            const match = zones.find((item) => userHR >= item.minBpm && userHR <= item.maxBpm);
            if (match) {
                currentZone = match;
                hrStatusLabel = `Zone ${match.zone}: ${match.feel}`;
                const zoneIndex = match.zone - 1; // 0 for Z1, 1 for Z2, etc.
                const zoneMin = match.minBpm;
                const zoneMax = match.maxBpm;
                const fractionInZone = zoneMax > zoneMin ? (userHR - zoneMin) / (zoneMax - zoneMin) : 0;
                // Each zone block is 20% wide
                hrPositionPercent = Math.min(98, Math.max(2, (zoneIndex * 20) + (fractionInZone * 20)));
            } else if (userHR > zones[4].maxBpm) {
                currentZone = zones[4];
                hrPositionPercent = 98;
                hrStatusLabel = 'Zone 5: Peak Effort';
            }
        }
    }

    return (
        <div id="zone-caluculator" className="w-full flex flex-col gap-6 my-6">
            {/* Calculator Card */}
            <div className="card bg-base-100 border border-base-300 shadow-xl overflow-hidden">
                {/* Form Body */}
                <form onSubmit={handleCalculate} className="card-body p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Age Input */}
                        <fieldset className="fieldset w-full">
                            <label className="label font-bold text-base-content flex items-center gap-2" htmlFor="age">
                                <span>Age (Years) <span className="text-error">*</span></span>
                            </label>
                            <input
                                type="text"
                                id="age"
                                name="age"
                                className="input outline-primary focus:border-primary w-full validator text-base"
                                value={value.age}
                                onChange={handleChange}
                                placeholder="Enter your Age E.G. 22"
                                pattern="[0-9]+"
                                inputMode="numeric"
                                required
                                title="Only numbers are allowed"
                            />
                            <p className="validator-hint">
                                Only digits allowed
                            </p>
                        </fieldset>

                        {/* Heart Rate Input */}
                        <fieldset className="fieldset w-full">
                            <label className="label font-bold text-base-content flex items-center gap-2" htmlFor="heartRate">
                                <span>Heart Rate (BPM) <span className="text-error">*</span></span>
                            </label>
                            <input
                                type="text"
                                id="heartRate"
                                name="heartRate"
                                className="input outline-primary focus:border-primary w-full validator text-base"
                                value={value.heartRate}
                                onChange={handleChange}
                                placeholder="Enter your Heart Rate E.G. 88"
                                required
                                pattern="[0-9]+"
                                inputMode="numeric"
                                title="Only numbers are allowed"
                            />
                            <p className="validator-hint">
                                Only digits allowed
                            </p>
                        </fieldset>
                    </div>

                    {/* Action Button */}
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg w-full text-primary-content font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                        <MdSpeed className="text-2xl" />
                        Calculate Training Zones
                    </button>
                </form>
            </div>

            {/* Results Section - Only rendered after user clicks Calculate */}
            {isCalculated && submittedData && (
                <div id="zone-results-view" className="space-y-8 animate-fadeIn">
                    {/* Summary Quick Stats Banner */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="card bg-base-100 border border-base-300 shadow-sm p-4 text-center">
                            <span className="text-xs text-base-content/70 font-semibold uppercase tracking-wider">Max Heart Rate</span>
                            <span className="text-3xl font-extrabold text-neutral mt-1">
                                {maxHR} <span className="text-sm font-normal text-base-content/60">BPM</span>
                            </span>
                            <span className="text-xs text-base-content/60 mt-1">100% limit</span>
                        </div>

                        <div className="card bg-emerald-50/80 border border-emerald-300 shadow-sm p-4 text-center">
                            <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider flex items-center justify-center gap-1">
                                <MdLocalFireDepartment className="text-emerald-600" /> Optimal Fat Burn (Zone 2)
                            </span>
                            <span className="text-3xl font-extrabold text-emerald-700 mt-1">
                                {zones[1].minBpm} – {zones[1].maxBpm} <span className="text-sm font-normal text-emerald-800/70">BPM</span>
                            </span>
                            <span className="text-xs text-emerald-800/80 mt-1">Steady conversational pace</span>
                        </div>

                        <div className="card bg-base-100 border border-base-300 shadow-sm p-4 text-center">
                            <span className="text-xs text-base-content/70 font-semibold uppercase tracking-wider">Your Live Zone</span>
                            {userHR ? (
                                <>
                                    <span className="text-3xl font-extrabold text-primary-content mt-1">
                                        {userHR} <span className="text-sm font-normal text-base-content/60">BPM</span>
                                    </span>
                                    <span className={`badge ${currentZone ? currentZone.badgeColor : 'badge-neutral'} font-bold mt-1 text-xs mx-auto`}>
                                        {hrStatusLabel}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="text-xl font-bold text-base-content/70 mt-2">All 5 Zones Ready</span>
                                    <span className="text-xs text-base-content/60 mt-1">See breakdown below</span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Visual Meter / Gauge (Low -> High -> Very High) */}
                    <div className="card bg-base-100 border border-base-300 shadow-lg p-6 space-y-6">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <div>
                                <h3 className="text-lg font-bold text-base-content flex items-center gap-2">
                                    <MdSpeed className="text-primary text-xl" />
                                    Heart Rate Intensity Meter
                                </h3>
                                <p className="text-xs text-base-content/70">Visual gauge showing Low, Moderate, High, and Very High exercise intensity</p>
                            </div>
                            {userHR && (
                                <div className="badge badge-lg badge-outline gap-1 font-bold border-primary text-base-content">
                                    Current: <span className="text-primary font-extrabold">{userHR} BPM</span> ({hrStatusLabel})
                                </div>
                            )}
                        </div>

                        {/* Beautiful Clean Segmented Meter Bar with Zero UI Glitches */}
                        <div className="space-y-3 pt-6 pb-2">
                            <div className="relative w-full px-1">
                                {/* Zone Blocks Container */}
                                <div className="grid grid-cols-5 gap-2 h-9 rounded-2xl p-1 bg-slate-100 border border-slate-200 shadow-inner">
                                    {zones.map((z) => {
                                        const isCurrent = currentZone?.zone === z.zone;
                                        return (
                                            <div
                                                key={z.zone}
                                                className={`h-full rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-bold text-white shadow-xs select-none ${isCurrent
                                                    ? 'brightness-110 shadow-md ring-2 ring-offset-1 ring-slate-700'
                                                    : 'opacity-85 hover:opacity-100'
                                                    }`}
                                                style={{ backgroundColor: z.color }}
                                                title={`Zone ${z.zone}: ${z.feel} (${z.minBpm}-${z.maxBpm} BPM)`}
                                            >
                                                Z{z.zone}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Precision Needle Indicator with Safe Viewport Clamping */}
                                {userHR && (
                                    <div
                                        className="absolute -top-7 transition-all duration-500 pointer-events-none z-30 flex flex-col items-center"
                                        style={{
                                            left: `${hrPositionPercent}%`,
                                            transform: 'translateX(-50%)',
                                        }}
                                    >
                                        {/* Tooltip Badge */}
                                        <div className="bg-[#1c2333] text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap border border-slate-700">
                                            {userHR} BPM
                                        </div>
                                        {/* Triangle Arrow */}
                                        <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-[#1c2333]"></div>
                                    </div>
                                )}
                            </div>

                            {/* Meter Legend & Labels */}
                            <div className="grid grid-cols-5 text-center pt-2 gap-1">
                                <div className="text-sky-600 font-bold text-[11px] sm:text-xs">
                                    <span>Low</span>
                                    <span className="block text-[10px] text-base-content/60 font-normal">Warm-up</span>
                                </div>
                                <div className="text-emerald-600 font-bold text-[11px] sm:text-xs">
                                    <span>Moderate</span>
                                    <span className="block text-[10px] text-base-content/60 font-normal">Fat Burn</span>
                                </div>
                                <div className="text-amber-600 font-bold text-[11px] sm:text-xs">
                                    <span>Moderately Hard</span>
                                    <span className="block text-[10px] text-base-content/60 font-normal">Cardio</span>
                                </div>
                                <div className="text-orange-600 font-bold text-[11px] sm:text-xs">
                                    <span>High</span>
                                    <span className="block text-[10px] text-base-content/60 font-normal">Threshold</span>
                                </div>
                                <div className="text-rose-600 font-bold text-[11px] sm:text-xs">
                                    <span>Very High</span>
                                    <span className="block text-[10px] text-base-content/60 font-normal">Peak</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Zones Table Matching User's Screenshot */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <h3 className="text-lg font-bold text-base-content flex items-center gap-2">
                                <MdFitnessCenter className="text-primary text-xl" />
                                Heart Rate Training Zones Table
                            </h3>
                            <span className="text-xs text-base-content/70">Calculated for Age: <b>{numericAge} yrs</b> | Max HR: <b>{maxHR} BPM</b></span>
                        </div>

                        {/* Clean Dark Header Table exactly as in user image */}
                        <div className="overflow-x-auto rounded-xl border border-base-300 shadow-md bg-base-100">
                            <table className="table w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#1c2333] text-white text-sm md:text-base">
                                        <th className="py-4 px-6 font-bold w-1/4">Heart Rate Training Zones</th>
                                        <th className="py-4 px-6 font-bold w-1/3">Feel</th>
                                        <th className="py-4 px-6 font-bold w-5/12 text-left">Heart Rate (beats per minute)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-base-200">
                                    {zones.map((z) => {
                                        const isUserZone = currentZone?.zone === z.zone;
                                        return (
                                            <tr
                                                key={z.zone}
                                                className={`transition-colors text-base-content text-sm md:text-base ${isUserZone
                                                    ? 'bg-primary/15 font-bold border-l-4 border-l-primary'
                                                    : z.zone === 2
                                                        ? 'bg-emerald-50/50 hover:bg-base-200/60'
                                                        : 'hover:bg-base-200/60'
                                                    }`}
                                            >
                                                <td className="py-4 px-6 font-semibold">
                                                    <div className="flex items-center gap-3">
                                                        <span
                                                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0 shadow-sm"
                                                            style={{ backgroundColor: z.color }}
                                                        >
                                                            {z.zone}
                                                        </span>
                                                        <span>{z.zone}</span>
                                                        {z.zone === 2 && (
                                                            <span className="badge badge-success badge-sm text-[10px] font-bold text-white hidden sm:inline-flex">
                                                                Fat Burn Zone
                                                            </span>
                                                        )}
                                                        {isUserZone && (
                                                            <span className="badge badge-primary badge-sm text-[10px] font-bold text-primary-content">
                                                                Your Zone
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 font-medium">
                                                    <div className="flex flex-col">
                                                        <span className="text-base font-semibold">{z.feel}</span>
                                                        <span className="text-xs text-base-content/70 font-normal">{z.percentage}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className="flex items-baseline gap-2 font-bold text-lg">
                                                        <span className="text-neutral">{z.minBpm} – {z.maxBpm}</span>
                                                        <span className="text-xs font-normal text-base-content/60">BPM</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Curiosity-Inducing Action Guides ("Low ya High ho toh kya karein?") */}
                    {/* <div className="card bg-base-200/70 border border-base-300 shadow-md p-6 space-y-5">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="badge badge-warning font-bold text-xs uppercase">Curiosity & Action Guide</span>
                                <h3 className="text-lg font-extrabold text-base-content">
                                    Heart Rate Low ya High ho toh kya karein? (Expert Action Guide)
                                </h3>
                            </div>
                            <p className="text-xs md:text-sm text-base-content/75">
                                Agar aapka heart rate target zone se bahar ja raha hai, toh panic karne ki zaroorat nahi hai. Niche diye gaye buttons par click karke exact solution janein:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            <button
                                type="button"
                                onClick={() => setActiveModal('high')}
                                className="btn btn-outline border-error/40 hover:bg-error hover:border-error hover:text-white flex flex-col h-auto py-3 px-4 items-start text-left normal-case transition-all shadow-sm group cursor-pointer"
                            >
                                <div className="flex items-center justify-between w-full mb-1">
                                    <span className="badge badge-error badge-sm text-white font-bold">Alert</span>
                                    <MdTrendingUp className="text-xl text-error group-hover:text-white" />
                                </div>
                                <span className="font-bold text-sm text-base-content group-hover:text-white">
                                    Heart Rate Too HIGH?
                                </span>
                                <span className="text-[11px] text-base-content/70 group-hover:text-white/90 line-clamp-2">
                                    Danger signs & 3 instant steps to bring it down in 60s
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveModal('low')}
                                className="btn btn-outline border-sky-400/50 hover:bg-sky-600 hover:border-sky-600 hover:text-white flex flex-col h-auto py-3 px-4 items-start text-left normal-case transition-all shadow-sm group cursor-pointer"
                            >
                                <div className="flex items-center justify-between w-full mb-1">
                                    <span className="badge badge-info badge-sm text-white font-bold">Fix</span>
                                    <MdTrendingDown className="text-xl text-sky-600 group-hover:text-white" />
                                </div>
                                <span className="font-bold text-sm text-base-content group-hover:text-white">
                                    Heart Rate Too LOW?
                                </span>
                                <span className="text-[11px] text-base-content/70 group-hover:text-white/90 line-clamp-2">
                                    Why you stop burning fat & how to speed up safely
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveModal('zone2')}
                                className="btn btn-outline border-emerald-500/50 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white flex flex-col h-auto py-3 px-4 items-start text-left normal-case transition-all shadow-sm group cursor-pointer"
                            >
                                <div className="flex items-center justify-between w-full mb-1">
                                    <span className="badge badge-success badge-sm text-white font-bold">Secret</span>
                                    <MdLocalFireDepartment className="text-xl text-emerald-600 group-hover:text-white" />
                                </div>
                                <span className="font-bold text-sm text-base-content group-hover:text-white">
                                    The Zone 2 Fat Secret
                                </span>
                                <span className="text-[11px] text-base-content/70 group-hover:text-white/90 line-clamp-2">
                                    How to burn 85% more fat without getting exhausted
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveModal('guide')}
                                className="btn btn-outline border-primary/60 hover:bg-primary hover:border-primary hover:text-primary-content flex flex-col h-auto py-3 px-4 items-start text-left normal-case transition-all shadow-sm group cursor-pointer"
                            >
                                <div className="flex items-center justify-between w-full mb-1">
                                    <span className="badge badge-primary badge-sm font-bold">Action Plan</span>
                                    <MdCheckCircle className="text-xl text-primary group-hover:text-primary-content" />
                                </div>
                                <span className="font-bold text-sm text-base-content group-hover:text-primary-content">
                                    What to do RIGHT NOW?
                                </span>
                                <span className="text-[11px] text-base-content/70 group-hover:text-primary-content/90 line-clamp-2">
                                    Personalized workout blueprint based on your zone
                                </span>
                            </button>
                        </div>
                    </div> */}
                </div>
            )}

            {/* Interactive Modals for Curiosity Guides */}
            {activeModal && (
                <div className="modal modal-open modal-bottom sm:modal-middle bg-black/60 z-50 backdrop-blur-xs">
                    <div className="modal-box max-w-2xl bg-base-100 border border-base-300 p-6 space-y-5">
                        {/* High HR Modal */}
                        {activeModal === 'high' && (
                            <>
                                <div className="flex items-center justify-between border-b border-base-200 pb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
                                            <MdWarningAmber className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-lg text-rose-700">Heart Rate Bohot Zyada High Ho Toh Kya Karein?</h3>
                                            <p className="text-xs text-base-content/70">Immediate steps to prevent dizziness, fatigue, and overtraining</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setActiveModal(null)}
                                        className="btn btn-sm btn-circle btn-ghost"
                                        aria-label="Close"
                                    >
                                        <MdClose className="text-xl" />
                                    </button>
                                </div>

                                <div className="space-y-4 text-sm text-base-content">
                                    <div className="alert alert-error/15 border border-error/30 text-xs">
                                        <MdInfoOutline className="text-lg text-error shrink-0" />
                                        <span><b>Caution:</b> If your heart rate exceeds 95% of Max HR ({Math.round(maxHR * 0.95)} BPM) and you feel chest pain, extreme dizziness, or nausea, stop immediately and sit down.</span>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="font-bold text-base text-base-content">1. Immediate 60-Second Cooldown Protocol:</h4>
                                        <ul className="list-disc pl-5 space-y-1.5 text-base-content/85">
                                            <li><b>Switch from running to brisk walking immediately:</b> Do not stop abruptly (which causes blood pooling in legs). Slow down your pace gradually.</li>
                                            <li><b>Box Breathing (4-4-4):</b> Inhale deeply through your nose for 4 seconds, hold for 4 seconds, and exhale slowly through your mouth for 4 seconds. This activates the vagus nerve and slows your heart beat.</li>
                                            <li><b>Sip Room Temperature Water:</b> Dehydration causes &quot;Cardiac Drift&quot; where heart rate rises 10-15 BPM without extra effort.</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-2 bg-base-200 p-4 rounded-xl">
                                        <h4 className="font-bold text-base text-base-content">2. Why is your Heart Rate spiking so fast?</h4>
                                        <p className="text-xs text-base-content/80">
                                            Common culprits include lack of sleep, caffeine intake before workout, high outdoor temperature/humidity, or an underdeveloped aerobic base. To fix this, train strictly in <b>Zone 2 ({zones[1].minBpm}–{zones[1].maxBpm} BPM)</b> for 8 weeks to build bigger mitochondrial capacity.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Low HR Modal */}
                        {activeModal === 'low' && (
                            <>
                                <div className="flex items-center justify-between border-b border-base-200 pb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-sky-100 text-sky-600 rounded-lg">
                                            <MdTrendingDown className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-lg text-sky-700">Heart Rate Target Se Low Ho Toh Kya Karein?</h3>
                                            <p className="text-xs text-base-content/70">How to enter the optimal fat burn & cardio training zone safely</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setActiveModal(null)}
                                        className="btn btn-sm btn-circle btn-ghost"
                                        aria-label="Close"
                                    >
                                        <MdClose className="text-xl" />
                                    </button>
                                </div>

                                <div className="space-y-4 text-sm text-base-content">
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-base text-base-content">1. Why Staying Too Low Won&apos;t Give Results:</h4>
                                        <p className="text-base-content/85">
                                            If your heart rate is below {zones[0].minBpm} BPM during exercise, your body is in resting/recovery mode. While good for recovery, it produces negligible cardiovascular adaptations and burns fewer total calories.
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="font-bold text-base text-base-content">2. How to Safely Elevate into Zone 2 ({zones[1].minBpm}–{zones[1].maxBpm} BPM):</h4>
                                        <ul className="list-disc pl-5 space-y-1.5 text-base-content/85">
                                            <li><b>Increase Incline:</b> If walking on a treadmill, raise incline to 4%–6% at 3.5 mph rather than sprinting.</li>
                                            <li><b>Engage Upper Body:</b> Use walking poles, pump your arms, or use an elliptical/rower to recruit more muscle mass.</li>
                                            <li><b>Cadence Check:</b> Increase your stride rate slightly while maintaining a steady rhythm.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-xs text-emerald-800 font-medium">
                                        💡 <b>Target Check:</b> Aim for <b>{zones[1].minBpm} to {zones[1].maxBpm} BPM</b>. At this heart rate, you should still be able to talk in complete sentences without gasping!
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Zone 2 Fat Secret Modal */}
                        {activeModal === 'zone2' && (
                            <>
                                <div className="flex items-center justify-between border-b border-base-200 pb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                                            <MdLocalFireDepartment className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-lg text-emerald-700">The Zone 2 &quot;Fat-Burning&quot; Secret Revealed</h3>
                                            <p className="text-xs text-base-content/70">Why working easier actually burns more body fat than sprinting</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setActiveModal(null)}
                                        className="btn btn-sm btn-circle btn-ghost"
                                        aria-label="Close"
                                    >
                                        <MdClose className="text-xl" />
                                    </button>
                                </div>

                                <div className="space-y-4 text-sm text-base-content">
                                    <p className="text-base-content/85">
                                        Most people believe that exhausting themselves at maximum heart rate is the only way to lose fat. <b>Science proves the opposite.</b>
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="bg-emerald-50/70 border border-emerald-300 p-3.5 rounded-xl">
                                            <h5 className="font-bold text-emerald-800 text-sm">Zone 2 ({zones[1].minBpm}–{zones[1].maxBpm} BPM)</h5>
                                            <p className="text-xs text-emerald-900/80 mt-1">
                                                Fuel Source: <b>Up to 85% Free Fatty Acids</b>.<br />
                                                Lactate is continuously cleared, allowing you to train 45-90 minutes without soreness or burnout.
                                            </p>
                                        </div>
                                        <div className="bg-rose-50/70 border border-rose-300 p-3.5 rounded-xl">
                                            <h5 className="font-bold text-rose-800 text-sm">Zone 4/5 ({zones[3].minBpm}+ BPM)</h5>
                                            <p className="text-xs text-rose-900/80 mt-1">
                                                Fuel Source: <b>Pure Glycogen (Carbs)</b>.<br />
                                                Lactate floods muscles rapidly, forcing you to stop within 5-15 minutes with high cortisol spikes.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 bg-base-200 p-3.5 rounded-xl text-xs">
                                        <h5 className="font-bold text-base-content">The Golden Rule for Zone 2:</h5>
                                        <p className="text-base-content/80">
                                            Keep your heart rate strictly between <b>{zones[1].minBpm} and {zones[1].maxBpm} BPM</b> for 3 to 4 sessions per week (45 mins each). You will build superhuman endurance and torch visceral body fat!
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Action Plan Modal */}
                        {activeModal === 'guide' && (
                            <>
                                <div className="flex items-center justify-between border-b border-base-200 pb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-primary/20 text-primary-content rounded-lg">
                                            <MdCheckCircle className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-lg text-base-content">What Should You Do Right Now?</h3>
                                            <p className="text-xs text-base-content/70">Customized 3-step action plan tailored to your fitness goals</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setActiveModal(null)}
                                        className="btn btn-sm btn-circle btn-ghost"
                                        aria-label="Close"
                                    >
                                        <MdClose className="text-xl" />
                                    </button>
                                </div>

                                <div className="space-y-3 text-sm text-base-content">
                                    <div className="border border-base-300 rounded-xl p-3.5 bg-base-100 flex gap-3">
                                        <span className="badge badge-primary font-black text-xs shrink-0">Step 1</span>
                                        <div>
                                            <h5 className="font-bold text-sm">Set your Smartwatch HR Alerts</h5>
                                            <p className="text-xs text-base-content/75 mt-0.5">
                                                On Apple Watch, Garmin, or Fitbit, configure high/low alerts for <b>{zones[1].minBpm} – {zones[1].maxBpm} BPM</b> so you vibrate if you drift out of Zone 2.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-base-300 rounded-xl p-3.5 bg-base-100 flex gap-3">
                                        <span className="badge badge-primary font-black text-xs shrink-0">Step 2</span>
                                        <div>
                                            <h5 className="font-bold text-sm">Apply the 80/20 Endurance Rule</h5>
                                            <p className="text-xs text-base-content/75 mt-0.5">
                                                Spend <b>80%</b> of your weekly workout minutes in Zone 2 ({zones[1].minBpm}–{zones[1].maxBpm} BPM) and only <b>20%</b> in high-intensity Zone 4/5 ({zones[3].minBpm}+ BPM).
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-base-300 rounded-xl p-3.5 bg-base-100 flex gap-3">
                                        <span className="badge badge-primary font-black text-xs shrink-0">Step 3</span>
                                        <div>
                                            <h5 className="font-bold text-sm">The &quot;Talk Test&quot; Real-Time Verification</h5>
                                            <p className="text-xs text-base-content/75 mt-0.5">
                                                If you cannot recite the alphabet or speak 2 full sentences without gasping for breath, slow down immediately until your heart rate stabilizes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Modal Footer */}
                        <div className="modal-action border-t border-base-200 pt-3">
                            <button
                                onClick={() => setActiveModal(null)}
                                className="btn btn-primary font-bold px-6"
                            >
                                Got it, thanks!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
