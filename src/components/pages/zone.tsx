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

    const [age, setAge] = useState(35);
    const [gender, setGender] = useState('Male');
    const [restingHR, setRestingHR] = useState(60);
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
                return 220 - age;
            case 'tanaka':
            case 'karvonen':
                return Math.round(208 - (0.7 * age));
            case 'lthr':
                return lthr ? Number(lthr) : Math.round(208 - (0.7 * age));
            default:
                return 220 - age;
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

        if (restingHR > 30 && restingHR < calculatedMaxHR && method === "karvonen") {
            const reserve = calculatedMaxHR - restingHR;
            low = Math.round(reserve * lowerPct + restingHR);
            high = Math.round(reserve * upperPct + restingHR);
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

    return (

        <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-gutter-mobile md:gap-gutter-desktop">

            <div className="md:col-span-9 flex flex-col gap-8 md:gap-12">

                <ToolHero />

                <AdPlaceholder
                    format="leaderboard"
                />

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

                    <ResultsDisplay
                        minZ2={zones.z2[0]}
                        maxZ2={zones.z2[1]}
                        restingHR={restingHR}
                        maxHR={calculatedMaxHR}
                        calculationMethod={method}
                    />

                </section>

                <AdPlaceholder
                    format="native"
                />

                <ZoneTable
                    zones={zones}
                    intensityRanges={
                        intensityRanges
                    }
                />

                <EducationalContent />
                <FAQSection />

            </div>

            <ToolSidebar />

        </main>

    )

}