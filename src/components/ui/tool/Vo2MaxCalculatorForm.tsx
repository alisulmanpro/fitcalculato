'use client';

import React, { useState, useMemo } from 'react';
import { LuHeart, LuTimer, LuInfo, LuCopy, LuCheck } from 'react-icons/lu';

type Gender = 'Male' | 'Female';
type Method = 'hr' | 'run';
type WeightUnit = 'lbs' | 'kg';

const ageBrackets = [
  { min: 20, max: 29, label: '20-29', male: 43, female: 36 },
  { min: 30, max: 39, label: '30-39', male: 41, female: 34 },
  { min: 40, max: 49, label: '40-49', male: 39, female: 32 },
  { min: 50, max: 59, label: '50-59', male: 36, female: 29 },
  { min: 60, max: 120, label: '60+', male: 32, female: 26 },
];

export default function Vo2MaxCalculatorForm() {
  const [gender, setGender] = useState<Gender>('Male');
  const [age, setAge] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [weightUnit, setWeightUnit] = useState<WeightUnit>('lbs');
  const [method, setMethod] = useState<Method>('hr');
  
  const [restingHR, setRestingHR] = useState<number | ''>('');
  const [runMinutes, setRunMinutes] = useState<number | ''>('');
  const [runSeconds, setRunSeconds] = useState<number | ''>('');

  const [copied, setCopied] = useState(false);

  const calculateVo2Max = () => {
    if (typeof age !== 'number') return null;

    if (method === 'hr') {
      if (typeof restingHR !== 'number' || restingHR <= 0) return null;
      const maxHR = 208 - (0.7 * age);
      return 15.3 * (maxHR / restingHR);
    } else {
      if (typeof runMinutes !== 'number' || typeof runSeconds !== 'number') return null;
      const decimalTime = runMinutes + (runSeconds / 60);
      if (decimalTime <= 0) return null;
      return (483 / decimalTime) + 3.5;
    }
  };

  const vo2Max = calculateVo2Max();

  const getFitnessAgeBracket = (score: number, userGender: Gender) => {
    // Find the oldest bracket where the score is >= the norm
    // If score is better than 20-29, return 20-29
    // Iterate from oldest to youngest to find the matching bracket
    for (let i = ageBrackets.length - 1; i >= 0; i--) {
      const bracket = ageBrackets[i];
      const norm = userGender === 'Male' ? bracket.male : bracket.female;
      if (score < norm) {
        if (i === ageBrackets.length - 1) return '60+'; // Worse than 60+
        return ageBrackets[i + 1].label; // Falls into the bracket below
      }
    }
    return '20-29'; // Better than or equal to 20-29 norm
  };

  const getClassification = (score: number, userGender: Gender, userAge: number) => {
    const bracket = ageBrackets.find(b => userAge >= b.min && userAge <= b.max) || ageBrackets[ageBrackets.length - 1];
    const norm = userGender === 'Male' ? bracket.male : bracket.female;
    
    // Rough estimation based on the 50th percentile (norm)
    if (score < norm - 5) return { label: 'Poor', color: 'bg-rose-500 text-white' };
    if (score >= norm - 5 && score < norm) return { label: 'Fair', color: 'bg-amber-500 text-white' };
    if (score >= norm && score < norm + 5) return { label: 'Good', color: 'bg-emerald-500 text-white' };
    if (score >= norm + 5 && score < norm + 10) return { label: 'Excellent', color: 'bg-emerald-600 text-white' };
    return { label: 'Superior', color: 'bg-emerald-700 text-white' };
  };

  const classification = typeof age === 'number' && vo2Max ? getClassification(vo2Max, gender, age) : null;
  const fitnessAge = vo2Max ? getFitnessAgeBracket(vo2Max, gender) : null;

  const getFitnessAgeContext = () => {
    if (!fitnessAge || typeof age !== 'number') return '';
    if (fitnessAge === '60+' && age >= 60) return 'Your fitness age matches your chronological age.';
    if (fitnessAge === '20-29' && age < 30) return 'Your fitness age matches your chronological age.';
    
    // Parse numeric value from fitness age label for comparison
    const fitAgeNum = parseInt(fitnessAge.split('-')[0].replace('+', ''));
    if (fitAgeNum < age) return `Your fitness age is younger than your actual age.`;
    if (fitAgeNum > age) return `Your fitness age is older than your actual age.`;
    return 'Your fitness age matches your chronological age.';
  };

  const handleCopy = () => {
    if (!vo2Max) return;
    const summary = `My VO2 Max: ${vo2Max.toFixed(1)} mL/kg/min\nFitness Age: ${fitnessAge}\nClassification: ${classification?.label}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-surface-container rounded-2xl p-6 md:p-8 border border-outline-variant shadow-sm flex flex-col gap-8 w-full max-w-4xl">
      
      {/* Tabs */}
      <div className="flex bg-surface-variant p-1 rounded-xl">
        <button
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-label-md transition-colors ${method === 'hr' ? 'bg-surface text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
          onClick={() => setMethod('hr')}
        >
          <LuHeart className="w-5 h-5" />
          Quick Estimate (Heart Rate)
        </button>
        <button
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-label-md transition-colors ${method === 'run' ? 'bg-surface text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
          onClick={() => setMethod('run')}
        >
          <LuTimer className="w-5 h-5" />
          Performance (1.5 Mile Run)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-headline-sm text-on-background">Personal Details</h3>
            
            {/* Gender */}
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-on-surface-variant">Gender</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-on-surface">
                  <input type="radio" checked={gender === 'Male'} onChange={() => setGender('Male')} className="accent-primary w-4 h-4" />
                  Male
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-on-surface">
                  <input type="radio" checked={gender === 'Female'} onChange={() => setGender('Female')} className="accent-primary w-4 h-4" />
                  Female
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Age */}
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-on-surface-variant">Age (Years)</label>
                <input 
                  type="number" 
                  value={age} 
                  onChange={(e) => setAge(e.target.value ? Number(e.target.value) : '')}
                  className="bg-surface border border-outline px-4 py-2 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g. 35"
                />
              </div>

              {/* Weight */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="font-label-sm text-on-surface-variant">Weight</label>
                  <button 
                    onClick={() => setWeightUnit(weightUnit === 'lbs' ? 'kg' : 'lbs')}
                    className="text-xs text-primary hover:underline"
                  >
                    Switch to {weightUnit === 'lbs' ? 'kg' : 'lbs'}
                  </button>
                </div>
                <div className="relative">
                  <input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : '')}
                    className="bg-surface border border-outline px-4 py-2 rounded-lg text-on-surface w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="e.g. 160"
                  />
                  <span className="absolute right-10 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">{weightUnit}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-outline-variant w-full" />

          {/* Dynamic Inputs */}
          <div className="flex flex-col gap-4">
            <h3 className="font-headline-sm text-on-background flex items-center gap-2">
              {method === 'hr' ? 'Heart Rate Data' : 'Run Test Data'}
              <div className="group relative">
                <LuInfo className="w-4 h-4 text-on-surface-variant cursor-pointer" />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-inverse-surface text-inverse-on-surface text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none z-10">
                  {method === 'hr' ? 'Measure your resting heart rate first thing in the morning before getting out of bed.' : 'Run 1.5 miles (2.4 km) on a flat track as fast as safely possible.'}
                </div>
              </div>
            </h3>

            {method === 'hr' ? (
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-on-surface-variant">Resting Heart Rate (BPM)</label>
                <input 
                  type="number" 
                  value={restingHR} 
                  onChange={(e) => setRestingHR(e.target.value ? Number(e.target.value) : '')}
                  className="bg-surface border border-outline px-4 py-2 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g. 60"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-on-surface-variant">Minutes</label>
                  <input 
                    type="number" 
                    value={runMinutes} 
                    onChange={(e) => setRunMinutes(e.target.value ? Number(e.target.value) : '')}
                    className="bg-surface border border-outline px-4 py-2 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="e.g. 12"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-on-surface-variant">Seconds</label>
                  <input 
                    type="number" 
                    value={runSeconds} 
                    onChange={(e) => setRunSeconds(e.target.value ? Number(e.target.value) : '')}
                    className="bg-surface border border-outline px-4 py-2 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="e.g. 30"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Display */}
        <div className="bg-surface rounded-xl border border-outline-variant p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <h3 className="font-headline-sm text-on-surface-variant uppercase tracking-wider text-sm">Your Results</h3>
            
            {vo2Max !== null ? (
              <>
                <div className="flex flex-col gap-2">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold text-on-background">{vo2Max.toFixed(1)}</span>
                    <span className="text-on-surface-variant mb-1">mL/kg/min</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">Estimated VO2 Max</p>
                </div>

                <div className="h-px bg-outline-variant w-full" />

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-on-background font-medium">Fitness Age</span>
                    <span className="text-xl font-bold text-primary">{fitnessAge}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-background font-medium">Classification</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${classification?.color}`}>
                      {classification?.label}
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant italic mt-2">
                    {getFitnessAgeContext()}
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 text-on-surface-variant text-center gap-2">
                <LuHeart className="w-8 h-8 opacity-50" />
                <p>Fill out the form to see your estimated VO2 max and fitness age.</p>
              </div>
            )}
          </div>

          {vo2Max !== null && (
            <button 
              onClick={handleCopy}
              className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-outline hover:bg-surface-variant transition-colors text-on-surface font-label-md"
            >
              {copied ? <LuCheck className="w-5 h-5 text-emerald-500" /> : <LuCopy className="w-5 h-5" />}
              {copied ? 'Copied to Clipboard!' : 'Copy Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
