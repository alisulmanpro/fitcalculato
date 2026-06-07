import React from 'react';
import Vo2MaxCalculatorForm from '@/components/ui/tool/Vo2MaxCalculatorForm';
import FAQAccordion from '@/components/ui/tool/FAQAccordion';
import ContactForm from '@/components/ui/tool/ContactForm';

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
            Free VO2 Max & Fitness Age Calculator
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant text-justify">
            Discover the true biological age of your cardiovascular system and see how it compares to your chronological age. Use our calculator below to benchmark your fitness level and unlock actionable insights to improve your overall health and longevity.
          </p>
        </section>

        <Vo2MaxCalculatorForm />

        {/* Article Content */}
        <article className="flex flex-col gap-8 text-on-surface-variant font-body-md text-body-md mt-4">

          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">What is VO2 Max and Why Does It Matter?</h2>
            <p className="font-bold text-on-background text-justify">
              VO2 max (maximal oxygen uptake) is the maximum amount of oxygen your body can absorb, transport, and use during intense exercise. It is widely considered the ultimate indicator of cardiovascular fitness and aerobic endurance.
            </p>
            <p className='text-justify'>
              Your VO2 max reflects how efficiently your heart, lungs, and muscles work together. When you breathe in, your lungs transfer oxygen to your bloodstream. Your heart then pumps this oxygen-rich blood to your working muscles, which extract the oxygen to produce energy. A higher VO2 max means your body is exceptionally good at this process, allowing you to sustain physical effort longer and at a higher intensity.
            </p>
            <p className='text-justify'>
              But why does it matter for the average person, not just elite athletes? Cardiovascular endurance is closely tied to your overall health and longevity. Numerous studies have shown that a high maximal oxygen uptake is associated with a lower risk of chronic conditions, including heart disease, type 2 diabetes, and certain cancers. In fact, improving your VO2 max is one of the most effective ways to increase your lifespan and healthspan—the number of years you live in good health, free from chronic disease and disability.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">VO2 Max Average Value Tables for Men and Women</h2>
            <p className='text-justify'>
              Understanding where you stand requires comparing your score to established norms. VO2 max naturally declines with age, dropping by roughly 10% per decade after the age of 30, though regular cardiovascular exercise can significantly slow this decline. Below are the standard reference values measured in milliliters of oxygen per kilogram of body weight per minute (mL/kg/min).
            </p>

            <h3 className="font-headline-md text-headline-md text-on-background mt-4">VO2 Max Norms for Men (mL/kg/min)</h3>
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
                    <td className="p-3">&lt; 38</td>
                    <td className="p-3">38&ndash;43</td>
                    <td className="p-3">44&ndash;51</td>
                    <td className="p-3">52&ndash;56</td>
                    <td className="p-3">&gt; 56</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">30&ndash;39</td>
                    <td className="p-3">&lt; 34</td>
                    <td className="p-3">34&ndash;39</td>
                    <td className="p-3">40&ndash;47</td>
                    <td className="p-3">48&ndash;51</td>
                    <td className="p-3">&gt; 51</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">40&ndash;49</td>
                    <td className="p-3">&lt; 30</td>
                    <td className="p-3">30&ndash;35</td>
                    <td className="p-3">36&ndash;43</td>
                    <td className="p-3">44&ndash;47</td>
                    <td className="p-3">&gt; 47</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">50&ndash;59</td>
                    <td className="p-3">&lt; 25</td>
                    <td className="p-3">25&ndash;31</td>
                    <td className="p-3">32&ndash;39</td>
                    <td className="p-3">40&ndash;43</td>
                    <td className="p-3">&gt; 43</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">60&ndash;69</td>
                    <td className="p-3">&lt; 21</td>
                    <td className="p-3">21&ndash;26</td>
                    <td className="p-3">27&ndash;35</td>
                    <td className="p-3">36&ndash;39</td>
                    <td className="p-3">&gt; 39</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">70+</td>
                    <td className="p-3">&lt; 18</td>
                    <td className="p-3">18&ndash;22</td>
                    <td className="p-3">23&ndash;30</td>
                    <td className="p-3">31&ndash;35</td>
                    <td className="p-3">&gt; 35</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-headline-md text-headline-md text-on-background mt-6">VO2 Max Norms for Women (mL/kg/min)</h3>
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
                    <td className="p-3">&lt; 32</td>
                    <td className="p-3">32&ndash;36</td>
                    <td className="p-3">37&ndash;43</td>
                    <td className="p-3">44&ndash;48</td>
                    <td className="p-3">&gt; 48</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">30&ndash;39</td>
                    <td className="p-3">&lt; 30</td>
                    <td className="p-3">30&ndash;33</td>
                    <td className="p-3">34&ndash;39</td>
                    <td className="p-3">40&ndash;44</td>
                    <td className="p-3">&gt; 44</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">40&ndash;49</td>
                    <td className="p-3">&lt; 26</td>
                    <td className="p-3">26&ndash;30</td>
                    <td className="p-3">31&ndash;36</td>
                    <td className="p-3">37&ndash;41</td>
                    <td className="p-3">&gt; 41</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">50&ndash;59</td>
                    <td className="p-3">&lt; 22</td>
                    <td className="p-3">22&ndash;26</td>
                    <td className="p-3">27&ndash;31</td>
                    <td className="p-3">32&ndash;36</td>
                    <td className="p-3">&gt; 36</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">60&ndash;69</td>
                    <td className="p-3">&lt; 20</td>
                    <td className="p-3">20&ndash;23</td>
                    <td className="p-3">24&ndash;28</td>
                    <td className="p-3">29&ndash;32</td>
                    <td className="p-3">&gt; 32</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-3">70+</td>
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
              <b>Note:</b> Women typically have naturally lower VO2 max scores than men due to differences in body composition, lung size, and blood volume.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">What is Fitness Age and How is it Calculated?</h2>
            <p className="font-bold text-on-background text-justify">
              Fitness Age is a biological age estimate based entirely on your cardiovascular health. It compares your VO2 max to average values across different age brackets, revealing whether your heart and lungs are functionally younger or older than your actual chronological age.
            </p>
            <p className='text-justify'>
              Imagine you are a 45-year-old male with a measured VO2 max of 49 mL/kg/min. Looking at the normative data, a score of 49 places you in the "Excellent" category for 30 to 39-year-olds. Consequently, your estimated fitness age would be around 35. You have effectively shaved a decade off your biological age simply by maintaining superb aerobic capacity. Conversely, a sedentary 30-year-old with poor cardiovascular health might have a fitness age of 50.
            </p>
            <p className='text-justify'>
              While precise measurement requires a laboratory treadmill test with an oxygen mask, sports scientists have developed reliable estimation methods for everyday use. Two of the most accessible and popular models include:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-3 mt-2 text-justify">
              <li>
                <strong>The Uth-Sørensen-Overgaard-Pedersen Estimation:</strong> This straightforward mathematical formula calculates your VO2 max using your resting heart rate (the lowest your heart rate drops while at complete rest) and your maximum heart rate. The formula is: <em>VO2 Max = 15.3 × (Maximum Heart Rate ÷ Resting Heart Rate)</em>. By dividing your max effort by your resting baseline, it accurately gauges your cardiovascular efficiency.
              </li>
              <li>
                <strong>The 1.5-Mile Run Test:</strong> Popularized by the Cooper Institute, this field test requires you to run 1.5 miles as fast as you safely can. The time it takes to complete the distance is then plugged into a standard formula to estimate your maximal oxygen uptake. Faster times indicate better cardiovascular delivery and, consequently, a younger fitness age.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 bg-surface-container rounded-xl p-6 border border-outline-variant">
            <h2 className="font-headline-lg text-[24px] text-on-background">Actionable Ways to Improve Your VO2 Max</h2>
            <p className='text-justify'>
              If your calculated fitness age is higher than you would like, do not worry. Your aerobic capacity is highly adaptable. With targeted training, you can significantly lower your fitness age over time. Here are five scientifically backed methods to improve your cardiovascular endurance:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-4 mt-2 text-justify">
              <li>
                <strong>Incorporate High-Intensity Interval Training (HIIT):</strong> Pushing your heart rate near its maximum limit is one of the most effective ways to force your body to adapt. Try intervals of 1 to 4 minutes of intense effort (around 90% of your max heart rate) followed by an equal amount of active recovery.
              </li>
              <li>
                <strong>Build Your Aerobic Base with Zone 2 Training:</strong> You cannot sprint all the time. Spending 80% of your workout time in Zone 2—a steady, conversational pace—builds mitochondrial density and capillary networks in your muscles, creating the foundation necessary for intense efforts.
              </li>
              <li>
                <strong>Increase Your Total Training Volume:</strong> Frequency and duration matter. Gradually increasing the total amount of time you spend doing cardiovascular exercises like running, cycling, or swimming will naturally force your heart and lungs to become more efficient.
              </li>
              <li>
                <strong>Lose Excess Body Fat:</strong> Because VO2 max is measured relative to your body weight (mL per kilogram), simply losing excess fat mass will automatically increase your score, even if your absolute oxygen consumption remains exactly the same.
              </li>
              <li>
                <strong>Maintain Unshakable Consistency:</strong> Cardiovascular adaptations take time. You will see the most significant reductions in your fitness age after several months of consistent, well-structured training rather than sporadic bursts of intense exercise.
              </li>
            </ul>
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
