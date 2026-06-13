import { MdExpandMore } from "react-icons/md";

export default function FAQSection() {
  return (
    <section className="flex flex-col gap-6 mt-4 text-justify">
      <h2 className="font-headline-lg text-headline-lg text-on-background">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-4">
        
        <details className="group bg-surface-container-lowest border border-outline-variant rounded-lg [&_summary::-webkit-details-marker]:hidden shadow-sm">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-on-surface font-label-md text-label-md font-semibold text-left">
            <span>How many days a week should I do Zone 2 cardio?</span>
            <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-outline">
              <MdExpandMore className="text-xl" />
            </span>
          </summary>
          <div className="px-4 pb-4 font-body-md text-body-md text-on-surface-variant border-t border-outline-variant pt-4 mt-2">
            <strong>Most people benefit from 3 to 5 Zone 2 sessions per week, totaling 3 to 6 hours of aerobic training.</strong> Research suggests that meaningful mitochondrial adaptations require at least 45 continuous minutes per session. If you're new to structured training, start with 2–3 sessions of 30–45 minutes and build from there. The most common mistake is doing too little Zone 2 and wondering why aerobic fitness isn't improving.
          </div>
        </details>
        
        <details className="group bg-surface-container-lowest border border-outline-variant rounded-lg [&_summary::-webkit-details-marker]:hidden shadow-sm">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-on-surface font-label-md text-label-md font-semibold text-left">
            <span>Can I walk to get into Zone 2?</span>
            <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-outline">
              <MdExpandMore className="text-xl" />
            </span>
          </summary>
          <div className="px-4 pb-4 font-body-md text-body-md text-on-surface-variant border-t border-outline-variant pt-4 mt-2">
            <strong>Yes — for many beginners and deconditioned individuals, brisk walking is entirely sufficient to reach Zone 2 heart rate levels.</strong> There is nothing wrong with this. Your aerobic system doesn't know or care whether you're walking or running; it responds to heart rate stimulus. If a 4.5 mph incline walk puts you at 120–130 BPM, that's valid Zone 2 training. As your fitness improves, you'll need progressively more effort to stay in the zone — which is the whole point.
          </div>
        </details>

        <details className="group bg-surface-container-lowest border border-outline-variant rounded-lg [&_summary::-webkit-details-marker]:hidden shadow-sm">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-on-surface font-label-md text-label-md font-semibold text-left">
            <span>Why is my heart rate so high when I try to run slowly?</span>
            <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-outline">
              <MdExpandMore className="text-xl" />
            </span>
          </summary>
          <div className="px-4 pb-4 font-body-md text-body-md text-on-surface-variant border-t border-outline-variant pt-4 mt-2">
            <p>This is one of the most common frustrations for beginners, and it's completely normal. There are two main explanations:</p>
            <p className="mt-2"><strong>1. Low aerobic base (the most common cause).</strong> If you haven't been doing consistent aerobic training, your cardiovascular system isn't yet efficient at delivering oxygen at low intensities. Your heart compensates by beating faster. The fix is patience and consistency — run slower, or alternate running and walking to stay in Zone 2, and over 8–12 weeks your aerobic efficiency will improve.</p>
            <p className="mt-2"><strong>2. Cardiac drift.</strong> In longer sessions, especially in heat, your heart rate gradually rises even if your pace stays the same. This happens because of dehydration and a shift in blood plasma volume. Stay hydrated and slow down slightly as sessions progress.</p>
            <p className="mt-2">The key insight: <strong>don't chase pace, chase heart rate</strong>. If you need to slow to a walk to stay in Zone 2, do it. Elite runners spend years building the aerobic base that allows them to run fast at low heart rates. You're building the same base — it just takes time.</p>
          </div>
        </details>

      </div>

      <div className="mt-8 p-4 bg-surface-variant/30 rounded-lg border border-outline-variant text-sm text-on-surface-variant italic font-bold">
        All calculations on this page use validated formulas from published exercise physiology research. Always consult a healthcare professional before starting a new training program, particularly if you have a known cardiovascular condition.
      </div>
    </section>
  );
}
