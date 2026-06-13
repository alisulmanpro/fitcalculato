'use client';

import { MdTune, MdPsychology } from "react-icons/md";

interface ZoneCalculatorFormProps {
  age: number | '';
  setAge: (val: number | '') => void;
  gender: string;
  setGender: (val: string) => void;
  restingHR: number | '';
  setRestingHR: (val: number | '') => void;
  knownMaxHR: number | '';
  setKnownMaxHR: (val: number | '') => void;
  experience: 'beginner' | 'intermediate' | 'advanced';
  setExperience: (val: 'beginner' | 'intermediate' | 'advanced') => void;
  adjustTemp: boolean;
  setAdjustTemp: (val: boolean) => void;
  calculatedMaxHR: number;
  method: 'traditional' | 'tanaka' | 'karvonen' | 'lthr';
  setMethod: (val: 'traditional' | 'tanaka' | 'karvonen' | 'lthr') => void;
  lthr: number | '';
  setLTHR: (val: number | '') => void;
  vo2max: number | '';
  setVO2Max: (val: number | '') => void;
}

export default function ZoneCalculatorForm({
  age,
  setAge,
  gender,
  setGender,
  restingHR,
  setRestingHR,
  knownMaxHR,
  setKnownMaxHR,
  experience,
  setExperience,
  adjustTemp,
  setAdjustTemp,
  calculatedMaxHR,
  method,
  setMethod,
  lthr,
  setLTHR,
  vo2max,
  setVO2Max
}: ZoneCalculatorFormProps) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col gap-6">
      <div className="flex items-center gap-3 border-b border-outline-variant pb-4">
        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white shrink-0">
          <MdTune className="text-xl" />
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface">Physiological Data</h2>
      </div>

      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        {/* Age + Gender */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="age">Age</label>
            <input
              className="w-full bg-surface rounded-lg border border-outline-variant h-12 px-4 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary"
              id="age"
              type="number"
              value={age || ''}
              onChange={(e) => setAge(e.target.value === '' ? '' : parseInt(e.target.value))}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="gender">Gender</label>
            <select
              id="gender"
              className="w-full bg-surface rounded-lg border border-outline-variant h-12 px-4 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* Rest + Max */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="resting-hr">Resting HR</label>
            <div className="relative">
              <input
                className="w-full bg-surface rounded-lg border border-outline-variant h-12 pl-4 pr-12 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary"
                id="resting-hr"
                type="number"
                placeholder="60"
                value={restingHR || ''}
                onChange={(e) => setRestingHR(e.target.value === '' ? '' : parseInt(e.target.value))}
              />
              <span className="absolute right-4 top-3 text-outline font-label-sm text-label-sm">BPM</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="max-hr">Known Max HR</label>
            <div className="relative">
              <input
                className="w-full bg-surface rounded-lg border border-outline-variant h-12 pl-4 pr-12 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary"
                id="max-hr"
                type="number"
                placeholder={`Auto ${calculatedMaxHR}`}
                value={knownMaxHR}
                onChange={(e) => {
                  const value = e.target.value === '' ? '' : Math.max(0, parseInt(e.target.value) || 0);
                  setKnownMaxHR(value);
                }}
              />
              <span className="absolute right-4 top-3 text-outline font-label-sm text-label-sm">BPM</span>
            </div>
          </div>
        </div>

        {/* Method + VO2max */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="method">Calculation Method</label>
            <select
              className="w-full bg-surface rounded-lg border border-outline-variant h-12 px-4 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary"
              id="method"
              value={method}
              onChange={(e) => setMethod(e.target.value as any)}
            >
              <option value="karvonen">Karvonen (HRR)</option>
              <option value="tanaka">Tanaka Formula</option>
              <option value="traditional">220 - Age</option>
              <option value="lthr">LTHR (Lactate Threshold)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="vo2max">VO₂ Max <span className="text-outline font-normal font-normal text-xs">(opt)</span></label>
            <input
              className="w-full bg-surface rounded-lg border border-outline-variant h-12 px-4 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary"
              id="vo2max"
              type="number"
              placeholder="optional"
              value={vo2max}
              onChange={(e) => {
                const val = e.target.value === '' ? '' : Number(e.target.value);
                setVO2Max(val);
              }}
            />
          </div>
        </div>

        {/* LTHR Conditional Input */}
        {method === "lthr" && (
          <div className="flex flex-col gap-1">
            <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="lthr">Lactate Threshold HR</label>
            <div className="relative">
              <input
                className="w-full bg-surface rounded-lg border border-outline-variant h-12 pl-4 pr-12 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary"
                id="lthr"
                type="number"
                placeholder="e.g. 165"
                value={lthr}
                onChange={(e) => {
                  const val = e.target.value === '' ? '' : Number(e.target.value);
                  setLTHR(val);
                }}
              />
              <span className="absolute right-4 top-3 text-outline font-label-sm text-label-sm">BPM</span>
            </div>
          </div>
        )}

        {/* Advanced Parameters Section */}
        <div className="flex flex-col gap-4 bg-surface-container-low p-4 rounded-lg mt-2 border border-outline-variant border-dashed">
          <div className="flex items-center gap-2">
            <MdPsychology className="text-primary text-xl animate-pulse" />
            <span className="font-label-md text-label-md font-semibold text-on-surface">Advanced Parameters</span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Training Experience</label>
            <div className="flex flex-wrap gap-2">
              {(['beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
                <label key={lvl} className="cursor-pointer">
                  <input
                    className="peer sr-only"
                    type="radio"
                    name="experience"
                    checked={experience === lvl}
                    onChange={() => setExperience(lvl)}
                  />
                  <div className="px-3 py-1.5 rounded-full border border-outline-variant text-on-surface-variant font-label-sm text-label-sm peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary-container capitalize hover:bg-surface-bright transition-colors">
                    {lvl}
                  </div>
                </label>
              ))}
            </div>
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
              <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                Adjust for Heat/Humidity (+3 BPM)
              </span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}