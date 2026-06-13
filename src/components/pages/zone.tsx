'use client';

import React, { useMemo, useState } from 'react';
import ToolHero from '@/components/ui/tool/ToolHero';
import ZoneCalculatorForm from '@/components/ui/tool/ZoneCalculatorForm';
import ResultsDisplay from '@/components/ui/tool/ResultsDisplay';
import ZoneTable from '@/components/ui/tool/ZoneTable';
import EducationalContent from '@/components/ui/tool/EducationalContent';
import FAQSection from '@/components/ui/tool/FAQSection';
import ToolSidebar from '@/components/ui/tool/ToolSidebar';
import AdPlaceholder from '@/components/ui/ads/AdPlaceholder';

export default function ZoneCalculator() {

    const [age, setAge] = useState<number | ''>('');
    const [gender, setGender] = useState('Male');
    const [restingHR, setRestingHR] = useState<number | ''>('');
    const [knownMaxHR, setKnownMaxHR] = useState<number | ''>('');
    const [lthr, setLTHR] = useState<number | ''>('');
    const [vo2max, setVo2max] = useState<number | ''>('');
    const [adjustTemp, setAdjustTemp] = useState(false);
    const [experience, setExperience] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
    const [method, setMethod] = useState<'tanaka' | 'traditional' | 'karvonen' | 'lthr'>('karvonen');

    /* ---------- MAX HR ---------- */

    const calculatedMaxHR = useMemo(() => {
        if (knownMaxHR)
            return Number(knownMaxHR);
        switch (method) {
            case 'traditional':
                return 220 - (Number(age) || 0);
            case 'tanaka':
            case 'karvonen':
                return Math.round(208 - (0.7 * (Number(age) || 0)));
            case 'lthr':
                return lthr ? Number(lthr) : Math.round(208 - (0.7 * (Number(age) || 0)));
            default:
                return 220 - (Number(age) || 0);
        }
    }, [
        age,
        knownMaxHR,
        method,
        lthr
    ]);


    /* ---------- EXPERIENCE ---------- */

    const zoneMap = {

        beginner: {
            z1: [0.50, 0.60],
            z2: [0.60, 0.70],
            z3: [0.70, 0.80],
            z4: [0.80, 0.90],
            z5: [0.90, 1]
        },

        intermediate: {
            z1: [0.50, 0.60],
            z2: [0.60, 0.70],
            z3: [0.70, 0.80],
            z4: [0.80, 0.90],
            z5: [0.90, 1]
        },

        advanced: {
            z1: [0.50, 0.60],
            z2: [0.60, 0.70],
            z3: [0.70, 0.80],
            z4: [0.80, 0.90],
            z5: [0.90, 1]
        }

    };


    const pct = zoneMap[experience];


    /* ---------- ENVIRONMENT ---------- */

    const environmentOffset =
        adjustTemp ? 3 : 0;


    /* ---------- MAIN ENGINE ---------- */

    const calculateZone = (lowerPct: number, upperPct: number): [number, number] => {
        let low;
        let high;

        if (restingHR !== '' && Number(restingHR) > 30 && Number(restingHR) < calculatedMaxHR && method === "karvonen") {
            const reserve = calculatedMaxHR - Number(restingHR);
            low = Math.round(reserve * lowerPct + Number(restingHR));
            high = Math.round(reserve * upperPct + Number(restingHR));
        } else {
            low = Math.round(calculatedMaxHR * lowerPct);
            high = Math.round(calculatedMaxHR * upperPct);
        }

        /* environmental recommendation */

        low += environmentOffset;
        high += environmentOffset;

        /* elite VO2 adjustment */

        if (vo2max && Number(vo2max) > 55) {
            low += 2;
            high += 2;
        }

        return [low, high];
    }


    /* ---------- ZONES ---------- */

    const zones = {

        z1: calculateZone(pct.z1[0], pct.z1[1]),
        z2: calculateZone(pct.z2[0], pct.z2[1]),
        z3: calculateZone(pct.z3[0], pct.z3[1]),
        z4: calculateZone(pct.z4[0], pct.z4[1]),
        z5: calculateZone(pct.z5[0], pct.z5[1])
    };


    /* ---------- LABELS ---------- */

    const intensityRanges = {

        z1: '50–60%',
        z2: '60–70%',
        z3: '70–80%',
        z4: '80–90%',
        z5: '90–100%'

    };

    const hasValidInput = age !== '' || knownMaxHR !== '';

    return (

        <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-gutter-mobile md:gap-gutter-desktop">

            <div className="md:col-span-9 flex flex-col gap-8 md:gap-12">

                <ToolHero />

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <ZoneCalculatorForm
                        age={age}
                        setAge={setAge}
                        gender={gender}
                        setGender={setGender}
                        restingHR={restingHR}
                        setRestingHR={setRestingHR}
                        knownMaxHR={knownMaxHR}
                        setKnownMaxHR={setKnownMaxHR}
                        experience={experience}
                        setExperience={setExperience}
                        adjustTemp={adjustTemp}
                        setAdjustTemp={setAdjustTemp}
                        method={method}
                        setMethod={setMethod}
                        lthr={lthr}
                        setLTHR={setLTHR}

                        vo2max={vo2max}
                        setVO2Max={setVo2max}

                        calculatedMaxHR={
                            calculatedMaxHR
                        }

                    />

                    {hasValidInput ? (
                        <ResultsDisplay
                            minZ2={zones.z2[0]}
                            maxZ2={zones.z2[1]}
                            restingHR={Number(restingHR) || 0}
                            maxHR={calculatedMaxHR}
                            calculationMethod={method}
                        />
                    ) : (
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center text-on-surface-variant min-h-[300px]">
                            <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">❤️</span>
                            </div>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Awaiting Input</h3>
                            <p className="font-body-md text-body-md max-w-xs">Please enter your Age or a Known Max HR to calculate your training zones.</p>
                        </div>
                    )}

                </section>

                {hasValidInput && (
                    <ZoneTable
                        zones={zones}
                        intensityRanges={
                            intensityRanges
                        }
                    />
                )}

                <EducationalContent />
                <FAQSection />

            </div>


        </main>

    )

}