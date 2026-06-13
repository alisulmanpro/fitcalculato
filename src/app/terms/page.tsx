import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | FitCalculato",
  description:
    "Terms of service for using FitCalculato's free fitness and health calculators.",
  openGraph: {
    title: "Terms of Service | FitCalculato",
    description:
      "Terms of service for using FitCalculato's free fitness and health calculators.",
    url: "https://fitcalculato.com/terms",
    siteName: "FitCalculato",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <h1 className="font-headline-xl text-headline-xl text-on-background mb-2">
        Terms of Service
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8">
        Effective date: June 10, 2026
      </p>

      <div className="space-y-10 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        {/* Acceptance of Terms */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using FitCalculato (
            <Link
              href="https://fitcalculato.com"
              className="text-primary hover:underline"
            >
              https://fitcalculato.com
            </Link>
            ), you agree to be bound by these Terms of Service (&quot;Terms&quot;).
            If you do not agree to these Terms, you should not use our website
            or services. We reserve the right to update or modify these Terms at
            any time, and your continued use of the site constitutes acceptance
            of any changes.
          </p>
        </section>

        {/* Description of Service */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            2. Description of Service
          </h2>
          <p className="mb-4">
            FitCalculato provides free, web-based fitness and health calculators
            designed for informational and educational purposes. Our tools
            include but are not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Zone 2 Heart Rate Calculator</li>
            <li>VO2 Max &amp; Fitness Age Calculator</li>
            <li>Additional calculators as they become available</li>
          </ul>
          <p className="mt-4">
            All calculations are performed client-side in your browser. We do
            not store, process, or transmit your health data to our servers. No
            account creation or registration is required to use our tools.
          </p>
        </section>

        {/* Disclaimer of Warranties */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            3. Disclaimer of Warranties
          </h2>
          <p className="mb-4">
            Our services are provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without warranties of any kind, either express
            or implied, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Implied warranties of merchantability, fitness for a particular
              purpose, or non-infringement
            </li>
            <li>
              Accuracy, reliability, or completeness of any results, content, or
              information provided
            </li>
            <li>
              Uninterrupted, error-free, or secure operation of the website
            </li>
          </ul>
          <p className="mt-4">
            The results provided by our calculators are estimates based on
            population-level research formulas. Individual results may vary
            significantly. We do not guarantee the accuracy of any calculation
            for any specific individual.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            4. Limitation of Liability
          </h2>
          <p className="mb-4">
            To the fullest extent permitted by applicable law, FitCalculato, its
            creators, contributors, and affiliates shall not be liable for any
            direct, indirect, incidental, special, consequential, or punitive
            damages arising from or related to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your use of, or inability to use, our website or tools</li>
            <li>
              Any decisions or actions taken based on information or results
              provided by our calculators
            </li>
            <li>Any errors, omissions, or inaccuracies in our content or tools</li>
            <li>
              Any unauthorized access to or alteration of your data or
              transmissions
            </li>
          </ul>
          <p className="mt-4">
            You acknowledge that you use our tools at your own risk and assume
            full responsibility for any consequences of such use.
          </p>
        </section>

        {/* Medical Disclaimer Reference */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            5. Medical Disclaimer
          </h2>
          <p className="mb-4">
            Our tools are not a substitute for professional medical advice,
            diagnosis, or treatment. You should consult a qualified healthcare
            professional before starting any exercise program or making
            health-related decisions based on our calculators.
          </p>
          <p>
            For our complete medical disclaimer, please visit our{" "}
            <Link
              href="/disclaimer"
              className="text-primary hover:underline"
            >
              Medical Disclaimer
            </Link>{" "}
            page.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            6. Intellectual Property
          </h2>
          <p className="mb-4">
            All content on FitCalculato — including but not limited to text,
            graphics, logos, icons, images, software, and code — is the property
            of FitCalculato or its content suppliers and is protected by
            international copyright, trademark, and other intellectual property
            laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works
            from, publicly display, or otherwise exploit any content from this
            website without our prior written consent, except for personal,
            non-commercial use.
          </p>
        </section>

        {/* User Conduct */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            7. User Conduct
          </h2>
          <p className="mb-4">When using our website, you agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Use the site in any way that violates applicable laws or
              regulations
            </li>
            <li>
              Attempt to interfere with the proper functioning of the website
            </li>
            <li>
              Use automated systems (bots, scrapers, etc.) to access the site in
              a manner that exceeds reasonable use
            </li>
            <li>
              Misrepresent results from our calculators as medical diagnoses or
              professional advice
            </li>
          </ul>
        </section>

        {/* Modifications to Terms */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            8. Modifications to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will
            be posted on this page with an updated effective date. Your
            continued use of FitCalculato after any modifications constitutes
            your acceptance of the revised Terms. We encourage you to review
            these Terms periodically.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            9. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            applicable laws, without regard to conflict of law principles. Any
            disputes arising from these Terms or your use of FitCalculato shall
            be resolved through binding arbitration or in the courts of
            competent jurisdiction.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            10. Contact
          </h2>
          <p>
            If you have questions about these Terms of Service, please reach
            out through our{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact page
            </Link>
            .
          </p>
        </section>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/disclaimer"
            className="font-label-md text-label-md text-primary hover:underline"
          >
            Medical Disclaimer →
          </Link>
          <Link
            href="/privacy"
            className="font-label-md text-label-md text-primary hover:underline"
          >
            Privacy Policy →
          </Link>
        </div>
      </div>
    </main>
  );
}
