import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Disclaimer | FitCalculato",
  description:
    "Important medical disclaimer for FitCalculato's fitness and health calculators. Our tools are for informational purposes only.",
  openGraph: {
    title: "Medical Disclaimer | FitCalculato",
    description:
      "Important medical disclaimer for FitCalculato's fitness and health calculators. Our tools are for informational purposes only.",
    url: "https://fitcalculato.com/disclaimer",
    siteName: "FitCalculato",
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <h1 className="font-headline-xl text-headline-xl text-on-background mb-2">
        Medical Disclaimer
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8">
        Last reviewed: June 10, 2026
      </p>

      <div className="space-y-10 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        {/* Primary Disclaimer */}
        <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-8">
          <p className="font-headline-md text-headline-md text-on-surface mb-4">
            For Informational and Educational Purposes Only
          </p>
          <p>
            The content, calculators, and tools provided on FitCalculato
            (including all pages at{" "}
            <Link
              href="https://fitcalculato.com"
              className="text-primary hover:underline"
            >
              fitcalculato.com
            </Link>
            ) are intended for <strong className="text-on-surface">informational and educational purposes only</strong>. They
            do not constitute medical advice, diagnosis, or treatment
            recommendations.
          </p>
        </section>

        {/* Not a Substitute */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Not a Substitute for Professional Medical Advice
          </h2>
          <p className="mb-4">
            The results produced by our calculators should{" "}
            <strong className="text-on-surface">
              never be used as a substitute for professional medical advice,
              diagnosis, or treatment
            </strong>
            . Always seek the advice of your physician, cardiologist, or other
            qualified healthcare provider with any questions you may have
            regarding a medical condition, exercise program, or health goal.
          </p>
          <p>
            Never disregard professional medical advice or delay seeking it
            because of something you read or calculated on this website.
          </p>
        </section>

        {/* Consult Healthcare Professionals */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Consult Your Healthcare Professional
          </h2>
          <p className="mb-4">
            Before beginning any exercise program, making changes to your
            training regimen, or acting on the results of any calculator on this
            site, you should consult with a qualified healthcare professional.
            This is especially important if you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Have a known heart condition or cardiovascular disease</li>
            <li>Are taking medication that affects heart rate (e.g., beta-blockers)</li>
            <li>Have been diagnosed with hypertension or diabetes</li>
            <li>Are pregnant or postpartum</li>
            <li>Have a musculoskeletal injury or chronic pain condition</li>
            <li>Are over 40 and beginning a new exercise program</li>
            <li>Have any other medical condition that may affect physical activity</li>
          </ul>
        </section>

        {/* Limitations of Estimation Formulas */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Limitations of Estimation Formulas
          </h2>
          <p className="mb-4">
            The formulas used in our calculators are based on{" "}
            <strong className="text-on-surface">
              population averages derived from published research studies
            </strong>
            . While these formulas are widely accepted in exercise science, they
            have inherent limitations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-on-surface">Individual variation:</strong>{" "}
              Results are estimates. Your actual values may differ significantly
              due to genetics, fitness level, health status, and other individual
              factors.
            </li>
            <li>
              <strong className="text-on-surface">Study populations:</strong>{" "}
              Many formulas were developed using specific populations (e.g.,
              healthy adults of certain age ranges) and may be less accurate for
              individuals outside those groups.
            </li>
            <li>
              <strong className="text-on-surface">Not diagnostic:</strong> No
              online calculator can replace clinical testing. For precise
              metrics like VO2 max, laboratory-based testing (e.g., a graded
              exercise test) is the gold standard.
            </li>
            <li>
              <strong className="text-on-surface">Medication effects:</strong>{" "}
              Certain medications, particularly beta-blockers and
              calcium-channel blockers, can significantly alter heart rate
              responses and make estimation formulas unreliable.
            </li>
          </ul>
        </section>

        {/* Research Sources */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Our Sources
          </h2>
          <p className="mb-4">
            The calculators on FitCalculato are based on published,
            peer-reviewed research, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-on-surface">
                Tanaka, Monahan &amp; Seals (2001):
              </strong>{" "}
              &quot;Age-predicted maximal heart rate revisited&quot; — the
              formula HRmax = 208 − (0.7 × age).
            </li>
            <li>
              <strong className="text-on-surface">Karvonen method:</strong> Heart
              rate reserve calculation for training zone estimation.
            </li>
            <li>
              <strong className="text-on-surface">
                Uth–Sørensen–Overgaard–Pedersen (2004):
              </strong>{" "}
              Estimation of VO2 max from resting and maximal heart rate.
            </li>
            <li>
              <strong className="text-on-surface">Cooper Institute:</strong>{" "}
              Fitness classification standards and normative data for
              cardiovascular fitness.
            </li>
          </ul>
          <p className="mt-4">
            While we strive to use the most current and accurate formulas
            available, science evolves. We regularly review our tools against
            the latest literature and update them when appropriate.
          </p>
        </section>

        {/* Emergency */}
        <section className="rounded-xl border-2 border-error bg-error-container/20 p-6 md:p-8">
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Medical Emergency
          </h2>
          <p className="mb-4">
            If you are experiencing a medical emergency — including chest pain,
            difficulty breathing, severe dizziness, or loss of consciousness —{" "}
            <strong className="text-on-surface">
              call 911 (or your local emergency number) immediately
            </strong>
            .
          </p>
          <p>
            Do not rely on any website, calculator, or online resource during a
            medical emergency. Seek immediate, professional emergency care.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Limitation of Liability
          </h2>
          <p>
            FitCalculato, its creators, contributors, and affiliates shall not
            be held liable for any injury, harm, loss, or damage arising from
            the use or misuse of the information, tools, or calculators
            provided on this website. By using our tools, you acknowledge that
            you do so at your own risk and assume full responsibility for any
            actions taken based on the results.
          </p>
        </section>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/terms"
            className="font-label-md text-label-md text-primary hover:underline"
          >
            Terms of Service →
          </Link>
          <Link
            href="/privacy"
            className="font-label-md text-label-md text-primary hover:underline"
          >
            Privacy Policy →
          </Link>
          <Link
            href="/contact"
            className="font-label-md text-label-md text-primary hover:underline"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </main>
  );
}
