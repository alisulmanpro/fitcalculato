import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About FitCalculato — Science-Backed Fitness Calculators",
  description:
    "Learn about FitCalculato's mission to provide free, science-backed fitness and health calculators built on current research for real-world use.",
  openGraph: {
    title: "About FitCalculato — Science-Backed Fitness Calculators",
    description:
      "Learn about FitCalculato's mission to provide free, science-backed fitness and health calculators built on current research for real-world use.",
    url: "https://fitcalculato.com/about",
    siteName: "FitCalculato",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <h1 className="font-headline-xl text-headline-xl text-on-background mb-6">
        About FitCalculato
      </h1>

      {/* Why We Built This */}
      <section className="mb-10">
        <h2 className="font-headline-md text-headline-md text-on-background mb-4">
          Why We Built This
        </h2>
        <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed space-y-4">
          <p>
            FitCalculato was built out of frustration with outdated, ad-cluttered
            health calculators that hadn&apos;t been updated in years. We noticed
            that most fitness calculator sites on the web were built on
            decade-old code, buried under intrusive advertising, and worst of
            all — many used outdated formulas that no longer reflected current
            sports science research.
          </p>
          <p>We wanted something better.</p>
          <p>
            Every tool on FitCalculato is built on peer-reviewed research and
            validated methodologies like the Tanaka formula for max heart rate,
            the Karvonen method for heart rate reserve, and the
            Uth–Sørensen–Overgaard–Pedersen estimation for VO2 max. Our goal is
            simple: give you accurate, free tools that are fast, private, and
            actually useful — whether you&apos;re a beginner starting your
            fitness journey or an endurance athlete fine-tuning your training
            zones.
          </p>
          <p>No accounts required. No data stored. Just results.</p>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="mb-10">
        <h2 className="font-headline-md text-headline-md text-on-background mb-4">
          Our Methodology
        </h2>
        <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed space-y-4">
          <p>
            Every calculator on FitCalculato is grounded in published,
            peer-reviewed research. We don&apos;t guess — we cite. Each tool
            references specific studies, validated formulas, and established
            methodologies from the sports science and exercise physiology
            literature.
          </p>
          <p>
            Where multiple formulas exist for the same metric (such as maximum
            heart rate), we present all major options and clearly explain the
            differences. We default to the most evidence-informed formula
            available, while giving you the flexibility to choose the method that
            best fits your situation.
          </p>
          <p>
            Our approach is transparent: you can always see which formula is
            being used, how it works, and where it comes from. Science-backed
            tools should be understandable, not black boxes.
          </p>
        </div>
      </section>

      {/* What You Can Calculate */}
      <section className="mb-10">
        <h2 className="font-headline-md text-headline-md text-on-background mb-4">
          What You Can Calculate
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          FitCalculato currently offers the following free tools, with more on
          the way:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/zone-two-heart-rate-calculator"
            className="block rounded-xl border border-outline-variant bg-surface-container-lowest p-6 hover:border-primary transition-colors duration-200"
          >
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              Zone 2 Heart Rate Calculator
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Calculate your ideal Zone 2 heart rate range using Karvonen,
              Tanaka, or traditional formulas.
            </p>
          </Link>
          <Link
            href="/vo2-max-calculator"
            className="block rounded-xl border border-outline-variant bg-surface-container-lowest p-6 hover:border-primary transition-colors duration-200"
          >
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              VO2 Max &amp; Fitness Age Calculator
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Estimate your VO2 max and discover your true biological fitness
              age based on the Uth–Sørensen–Overgaard–Pedersen formula.
            </p>
          </Link>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mt-6">
          More calculators — including BMI, Body Fat, TDEE, and Macro
          calculators — are coming soon.{" "}
          <Link href="/join" className="text-primary hover:underline">
            Get notified when they launch →
          </Link>
        </p>
      </section>

      {/* CTA */}
      <div className="rounded-xl bg-surface-container p-8 text-center">
        <p className="font-headline-md text-headline-md text-on-surface mb-4">
          Ready to get started?
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-primary px-8 py-3 font-label-md text-label-md text-on-primary hover:opacity-90 transition-opacity duration-200"
        >
          Explore All Calculators
        </Link>
      </div>
    </main>
  );
}
