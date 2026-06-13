import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs — Frequently Asked Questions | FitCalculato",
  description:
    "Answers to common questions about FitCalculato's fitness calculators, methodology, accuracy, and data privacy.",
  openGraph: {
    title: "FAQs — Frequently Asked Questions | FitCalculato",
    description:
      "Answers to common questions about FitCalculato's fitness calculators, methodology, accuracy, and data privacy.",
    url: "https://fitcalculato.com/faqs",
    siteName: "FitCalculato",
    type: "website",
  },
};

const faqs = [
  {
    question: "How accurate are the calculators?",
    answer: `Our calculators are built on peer-reviewed, published research formulas that are widely used in exercise science and sports medicine. However, it's important to understand that all estimation formulas are based on population averages — your actual values may differ due to genetics, fitness level, medications, and other individual factors. For the most precise measurements (such as VO2 max), clinical laboratory testing remains the gold standard. Our tools provide reliable estimates for general fitness guidance.`,
  },
  {
    question: "What formula do you use for Zone 2 heart rate?",
    answer: `We offer three formula options for calculating Zone 2 heart rate. The default is the Karvonen method, which uses heart rate reserve (the difference between your max heart rate and resting heart rate) to calculate training zones — this is considered the most individualized approach. We also support the Tanaka formula (HRmax = 208 − 0.7 × age), which is the most evidence-informed max heart rate estimate, and the traditional 220-minus-age formula for those who prefer it. You can compare results across all three methods.`,
  },
  {
    question: "Is my data stored or shared?",
    answer: `No. All calculations run entirely in your browser using client-side JavaScript. The numbers you enter — your age, heart rate, weight, or any other input — are never sent to our servers, never stored in any database, and never shared with any third party. When you close the page, your data is gone. We designed it this way on purpose: your health data is yours alone.`,
  },
  {
    question: "Do I need to create an account?",
    answer: `No. All tools on FitCalculato are completely free and require no signup, login, or account creation. Just visit a calculator, enter your values, and get your results instantly. No email required, no paywalls, no premium tiers.`,
  },
  {
    question: "What is Zone 2 heart rate training?",
    answer: `Zone 2 training is aerobic exercise performed at approximately 60–70% of your maximum heart rate. At this intensity, your body primarily uses fat as fuel and builds mitochondrial density — the powerhouses of your cells. Zone 2 is often described as a "conversational pace" where you can speak in full sentences but wouldn't want to sing. Regular Zone 2 training improves cardiovascular base fitness, enhances fat metabolism, increases endurance, and has been linked to longevity benefits. It's a cornerstone of endurance training used by elite athletes and recommended by exercise physiologists.`,
  },
  {
    question: "What is VO2 max?",
    answer: `VO2 max (maximal oxygen uptake) is the maximum rate at which your body can consume oxygen during intense exercise. It's measured in milliliters of oxygen per kilogram of body weight per minute (mL/kg/min) and is widely considered the gold standard metric for cardiovascular fitness and aerobic capacity. A higher VO2 max indicates a more efficient heart, lungs, and muscles. Research has shown that VO2 max is one of the strongest predictors of all-cause mortality and long-term health outcomes.`,
  },
  {
    question: "Can I use these tools if I have a medical condition?",
    answer: `If you have a medical condition — particularly a cardiovascular condition, are taking heart rate-altering medications (like beta-blockers), or have any health concern that may affect exercise — you should consult your doctor before using these calculators to guide your training. Our tools are for informational purposes only and are not a substitute for professional medical advice.`,
    hasDisclaimerLink: true,
  },
  {
    question: "How often should I recalculate my zones?",
    answer: `We recommend recalculating your heart rate zones every 4–6 weeks, or whenever you experience significant changes in your fitness level. As your cardiovascular fitness improves, your resting heart rate may decrease, which directly affects your training zones (especially when using the Karvonen method). Major life changes — such as starting a new training program, recovering from illness, or significant weight changes — are also good triggers to recalculate.`,
  },
];

export default function FAQsPage() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <h1 className="font-headline-xl text-headline-xl text-on-background mb-2">
        Frequently Asked Questions
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
        Common questions about our calculators, methodology, and privacy.
      </p>

      <div className="divide-y divide-outline-variant rounded-xl border border-outline-variant overflow-hidden">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-surface-container-lowest"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-headline-md text-lg text-on-surface hover:bg-surface-container transition-colors duration-200 [&::-webkit-details-marker]:hidden list-none">
              <span>{faq.question}</span>
              <svg
                className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform duration-200 group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="px-6 pb-6 pt-0 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>{faq.answer}</p>
              {faq.hasDisclaimerLink && (
                <p className="mt-3">
                  <Link
                    href="/disclaimer"
                    className="font-label-md text-label-md text-primary hover:underline"
                  >
                    Read our full Medical Disclaimer →
                  </Link>
                </p>
              )}
            </div>
          </details>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-xl bg-surface-container p-8 text-center">
        <p className="font-headline-md text-headline-md text-on-surface mb-2">
          Still have questions?
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">
          We&apos;re happy to help. Reach out anytime.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-primary px-8 py-3 font-label-md text-label-md text-on-primary hover:opacity-90 transition-opacity duration-200"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
