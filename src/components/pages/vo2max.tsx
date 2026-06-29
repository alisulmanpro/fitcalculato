import React from 'react';
import Vo2MaxCalculatorForm from '@/components/ui/tool/Vo2MaxCalculatorForm';
import FAQAccordion from '@/components/ui/tool/FAQAccordion';
import ContactForm from '@/components/ui/tool/ContactForm';
import Image from "next/image";
import Link from 'next/link';

export default function Vo2MaxCalculator() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-gutter-mobile md:gap-gutter-desktop">
      <div className="md:col-span-9 flex flex-col gap-8 md:gap-12">

        {/* Header & Hero Section */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Fitness Calculators</span>
          </div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background">
            Free VO2 Max Calculator: Find Out How Fit You Really Are
          </h1>
          <Image
            src="/Running.jpg"
            alt="VO2 Max Calculator for running"
            width={1200}
            height={600} />
          <p className="font-body-lg text-body-lg text-on-surface-variant text-justify">
            Discover the true biological age of your cardiovascular system and see how it compares to your chronological age. Use our calculator below to benchmark your fitness level and unlock actionable insights to improve your overall health and longevity.
          </p>
        </section>

        <Vo2MaxCalculatorForm />

        {/* Article Content */}
        <article className="flex flex-col gap-8 text-on-surface-variant font-body-md text-body-md mt-4">

          {/* Section 0 - Introduction */}
          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">Introduction:</h2>
            <p className="text-justify">
              You just finished a run. Your heart is pounding. Legs are burning. And your smartwatch flashes a number: VO2 Max 38.
            </p>
            <p className="text-justify">
              Is that good? Should you panic? Should you celebrate?
            </p>
            <p className="text-justify">
              Most people stare at that number and have no idea what to do with it. This guide fixes that.
            </p>
            <p className="text-justify">
              We break down exactly what VO2 max means, how to calculate VO2 max accurately, what a good VO2 max score looks like for your age and gender, and most importantly, how to actually improve it.
            </p>
          </div>

          {/* Section 1 — What Is VO2 Max */}
          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">What Is VO2 Max?</h2>
            <p className=" text-on-background text-justify">
              VO2 max, short for <em>maximal oxygen uptake</em>, is <strong>the maximum amount of oxygen your body can use per minute during intense exercise. It is measured in milliliters of oxygen per kilogram of body weight per minute (ml/kg/min).</strong>
            </p>
            <p className="text-justify">
              Think of it as the size of your aerobic engine. A bigger engine means more fuel burned, more power produced, and better endurance across any sport or physical activity.
            </p>
            <p className="text-justify">
              VO2 max is not just for athletes. According to a <Link href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2716993" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            <strong>landmark 2018 study published in <em>JAMA Network Open</em>,</strong>
          </Link> researchers at the Cleveland Clinic followed over <strong>120,000 patients</strong> and found that cardiorespiratory fitness, measured directly by VO2 max, was one of the strongest predictors of all-cause mortality across all fitness levels. In plain English: the higher your VO2 max, the lower your risk of dying early from almost any cause.
            </p>
            <p className="text-justify">
              The <Link href="https://www.heart.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            <strong>American Heart Association</strong>
          </Link> went so far as to call cardiorespiratory fitness a <em>clinical vital sign</em> in 2016. That puts it right up there with blood pressure, cholesterol, and blood sugar. Your fitness number is that important.
            </p>
          </div>

          {/* Section 2 — How to Calculate VO2 Max */}
          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">How to Calculate VO2 Max?</h2>
            <p className="text-justify">
              The gold standard is a graded exercise test in a sports science lab, where you run on a treadmill at increasing speeds while wearing a metabolic mask that directly measures oxygen and carbon dioxide exchange. Accurate? Yes. Affordable? Absolutely not.
            </p>
            <p className="text-justify">
              For most people, a <strong>VO2 max calculator</strong> using validated field tests is the practical option. Here are the four most commonly used methods:
            </p>

            <h3 className="font-headline-md text-headline-md text-on-background mt-4">1. The Cooper 12-Minute Run Test</h3>
            <p className="text-justify">
              Developed by Dr. Kenneth Cooper for the U.S. military, this is one of the most widely used aerobic fitness calculators worldwide. Run as far as you can in exactly 12 minutes on a flat surface.
            </p>
            <p className="text-justify">
              <strong>Formula:</strong> VO2 Max = (Distance in meters &minus; 504.9) &divide; 44.73
            </p>
            <p className="text-justify">
              Example: If you cover 2,400 meters, your estimated VO2 max is approximately 42.8 ml/kg/min.
            </p>

            <h3 className="font-headline-md text-headline-md text-on-background mt-4">2. The Rockport 1-Mile Walk Test</h3>
            <p className="text-justify">
              Walk one mile as fast as you can, and record your time and heart rate immediately after. This VO2 max walking calculator works well for beginners, older adults, and anyone who cannot safely run.
            </p>

            <h3 className="font-headline-md text-headline-md text-on-background mt-4">3. Heart Rate Method</h3>
            <p className="text-justify">
              No running required. This method uses the ratio between your maximum and resting heart rates. Measure your resting heart rate first thing in the morning before getting out of bed, for three consecutive days, then average the results.
            </p>
            <p className="text-justify">
              <strong>Formula (Uth et al., 2004):</strong> VO2 Max = 15 &times; (HRmax &divide; HRrest)
            </p>
            <p className="text-justify">
              If your max heart rate is 185 and resting is 55, your estimated VO2 max is roughly 50.5 ml/kg/min.
            </p>

            <h3 className="font-headline-md text-headline-md text-on-background mt-4">4. Race Result Method (Most Accurate for Runners)</h3>
            <p className="text-justify">
              If you have a recent race time from the past 4&ndash;6 weeks, this is the most accurate non-lab approach. It uses Dr. Jack Daniels&apos; VDOT formula, the same system used by competitive runners worldwide. A 10K finishing time gives you a very reliable VO2 max estimate.
            </p>
          </div>

          {/* Section 3 — How Accurate Is a VO2 Max Calculator */}
          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">How Accurate Is a VO2 Max Calculator?</h2>
            <p className="text-justify">
              A race-based VO2 max running calculator is significantly more accurate than wearable devices, because it is based on actual maximal-effort data.
            </p>
            <p className="text-justify">
              Smartwatches? The data is less flattering. <Link href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0322104" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            A 2025 validation study published in <em>PLOS One</em>
          </Link> compared Apple Watch VO2 max estimates to laboratory treadmill testing in 30 participants. The Apple Watch underestimated VO2 max by an average of 6 ml/kg/min, with a mean absolute percentage error of 13&ndash;16%. <Link href="https://biomedeng.jmir.org/2024" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            A 2024 study in <em>JMIR Biomedical Engineering</em>
          </Link> found Apple Watch Series 7 had poor reliability (ICC = 0.47) with 15.8% error versus lab measurements.
            </p>
            <p className="text-justify">
              Garmin devices tend to run slightly higher than the Apple Watch for the same individual, but show similar variability at the extremes.
            </p>
            <p className="text-justify">
              <strong>Use your wearable to track trends over time, not as an absolute benchmark.</strong> If your VO2 max estimator shows steady improvement over three months, that matters more than whether the specific number is exactly right.
            </p>
          </div>

          {/* Section 4 — VO2 Max Score Chart */}
          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">VO2 Max Score Chart: What Is a Good VO2 Max?</h2>
            <p className="text-justify">
              This is the question everyone actually wants answered. And the correct answer requires knowing your age and sex, because both heavily influence your VO2 max score.
            </p>
            <p className="text-justify">
              VO2 max declines by roughly 10% per decade after age 30 in sedentary adults. Women&apos;s values are typically 10&ndash;15% lower than men&apos;s due to physiological differences in hemoglobin concentration, heart size, and body composition, all of which affect oxygen delivery to muscles. That is not a fitness gap; it is basic biology.
            </p>

            <h3 className="font-headline-md text-headline-md text-on-background mt-4">VO2 Max by Age &mdash; Men (ml/kg/min)</h3>
            <p className="text-justify text-sm text-on-surface-variant">Based on ACSM fitness classifications and Cooper Institute norms:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-variant text-on-surface">
                    <th className="p-3 border-b border-outline-variant">Age Group</th>
                    <th className="p-3 border-b border-outline-variant">Poor</th>
                    <th className="p-3 border-b border-outline-variant">Fair</th>
                    <th className="p-3 border-b border-outline-variant">Good</th>
                    <th className="p-3 border-b border-outline-variant">Excellent</th>
                    <th className="p-3 border-b border-outline-variant">Superior</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">20&ndash;29</td>
                    <td className="p-3">&lt; 33</td>
                    <td className="p-3">33&ndash;36</td>
                    <td className="p-3">37&ndash;41</td>
                    <td className="p-3">42&ndash;46</td>
                    <td className="p-3">&gt; 46</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">30&ndash;39</td>
                    <td className="p-3">&lt; 31</td>
                    <td className="p-3">31&ndash;35</td>
                    <td className="p-3">36&ndash;40</td>
                    <td className="p-3">41&ndash;44</td>
                    <td className="p-3">&gt; 44</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">40&ndash;49</td>
                    <td className="p-3">&lt; 28</td>
                    <td className="p-3">28&ndash;32</td>
                    <td className="p-3">33&ndash;36</td>
                    <td className="p-3">37&ndash;41</td>
                    <td className="p-3">&gt; 41</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">50&ndash;59</td>
                    <td className="p-3">&lt; 25</td>
                    <td className="p-3">25&ndash;28</td>
                    <td className="p-3">29&ndash;33</td>
                    <td className="p-3">34&ndash;38</td>
                    <td className="p-3">&gt; 38</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">60&ndash;69</td>
                    <td className="p-3">&lt; 22</td>
                    <td className="p-3">22&ndash;25</td>
                    <td className="p-3">26&ndash;30</td>
                    <td className="p-3">31&ndash;35</td>
                    <td className="p-3">&gt; 35</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-headline-md text-headline-md text-on-background mt-6">VO2 Max by Age &mdash; Women (ml/kg/min)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-variant text-on-surface">
                    <th className="p-3 border-b border-outline-variant">Age Group</th>
                    <th className="p-3 border-b border-outline-variant">Poor</th>
                    <th className="p-3 border-b border-outline-variant">Fair</th>
                    <th className="p-3 border-b border-outline-variant">Good</th>
                    <th className="p-3 border-b border-outline-variant">Excellent</th>
                    <th className="p-3 border-b border-outline-variant">Superior</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">20&ndash;29</td>
                    <td className="p-3">&lt; 27</td>
                    <td className="p-3">27&ndash;31</td>
                    <td className="p-3">32&ndash;36</td>
                    <td className="p-3">37&ndash;41</td>
                    <td className="p-3">&gt; 41</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">30&ndash;39</td>
                    <td className="p-3">&lt; 25</td>
                    <td className="p-3">25&ndash;28</td>
                    <td className="p-3">29&ndash;32</td>
                    <td className="p-3">33&ndash;36</td>
                    <td className="p-3">&gt; 36</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">40&ndash;49</td>
                    <td className="p-3">&lt; 22</td>
                    <td className="p-3">22&ndash;25</td>
                    <td className="p-3">26&ndash;29</td>
                    <td className="p-3">30&ndash;34</td>
                    <td className="p-3">&gt; 34</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">50&ndash;59</td>
                    <td className="p-3">&lt; 20</td>
                    <td className="p-3">20&ndash;23</td>
                    <td className="p-3">24&ndash;27</td>
                    <td className="p-3">28&ndash;32</td>
                    <td className="p-3">&gt; 32</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">60&ndash;69</td>
                    <td className="p-3">&lt; 18</td>
                    <td className="p-3">18&ndash;21</td>
                    <td className="p-3">22&ndash;25</td>
                    <td className="p-3">26&ndash;30</td>
                    <td className="p-3">&gt; 30</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-2 text-on-surface-variant border-l-5 border-blue-700 p-3 bg-blue-200">
              <b>Note:</b> Women&apos;s VO2 max values are typically 10&ndash;15% lower than men&apos;s due to physiological differences in hemoglobin concentration, heart size, and body composition &mdash; not a fitness gap, but basic biology.
            </p>
            <p className="text-justify">
              So if you are a 35-year-old woman and your VO2 max calculator shows 33, you are in the Excellent category for your age group. That is genuinely impressive, top 25% of your demographic. If it shows 24, you are in Fair territory, with real room to grow.
            </p>
            <p className="text-justify">
              For context on the elite end: elite male endurance athletes typically score 70&ndash;85 ml/kg/min. The highest VO2 max ever recorded was <strong>97.5 ml/kg/min</strong>, set by Norwegian cross-country skier Oskar Svendsen at age 18. Recreational fitness and professional sport operate in entirely different leagues.
            </p>
          </div>

          {/* Section 5 — Men vs Women */}
          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">VO2 Max for Men vs. Women: Why the Numbers Differ</h2>
            <p className="font-bold text-on-background text-justify">
              Women asking <em>&quot;What is a good VO2 max for women?&quot;</em> often see the numbers and feel discouraged. Please do not be.
            </p>
            <p className="text-justify">
              The gap between male and female VO2 max norms, typically 15&ndash;25%, is driven by three physiological factors:
            </p>
            <p className="text-justify">
              <strong>Hemoglobin.</strong> Women have roughly 12&ndash;16% lower hemoglobin levels than men, which means less oxygen-carrying capacity per unit of blood reaching the muscles.
            </p>
            <p className="text-justify">
              <strong>Heart size.</strong> Women&apos;s hearts are, on average, smaller, resulting in lower stroke volume. The heart must beat faster to achieve the same cardiac output, which is less efficient at high intensities.
            </p>
            <p className="text-justify">
              <strong>Body composition.</strong> Women naturally carry a higher percentage of essential body fat. Since VO2 max is expressed relative to total body weight, a higher proportion of metabolically inactive tissue lowers the number mathematically, not physiologically.
            </p>
            <Image
              src="/morningyoga.jpg"
              alt="Zone 2 Heart Rate Calculator"
              width={1200}
              height={600} />
            <p className="text-justify">
              None of these factors changes the health benefits. <Link href="https://www.mayoclinicproceedings.org/issue/S0025-6196(24)X0009-9" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            A 2024 study published in <em>Mayo Clinic Proceedings</em>
          </Link> found that females with higher estimated cardiorespiratory fitness showed a lower risk of myocardial infarction, and the protective effect was actually stronger for women than for men at comparable fitness levels.
            </p>
          </div>

          {/* Section 6 — Garmin and Apple Watch */}
          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">How Garmin and Apple Watch Calculate VO2 Max</h2>
            <p className="text-justify">
              You have probably seen a VO2 max number pop up on your Garmin or Apple Watch after a run and wondered: how did it get there?
            </p>
            <p className="text-justify">
              Both devices use a submaximal estimation approach. They do not directly measure oxygen; instead, they use the relationship between your heart rate and your pace or power output during exercise to predict your aerobic capacity.
            </p>
            <p className="text-justify">
              Garmin uses GPS speed, heart rate data, and its proprietary FirstBeat algorithm to generate its estimate. The more outdoor runs you log with consistent heart rate data, the more stable the estimate becomes.
            </p>
            <p className="text-justify">
              Apple Watch uses outdoor walks, runs, and hikes with GPS and heart rate together. It will not update your cardio fitness estimate from indoor treadmill runs or cycling sessions, only GPS-tracked outdoor movement counts.
            </p>
            <p className="text-justify">
              Both are useful for tracking your trend over weeks and months. One spike or dip means nothing. A consistent upward trend over three months? That means your training is working.
            </p>
          </div>

          {/* Section 7 — How to Improve VO2 Max */}
          <div className="flex flex-col gap-4 bg-surface-container rounded-xl p-6 border border-outline-variant">
            <h2 className="font-headline-lg text-[24px] text-on-background">How to Improve Your VO2 Max?</h2>
            <p className="text-justify">
              Here is where most articles give you a generic &quot;do HIIT&quot; answer. We will be more specific, because the science on this is actually nuanced and interesting.
            </p>

            <h3 className="font-headline-md text-headline-md text-on-background mt-2">Zone 2 Training &mdash; The Foundation</h3>
            <p className="text-justify">
              <Link href="https://fitcalculato.com/calculators/zone-2-heart-rate-calculator" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Zone 2 training means working at roughly 60&ndash;70% of your maximum heart rate
          </Link>, a pace where you can hold a conversation but are clearly working. This is the aerobic base.
            </p>
            <p className="text-justify">
              Research on elite endurance athletes consistently shows that 75&ndash;80% of training volume at this intensity is what drives long-term cardiovascular fitness. It builds mitochondrial density, the actual cellular machinery that processes oxygen, which forms the foundation of a high VO2 max.
            </p>
            <p className="text-justify">
              Aim for 150&ndash;180 minutes of Zone 2 per week to see meaningful change within 8&ndash;12 weeks.
            </p>

            <h3 className="font-headline-md text-headline-md text-on-background mt-2">VO2 Max Intervals</h3>
            <p className="text-justify">
              These are efforts at roughly 90&ndash;100% of your maximum heart rate, lasting 3&ndash;8 minutes each. <Link href="https://www.ntnu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Research from NTNU (Norwegian University of Science and Technology)
          </Link> and other institutions shows untrained individuals can improve their VO2 max by 15&ndash;20% within a 20-week structured training program.
            </p>
            <p className="text-justify">
              A simple protocol: 4 &times; 4-minute hard efforts at a pace that genuinely challenges you, with 3&ndash;4 minutes of easy jogging between each interval. Twice a week is enough. More is not always better.
            </p>

            <h3 className="font-headline-md text-headline-md text-on-background mt-2">Consistency Over Intensity</h3>
            <p className="text-justify">
              Both matter. But consistency wins in the long term. The biggest predictor of VO2 max improvement over six months is how many weeks in a row you train, not how hard any single session was.
            </p>

            <h3 className="font-headline-md text-headline-md text-on-background mt-2">What Not to Do</h3>
            <p className="text-justify">
              Stop chasing your smartwatch number on a daily basis. Heat, poor sleep, dehydration, and even a noisy GPS signal can drop your wearable&apos;s estimate by 3&ndash;5 points in a single day. Trust the 90-day trend, not the Tuesday morning reading.
            </p>
          </div>

          {/* Section 8 — Using the Calculator Step-by-Step */}
          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">Using a VO2 Max Calculator: Step-by-Step</h2>
            <p className="text-justify">
              Our cardiovascular fitness calculator gives you an estimated VO2 max score using the method that best matches what you have available:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-3 mt-2 text-justify">
              <li><strong>Recent race result</strong> &rarr; use the VDOT / Jack Daniels race time method.</li>
              <li><strong>Heart rate data only</strong> &rarr; use the resting / max heart rate formula.</li>
              <li><strong>Walking test</strong> &rarr; use the Rockport 1-Mile Walk approach.</li>
              <li><strong>12-minute run</strong> &rarr; use the Cooper Test formula.</li>
            </ul>
            <p className="text-justify">
              After you get your score, compare it to the VO2 max chart above for your age and gender. Use that number as your baseline. Test again in 8&ndash;12 weeks. Watch the trend.
            </p>
            <p className="text-justify">
              That is the entire system. Simple, honest, and backed by exercise physiology research validated over decades.
            </p>
          </div>

          {/* Section 9 — The Bottom Line */}
          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">The Bottom Line</h2>
            <p className="font-bold text-on-background text-justify">
              Your VO2 max is one of the most useful numbers in health and fitness &mdash; and one of the most misunderstood.
            </p>
            <p className="text-justify">
              It is not just a metric for serious athletes. It predicts how long you live, how well your heart functions, and how much energy you have on an ordinary Tuesday. Getting it above average for your age is one of the highest-leverage health decisions available to you.
            </p>
            <p className="text-justify">
              Use our VO2 max calculator to find your baseline. Compare it against the VO2 max chart for your age and sex. Then train consistently with the methods above, and measure again in 10 weeks.
            </p>
            <p className="text-justify">
              The number will go up. Your body will feel the difference long before the calculator confirms it.
            </p>
            <p className="text-sm mt-2 text-on-surface-variant border-l-5 border-blue-700 p-3 bg-blue-200">
              <b>Disclaimer:</b> This article is for educational purposes only and does not constitute medical advice. Consult a healthcare professional before starting a new exercise program, particularly if you have existing cardiovascular conditions.
            </p>
          </div>

          <FAQAccordion />
          <ContactForm />

        </article>

      </div >

      {/* Sidebar Placeholder */}
      <aside className="hidden lg:block w-[300px] shrink-0 md:col-span-3">
        <div className="sticky top-24">
        </div>
      </aside>

    </main>
  );
}
