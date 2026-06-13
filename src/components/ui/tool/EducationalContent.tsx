export default function EducationalContent() {
  return (
    <article className="flex flex-col gap-8 text-on-surface-variant font-body-md text-body-md mt-4 text-justify">
      <div className="flex flex-col gap-4">
        <h2 className="font-headline-lg text-[24px] text-on-background">Free Zone 2 Heart Rate Calculator: Find Your Aerobic Base</h2>
        <p>
          Zone 2 training is the most underleveraged tool in endurance sports — and the one most backed by longevity science. Train consistently in this zone, and you build a cardiovascular engine that burns fat efficiently, recovers faster, and performs longer — without grinding yourself into the ground.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-headline-lg text-[24px] text-on-background">What Is Zone 2 Heart Rate Training?</h2>
        <p>
          <strong>Zone 2 heart rate training is low-to-moderate intensity aerobic exercise performed at 60–70% of your maximum heart rate. It is the intensity at which your body primarily burns fat for fuel, maximizes mitochondrial development, and builds long-term cardiovascular capacity without significant fatigue accumulation.</strong>
        </p>
        <p>
          This is sometimes called &quot;conversational pace&quot; for good reason. If you can hold a full sentence without gasping — but couldn't comfortably sing a song — you're in Zone 2.
        </p>
        <p>That's the <strong>talk test</strong>: a simple, no-gadget way to check your intensity:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
          <li>✅ Can hold a 5–6 word sentence? You're likely in Zone 2.</li>
          <li>✅ Breathing is rhythmic and controlled, but noticeable.</li>
          <li>❌ Can't speak more than two or three words? You've drifted above Zone 2.</li>
          <li>❌ Could chat for ten minutes without effort? You're probably in Zone 1.</li>
        </ul>
        <p>
          The talk test isn't a replacement for a heart rate monitor, but it's a reliable real-world check while you're learning to feel your zones.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-headline-lg text-[24px] text-on-background">The Science: Why Zone 2 Is the Ultimate Base Builder</h2>
        <p>
          Most recreational athletes do the majority of their cardio in Zones 3 and 4 — what researchers call the &quot;grey zone.&quot; It's hard enough to feel like a workout, but not specific enough to drive the adaptations that actually matter. Zone 2 fixes this.
        </p>
        
        <h3 className="font-title-lg text-[20px] text-on-background mt-2">Mitochondrial density: the real goal</h3>
        <p>
          Your mitochondria are the power plants inside your muscle cells. Zone 2 is the primary training stimulus for growing more of them and making them more efficient. More mitochondria means:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
          <li><strong>Better fat oxidation</strong> — you burn fat as fuel at higher intensities, sparing glycogen for when you really need it.</li>
          <li><strong>Faster recovery</strong> — more efficient energy production means less metabolic waste.</li>
          <li><strong>Higher lactate clearance</strong> — your body gets better at recycling lactate before it accumulates, pushing your lactic acid threshold upward over time.</li>
        </ul>
        <p>
          Dr. Iñigo San Millán, director of performance at the University of Colorado Sports Medicine, has described Zone 2 as the zone where mitochondrial biogenesis is maximized. It's not hype — it's a well-replicated finding in exercise physiology research.
        </p>

        <h3 className="font-title-lg text-[20px] text-on-background mt-4">Fat vs. glycogen: why the fuel source matters</h3>
        <div className="overflow-x-auto mt-2">
          <table className="min-w-full border-collapse border border-outline-variant text-left">
            <thead>
              <tr className="bg-surface-container">
                <th className="border border-outline-variant p-2 font-semibold">Factor</th>
                <th className="border border-outline-variant p-2 font-semibold">Zone 2 (Fat Oxidation)</th>
                <th className="border border-outline-variant p-2 font-semibold">Zone 4–5 (Carbohydrate Oxidation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-outline-variant p-2"><strong>Primary fuel</strong></td>
                <td className="border border-outline-variant p-2">Free fatty acids (fat)</td>
                <td className="border border-outline-variant p-2">Muscle glycogen (carbohydrates)</td>
              </tr>
              <tr>
                <td className="border border-outline-variant p-2"><strong>Mitochondrial stimulus</strong></td>
                <td className="border border-outline-variant p-2">Very high</td>
                <td className="border border-outline-variant p-2">Low to moderate</td>
              </tr>
              <tr>
                <td className="border border-outline-variant p-2"><strong>Lactate production</strong></td>
                <td className="border border-outline-variant p-2">Minimal</td>
                <td className="border border-outline-variant p-2">High</td>
              </tr>
              <tr>
                <td className="border border-outline-variant p-2"><strong>Recovery time needed</strong></td>
                <td className="border border-outline-variant p-2">24 hours or less</td>
                <td className="border border-outline-variant p-2">48–72+ hours</td>
              </tr>
              <tr>
                <td className="border border-outline-variant p-2"><strong>Sustainable volume</strong></td>
                <td className="border border-outline-variant p-2">High (4–6+ hrs/week)</td>
                <td className="border border-outline-variant p-2">Low (1–2 hrs/week max)</td>
              </tr>
              <tr>
                <td className="border border-outline-variant p-2"><strong>Long-term aerobic base effect</strong></td>
                <td className="border border-outline-variant p-2">Strong and compounding</td>
                <td className="border border-outline-variant p-2">Minimal</td>
              </tr>
              <tr>
                <td className="border border-outline-variant p-2"><strong>Hormonal stress (cortisol)</strong></td>
                <td className="border border-outline-variant p-2">Low</td>
                <td className="border border-outline-variant p-2">High</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2">
          The practical takeaway: Zone 2 is cheap to recover from, allows high training volume, and directly builds the aerobic base that makes every other training zone more effective. You can do Zone 4 intervals all year — but without a solid aerobic base underneath, you're building a pyramid on sand.
        </p>
      </div>

      <div className="flex flex-col gap-4 bg-surface-container rounded-xl p-6 border border-outline-variant">
        <h2 className="font-headline-lg text-[24px] text-on-background">How to Calculate Your Zone 2 Heart Rate</h2>
        <p>Your Zone 2 range is typically <strong>60–70% of your maximum heart rate (MHR)</strong>. The challenge is accurately finding your MHR. Here are the two main methods.</p>

        <h3 className="font-title-lg text-[20px] text-on-background mt-2">Method 1: The Standard Formula (220 − Age)</h3>
        <p>This is the most widely used starting point.</p>
        <p><strong>Formula: Maximum Heart Rate = 220 − your age</strong></p>
        <p>Then multiply by 0.60 and 0.70 to get your Zone 2 range.</p>
        <p><strong>Example for a 35-year-old:</strong></p>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>Estimated MHR: 220 − 35 = <strong>185 BPM</strong></li>
          <li>Zone 2 lower bound: 185 × 0.60 = <strong>111 BPM</strong></li>
          <li>Zone 2 upper bound: 185 × 0.70 = <strong>130 BPM</strong></li>
          <li><strong>Zone 2 range: 111–130 BPM</strong></li>
        </ul>
        <p>This formula is simple, free, and works well as a first estimate. Its main weakness: it's a population average. Individual MHR can vary by ±10–20 BPM from the formula, so two 35-year-olds with different fitness histories may have meaningfully different actual MHRs.</p>

        <h3 className="font-title-lg text-[20px] text-on-background mt-4">Method 2: The Karvonen Formula (Heart Rate Reserve)</h3>
        <p>The Karvonen formula is more accurate because it accounts for your <strong>resting heart rate (RHR)</strong> — a direct marker of cardiovascular fitness. The fitter you are, the lower your resting heart rate, and this formula adjusts your zones accordingly.</p>
        <p><strong>Formula:</strong><br/>
        <span className="italic pl-4 block border-l-4 border-outline-variant text-on-surface-variant my-2">Target HR = ((MHR − RHR) × Training Intensity %) + RHR</span></p>
        
        <p><strong>Example for a 35-year-old with a resting HR of 58 BPM:</strong></p>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>MHR: 220 − 35 = 185 BPM</li>
          <li>Heart Rate Reserve (HRR): 185 − 58 = <strong>127 BPM</strong></li>
          <li>Zone 2 lower (60%): (127 × 0.60) + 58 = <strong>134 BPM</strong></li>
          <li>Zone 2 upper (70%): (127 × 0.70) + 58 = <strong>147 BPM</strong></li>
          <li><strong>Zone 2 range: 134–147 BPM</strong></li>
        </ul>
        <p>Notice how the Karvonen result is higher than the standard formula result. That's correct for a fit individual — a low resting heart rate is a sign of a strong cardiovascular system, and the zones should reflect that.</p>

        <p><strong>Which formula should you use?</strong></p>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>Use <strong>220 − Age</strong> if you're just starting out and don't know your resting HR well.</li>
          <li>Use <strong>Karvonen</strong> if you track your resting HR consistently and want more accurate zone boundaries.</li>
          <li>Use a <strong>lab lactate test</strong> if you compete seriously — it's the gold standard for zone calibration.</li>
        </ul>

        <h3 className="font-title-lg text-[20px] text-on-background mt-4">Why 60–70% is the sweet spot</h3>
        <p>Below 60% MHR, you're in active recovery territory — useful, but not strongly driving aerobic adaptation. Above 70%, your body starts shifting toward carbohydrate as the dominant fuel source, lactate begins to accumulate, and recovery demands increase. The 60–70% band is precisely where fat oxidation peaks and mitochondrial stimulus is highest.</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-headline-lg text-[24px] text-on-background">The 5 Heart Rate Zones Explained</h2>
        <p>Training zones give structure to your effort. Here's how each one functions, and how much time you should realistically spend in each.</p>

        <div className="flex flex-col gap-4 mt-2">
          <div>
            <h3 className="font-bold text-lg">Zone 1 — Active Recovery (50–60% MHR)</h3>
            <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
              <li><strong>Effort:</strong> Very easy. You could hold a full conversation or listen to a podcast without effort.</li>
              <li><strong>Fuel source:</strong> Fat</li>
              <li><strong>Purpose:</strong> Recovery, blood flow, loosening up after hard sessions.</li>
              <li><strong>When to use it:</strong> Easy walks, cool-downs, rest day movement.</li>
              <li><strong>Weekly volume:</strong> As much as you want — it has no meaningful recovery cost.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg">Zone 2 — Aerobic Base (60–70% MHR)</h3>
            <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
              <li><strong>Effort:</strong> Comfortable but purposeful. Conversation is possible in short sentences.</li>
              <li><strong>Fuel source:</strong> Primarily fat, with minimal carbohydrate contribution.</li>
              <li><strong>Purpose:</strong> Building mitochondrial density, improving fat oxidation, developing your aerobic base. This is the engine room.</li>
              <li><strong>When to use it:</strong> Long steady-state cardio sessions — runs, rides, rows, swims.</li>
              <li><strong>Weekly volume:</strong> 3–5 sessions per week, 45–90 minutes each. This is where elite endurance athletes spend 80% of their total training time.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Zone 3 — Tempo / Aerobic (70–80% MHR)</h3>
            <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
              <li><strong>Effort:</strong> Moderately hard. You can speak, but prefer not to.</li>
              <li><strong>Fuel source:</strong> Mixed (fat and carbohydrate)</li>
              <li><strong>Purpose:</strong> Often called the &quot;grey zone&quot; in elite training — produces fatigue without delivering the clean adaptations of Zone 2 or Zone 4+. Recreational runners often spend too much time here.</li>
              <li><strong>When to use it:</strong> Tempo runs, moderate group rides.</li>
              <li><strong>Weekly volume:</strong> Use sparingly — 1–2 sessions per week at most.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Zone 4 — Lactate Threshold (80–90% MHR)</h3>
            <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
              <li><strong>Effort:</strong> Hard. Speaking is reduced to clipped phrases.</li>
              <li><strong>Fuel source:</strong> Predominantly carbohydrates</li>
              <li><strong>Purpose:</strong> Raises your lactate threshold — the pace at which lactate begins to accumulate faster than your body can clear it. Critical for race-pace performance.</li>
              <li><strong>When to use it:</strong> Threshold intervals, hard tempo blocks, race-pace work.</li>
              <li><strong>Weekly volume:</strong> 1–2 sessions per week. Recovery demands are high — don't stack these back to back.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Zone 5 — VO2 Max (90–100% MHR)</h3>
            <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
              <li><strong>Effort:</strong> Maximal. Speaking is impossible for more than a word or two.</li>
              <li><strong>Fuel source:</strong> Almost entirely carbohydrates</li>
              <li><strong>Purpose:</strong> Raises your VO2 Max — the ceiling of your aerobic capacity. Think of it as lifting the roof on what's possible.</li>
              <li><strong>When to use it:</strong> Short, brutal intervals (30 seconds to 4 minutes) with full recovery between sets.</li>
              <li><strong>Weekly volume:</strong> 1 session per week maximum for most athletes. Takes 48–72 hours to recover from properly.</li>
            </ul>
          </div>
        </div>

        <h3 className="font-title-lg text-[20px] text-on-background mt-4">The 80/20 Rule for hybrid athletes and endurance runners</h3>
        <p>Research from Dr. Stephen Seiler consistently shows that elite endurance athletes — from marathon runners to cyclists to triathletes — train approximately <strong>80% of their volume in Zones 1–2 and only 20% in Zones 3–5</strong>. This is called <strong>polarized training</strong>.</p>
        <p>The mistake most recreational athletes make is flipping this ratio — spending the majority of their time in Zone 3, the grey zone that burns energy without delivering clean adaptations. If you're a hybrid athlete balancing strength training with cardio, protecting your Zone 2 time becomes even more important, because heavy lifting already provides the high-intensity stimulus your body needs.</p>
        <p><strong>A practical weekly structure for a 4-session cardio week:</strong></p>
        <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
          <li>Session 1: 60-min Zone 2 run or ride</li>
          <li>Session 2: 45-min Zone 2 (easy)</li>
          <li>Session 3: 60-min Zone 2 long session</li>
          <li>Session 4: Zone 4–5 intervals (20–30 min of actual work)</li>
        </ul>
      </div>
    </article>
  );
}
