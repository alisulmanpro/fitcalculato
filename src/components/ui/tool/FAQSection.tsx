import { MdExpandMore } from "react-icons/md";

export default function FAQSection() {
  return (
    <section className="flex flex-col gap-6 mt-4">
      <h2 className="font-headline-lg text-headline-lg text-on-background">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-4">
        <details className="group bg-surface-container-lowest border border-outline-variant rounded-lg [&_summary::-webkit-details-marker]:hidden shadow-sm">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-on-surface font-label-md text-label-md font-semibold">
            <span>How long should a Zone 2 workout be?</span>
            <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-outline">
              <MdExpandMore className="text-xl" />
            </span>
          </summary>
          <div className="px-4 pb-4 font-body-md text-body-md text-on-surface-variant border-t border-outline-variant pt-4 mt-2">
            To truly stimulate mitochondrial adaptation, a dedicated Zone 2 session should ideally last between 45 to 90 minutes. Elite athletes may spend hours in this zone, but for general fitness, 45 minutes twice a week provides significant benefits.
          </div>
        </details>
        
        <details className="group bg-surface-container-lowest border border-outline-variant rounded-lg [&_summary::-webkit-details-marker]:hidden shadow-sm">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-on-surface font-label-md text-label-md font-semibold">
            <span>Why is it so hard to stay in Zone 2?</span>
            <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-outline">
              <MdExpandMore className="text-xl" />
            </span>
          </summary>
          <div className="px-4 pb-4 font-body-md text-body-md text-on-surface-variant border-t border-outline-variant pt-4 mt-2">
            Most beginners find Zone 2 frustratingly slow, often requiring them to alternate between jogging and walking. This indicates an underdeveloped aerobic base (often called &quot;Aerobic Deficiency Syndrome&quot;). Over time, consistent training in this zone will allow you to run significantly faster while maintaining the same low heart rate.
          </div>
        </details>
      </div>
    </section>
  );
}
