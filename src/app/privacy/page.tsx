import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "FitCalculato's privacy policy. Learn how we handle your data — we don't collect personal health data or require accounts.",

  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "FitCalculato's privacy policy. Learn how we handle your data — we don't collect personal health data or require accounts.",
    url: "https://fitcalculato.com/privacy",
    siteName: "Fitness Calculator",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <h1 className="font-headline-xl text-headline-xl text-on-background mb-2">
        Privacy Policy
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8">
        Last updated: June 10, 2026
      </p>

      <div className="space-y-10 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        {/* Introduction */}
        <section>
          <p>
            FitCalculato (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            operates the website{" "}
            <Link
              href="https://fitcalculato.com"
              className="text-primary hover:underline"
            >
              https://fitcalculato.com
            </Link>
            . This Privacy Policy explains how we collect, use, and protect your
            information when you use our website and services.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            <strong className="text-on-surface">
              We do not collect personal health data.
            </strong>{" "}
            All calculator inputs — including your age, heart rate, weight, and
            other health metrics — are processed entirely in your browser using
            client-side JavaScript. This data is never transmitted to our
            servers, never stored in any database, and never shared with any
            third party.
          </p>
          <p className="mb-4">
            We may collect limited, non-personal information automatically when
            you visit our site, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-on-surface">Usage data:</strong> Pages
              visited, time spent on site, referring URL, and general
              interaction patterns.
            </li>
            <li>
              <strong className="text-on-surface">Device information:</strong>{" "}
              Browser type, operating system, screen resolution, and device
              category (mobile, desktop, tablet).
            </li>
            <li>
              <strong className="text-on-surface">IP address:</strong> Your IP
              address may be collected by our analytics and hosting providers,
              but is anonymized where possible.
            </li>
          </ul>
        </section>

        {/* Cookies & Analytics */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Cookies &amp; Analytics
          </h2>
          <p className="mb-4">
            We use standard analytics tools (such as Google Analytics) to
            understand how visitors use our site. These tools may place cookies
            on your device to collect anonymized usage data. Cookies are small
            text files stored by your browser.
          </p>
          <p className="mb-4">We use cookies to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Understand aggregate traffic patterns and popular content</li>
            <li>Improve user experience and site performance</li>
            <li>
              Measure the effectiveness of new features and calculators
            </li>
          </ul>
          <p className="mt-4">
            You can disable cookies in your browser settings at any time. Please
            note that some site features may not function optimally without
            cookies enabled.
          </p>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Third-Party Services
          </h2>
          <p className="mb-4">
            Our website may use the following third-party services, each
            governed by their own privacy policies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-on-surface">
                Google Analytics:
              </strong>{" "}
              For website traffic analysis and usage reporting.
            </li>
            <li>
              <strong className="text-on-surface">
                Google AdSense:
              </strong>{" "}
              For serving advertisements. AdSense may use cookies and web
              beacons to show personalized ads.
            </li>
            <li>
              <strong className="text-on-surface">Hosting provider:</strong> Our
              site is hosted on infrastructure that may log access requests
              for security and performance monitoring.
            </li>
          </ul>
          <p className="mt-4">
            We do not sell, trade, or transfer your personally identifiable
            information to outside parties beyond what is described above.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Your Rights (GDPR / CCPA)
          </h2>
          <p className="mb-4">
            Depending on your location, you may have specific rights regarding
            your personal data:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wide">
                European Economic Area (GDPR)
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-on-surface">Right of access:</strong>{" "}
                  Request a copy of any personal data we hold about you.
                </li>
                <li>
                  <strong className="text-on-surface">
                    Right to rectification:
                  </strong>{" "}
                  Request correction of inaccurate personal data.
                </li>
                <li>
                  <strong className="text-on-surface">
                    Right to erasure:
                  </strong>{" "}
                  Request deletion of your personal data.
                </li>
                <li>
                  <strong className="text-on-surface">
                    Right to restrict processing:
                  </strong>{" "}
                  Request that we limit how we use your data.
                </li>
                <li>
                  <strong className="text-on-surface">
                    Right to data portability:
                  </strong>{" "}
                  Receive your data in a structured, machine-readable format.
                </li>
                <li>
                  <strong className="text-on-surface">
                    Right to object:
                  </strong>{" "}
                  Object to our processing of your personal data.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wide">
                California Residents (CCPA)
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The right to know what personal information is collected about
                  you.
                </li>
                <li>
                  The right to request deletion of your personal information.
                </li>
                <li>
                  The right to opt out of the sale of personal information. Note:
                  We do not sell personal information.
                </li>
                <li>
                  The right to non-discrimination for exercising your CCPA
                  rights.
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4">
            To exercise any of these rights, please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>
            .
          </p>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Children&apos;s Privacy
          </h2>
          <p>
            Our services are not directed to individuals under the age of 13. We
            do not knowingly collect personal information from children under 13.
            If you believe a child under 13 has provided us with personal data,
            please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>{" "}
            and we will take steps to remove that information.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated &quot;Last updated&quot;
            date. We encourage you to review this policy periodically to stay
            informed about how we protect your information.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            your data rights, please reach out through our{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
