import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs - Frequently Asked Questions | FitCalculato",
  description: "Answers to common questions about FitCalculato fitness calculators, methodology, accuracy, and data privacy.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "FAQs - Frequently Asked Questions | FitCalculato",
    description: "Answers to common questions about FitCalculato fitness calculators, methodology, accuracy, and data privacy.",
    url: "https://fitcalculato.com/faqs",
    siteName: "Fitness Calculator",
    type: "website",
  },
};

const faqs = [
  {
    question: "How accurate are the calculators?",
    answer: "Our calculators are built on peer-reviewed, published research formulas widely used in exercise science and sports medicine. All estimation formulas are based on population averages — your actual values may differ due to genetics, fitness level, medications, and other individual factors. Our tools provide reliable estimates for general fitness guidance.",
  },
  {
    question: "What formula do you use for Zone 2 heart rate?",
    answer: "We offer three formula options. The default is the Karvonen method (heart rate reserve based) — the most individualized approach. We also support the Tanaka formula (HRmax = 208 - 0.7 x age), and the traditional 220-minus-age formula.",
  },
  {
    question: "What is my Zone 2 heart rate?",
    answer: "It is roughly 60% to 70% of your estimated maximum heart rate. Using the Tanaka formula, subtract 0.7 times your age from 208, then multiply that by 0.60 and 0.70 to get your range.",
  },
  {
    question: "How do I calculate Zone 2 heart rate?",
    answer: "Calculate your max heart rate with 208 - (0.7 x age), then take 60% and 70% of that number. For a more personalized target, use the Karvonen formula, which includes your resting heart rate. Our Zone 2 Heart Rate Calculator does this for you instantly.",
  },
  {
    question: "How do I find my Zone 2 heart rate without a calculator?",
    answer: "Use the talk test. Exercise at a pace where you can speak in full sentences comfortably without gasping for breath. That intensity lines up with Zone 2 for most healthy adults.",
  },
  {
    question: "What should Zone 2 feel like?",
    answer: "Comfortably easy - almost frustratingly so at first. You should be able to hold a conversation, breathe primarily through your nose, and finish the session feeling like you could have done more.",
  },
  {
    question: "How long should I train in Zone 2?",
    answer: "Most coaches recommend 45- to 90-minute sessions three to five times per week. Shorter sessions still help, but consistency over months drives the biggest gains.",
  },
  {
    question: "Is the Zone 2 range the same for running and cycling?",
    answer: "The heart rate range is identical because it is based on your physiology, not your sport. What differs is the pace or power output needed to hit that heart rate. Cycling typically produces a lower heart rate than running at a similar perceived effort.",
  },
  {
    question: "Is a Zone 2 heart rate calculator accurate for everyone?",
    answer: "It is a strong starting estimate for most healthy adults, with a typical margin of error of about 10 beats per minute. People on heart rate-affecting medication (like beta blockers) or with diagnosed heart conditions should consult a physician.",
  },
  {
    question: "What is VO2 max?",
    answer: "VO2 max (maximal oxygen uptake) is the maximum rate at which your body can consume oxygen during intense exercise. It is measured in mL/kg/min and is one of the strongest predictors of long-term health and longevity outcomes.",
  },
  {
    question: "Is my data stored or shared?",
    answer: "No. All calculations run entirely in your browser. The numbers you enter are never sent to our servers, stored in any database, or shared with any third party. When you close the page, your data is gone.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No. All tools on FitCalculato are completely free and require no signup, login, or account creation. Just visit a calculator, enter your values, and get your results instantly.",
  },
  {
    question: "Can I use these tools if I have a medical condition?",
    answer: "If you have a cardiovascular condition or take heart rate-altering medications (like beta-blockers), consult your doctor before using these calculators to guide your training. Our tools are for informational purposes only.",
    hasDisclaimerLink: true,
  },
  {
    question: "How often should I recalculate my zones?",
    answer: "We recommend recalculating every 4-6 weeks, or whenever you experience significant changes in fitness level. As cardiovascular fitness improves, resting heart rate may decrease - directly affecting your Karvonen-based zones.",
  },
];

export default function FAQsPage() {
  return (
    <main className="grow w-full">

      {/* ─── Hero ─── */}
      <section className="w-full bg-base-200 border-b border-base-300 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-base-content">
            Frequently Asked Questions
          </h1>
          <p className="text-base md:text-lg text-base-content/70 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our calculators, the science behind them, and your data privacy.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {["Zone 2", "Formulas", "Privacy", "Accuracy", "VO2 Max"].map((tag) => (
              <span key={tag} className="badge badge-outline badge-md font-semibold text-base-content/60">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Accordion ─── */}
      <section className="max-w-4xl mx-auto px-4 py-14 space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-base-100 border border-base-300 rounded-2xl hover:border-primary/40 hover:shadow-sm transition-all duration-200"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden list-none">
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-7 h-7 shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-extrabold">
                  Q
                </span>
                <span className="text-sm md:text-base font-bold text-base-content leading-snug">
                  {faq.question}
                </span>
              </div>
              <svg
                className="h-5 w-5 shrink-0 text-base-content/40 transition-transform duration-300 group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 pt-2 border-t border-base-200">
              <p className="text-sm md:text-base text-base-content/75 leading-relaxed mt-2">
                {faq.answer}
              </p>
              {faq.hasDisclaimerLink && (
                <p className="mt-3">
                  <Link href="/disclaimer" className="text-sm font-semibold text-primary hover:underline underline-offset-2">
                    Read our full Medical Disclaimer -&gt;
                  </Link>
                </p>
              )}
            </div>
          </details>
        ))}
      </section>

      {/* ─── Stats Strip ─── */}
      <section className="w-full bg-base-200 border-y border-base-300 py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          {[
            { value: "14", label: "Questions Answered" },
            { value: "500+", label: "Peer-Reviewed Citations" },
            { value: "0", label: "Data Points Stored" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-primary">{stat.value}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-base-content/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="bg-base-200 border border-base-300 rounded-3xl p-8 md:p-12 text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-3xl">
            💬
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-base-content">
            Still have questions?
          </h2>
          <p className="text-base-content/70 max-w-md mx-auto">
            We&apos;re happy to help. Reach out anytime and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-2">
            <Link href="/contact" className="btn btn-primary rounded-xl px-8 font-bold">
              Contact Us
            </Link>
            <Link href="/calculators/zone-2-heart-rate-calculator" className="btn btn-outline rounded-xl px-8 font-bold">
              Try the Calculator
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
