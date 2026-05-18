export default function EducationalContent() {
  return (
    <article className="flex flex-col gap-8 text-on-surface-variant font-body-md text-body-md mt-4">
      <div className="flex flex-col gap-4">
        <h2 className="font-headline-lg text-headline-lg text-on-background">What is Zone 2 Heart Rate Training?</h2>
        <p>
          Zone 2 training refers to exercising at a steady, moderate intensity where your body primarily uses fat for fuel rather than carbohydrates. Physiologically, this occurs below your first ventilatory threshold (VT1). For most athletes and individuals, this equates to roughly 60% to 75% of their maximum heart rate.
        </p>
        <p>
          Unlike high-intensity interval training (HIIT), which relies heavily on the anaerobic energy system, Zone 2 builds the aerobic engine. It stimulates the creation of new mitochondria (mitochondrial biogenesis) and improves the efficiency of existing ones, allowing you to sustain effort longer and recover faster.
        </p>
      </div>
      <div className="flex flex-col gap-4 bg-surface-container rounded-xl p-6 border border-outline-variant">
        <h2 className="font-headline-lg text-[24px] text-on-background">How to Calculate Your Zone 2 Range</h2>
        <p>
          While the standard &quot;220 minus your age&quot; formula provides a rough estimate of maximum heart rate, it is often inaccurate. Our calculator utilizes more advanced methodologies to provide a precise range:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
          <li><strong>Percentage of Max HR:</strong> The traditional approach, calculated as 60-75% of a precisely estimated max HR.</li>
          <li><strong>The Karvonen Formula (Heart Rate Reserve):</strong> This method factors in your resting heart rate (RHR), offering a highly personalized zone. It is calculated as: <em>((Max HR - Resting HR) x Target %) + Resting HR</em>.</li>
          <li><strong>Environmental Adjustments:</strong> Heat and high humidity increase cardiovascular drift, meaning your heart rate is naturally higher at the same effort level. Our tool adjusts for this to keep you in the correct physiological state.</li>
        </ul>
      </div>
    </article>
  );
}
