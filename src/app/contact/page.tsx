import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | FitCalculato",
  description:
    "Get in touch with the FitCalculato team for questions, feedback, or partnership inquiries.",
  openGraph: {
    title: "Contact Us | FitCalculato",
    description:
      "Get in touch with the FitCalculato team for questions, feedback, or partnership inquiries.",
    url: "https://fitcalculato.com/contact",
    siteName: "FitCalculato",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-2">
          Contact Us
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
          Have a question, feedback, or found a bug? We&apos;d love to hear from
          you.
        </p>

        {/* Contact Form */}
        <form
          action="#"
          className="space-y-6 rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-8"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="block font-label-md text-label-md text-on-surface mb-2"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="block font-label-md text-label-md text-on-surface mb-2"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="contact-subject"
              className="block font-label-md text-label-md text-on-surface mb-2"
            >
              Subject
            </label>
            <select
              id="contact-subject"
              required
              defaultValue=""
              className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 appearance-none"
            >
              <option value="" disabled>
                Select a subject…
              </option>
              <option value="general">General Inquiry</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="partnership">Partnership</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="block font-label-md text-label-md text-on-surface mb-2"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={6}
              placeholder="Tell us what's on your mind…"
              className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-y"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-8 py-3.5 font-label-md text-label-md text-on-primary hover:opacity-90 active:opacity-80 transition-opacity duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Response Time Note */}
        <p className="mt-6 text-center font-body-md text-body-md text-on-surface-variant/70">
          We typically respond within 48 hours.
        </p>
      </div>
    </main>
  );
}
