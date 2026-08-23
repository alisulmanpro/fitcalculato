import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitcalculato.com"),

  alternates: {
    canonical: "/",
  },

  title: "Free Fitness & Health Calculators",

  description:
    "Explore 20+ science-backed fitness calculators — Zone 2 heart rate, VO2 Max, BMI, and more.",

  openGraph: {
    title: "Free Fitness & Health Calculators",
    description:
      "Explore 20+ science-backed fitness calculators — Zone 2 heart rate, VO2 Max, BMI, and more.",
    url: "https://fitcalculato.com",
    siteName: "Fitness Calculator",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Fitness Calculator",
  "url": "https://fitcalculato.com",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "description": "Free, science-backed fitness and health calculators including Zone 2 heart rate, VO2 Max, BMI, and more.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="fitcalculato"
      className={`${montserrat.className} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9795496420608967"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col user-none" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
