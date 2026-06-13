import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join FitCalculato — Get Notified About New Tools",
  description:
    "Sign up to be notified when new fitness and health calculators launch on FitCalculato. Free, no spam.",
  openGraph: {
    title: "Join FitCalculato — Get Notified About New Tools",
    description:
      "Sign up to be notified when new fitness and health calculators launch on FitCalculato. Free, no spam.",
    url: "https://fitcalculato.com/join",
    siteName: "FitCalculato",
    type: "website",
  },
};

const comingSoon = [
  "BMI Calculator",
  "Body Fat Calculator",
  "TDEE Calculator",
  "Macro Calculator",
  "1RM Calculator",
  "Calorie Deficit Calculator",
];

export default function JoinPage() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-4">
          Stay in the Loop
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
          We&apos;re building new calculators every month. Get notified when they
          launch — no spam, unsubscribe anytime.
        </p>

        {/* Email Signup Form */}
        <form
          action="#"
          className="mb-12 flex flex-col sm:flex-row items-center gap-3 mx-auto max-w-lg"
        >
          <label htmlFor="email-input" className="sr-only">
            Email address
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="you@example.com"
            required
            className="w-full flex-1 rounded-xl border border-outline-variant bg-surface-container-lowest px-5 py-3.5 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          />
          <button
            type="submit"
            className="w-full sm:w-auto rounded-xl bg-primary px-8 py-3.5 font-label-md text-label-md text-on-primary hover:opacity-90 active:opacity-80 transition-opacity duration-200 whitespace-nowrap"
          >
            Notify Me
          </button>
        </form>

        {/* Coming Soon Section */}
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-8">
          <h2 className="font-headline-md text-headline-md text-on-background mb-2">
            Coming Soon
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            New science-backed calculators in development:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {comingSoon.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center rounded-full border border-outline-variant bg-surface-container px-4 py-2 font-label-md text-label-md text-on-surface-variant"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Privacy Note */}
        <p className="mt-8 font-body-md text-body-md text-on-surface-variant/70">
          We respect your inbox. You&apos;ll only receive emails when a new
          calculator launches — typically once or twice a month. Unsubscribe
          with one click, anytime.
        </p>
      </div>
    </main>
  );
}
