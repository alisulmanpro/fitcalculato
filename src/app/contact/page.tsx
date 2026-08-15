import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | FitCalculators",
  description:
    "Get in touch with the FitCalculators team. Submit questions, bug reports, feature requests, or partnership inquiries. We respond within 48 hours.",
  openGraph: {
    title: "Contact Us | FitCalculators",
    description:
      "Get in touch with the FitCalculators team. Submit questions, bug reports, feature requests, or partnership inquiries.",
    url: "https://fitcalculato.com/contact",
    siteName: "FitCalculators",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
