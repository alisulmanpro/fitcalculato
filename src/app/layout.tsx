import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitcalculato.com"),
  title: "Free Fitness & Health Calculators | FitCalculato",
  description: "Explore 20+ science-backed fitness calculators — Zone 2 heart rate, VO2 Max, BMI, and more. Free tools backed by current research to optimize your health.",
  openGraph: {
    title: "Free Fitness & Health Calculators | FitCalculato",
    description: "Explore 20+ science-backed fitness calculators — Zone 2 heart rate, VO2 Max, BMI, and more. Free tools backed by current research to optimize your health.",
    url: "https://fitcalculato.com",
    siteName: "FitCalculato",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Fitness & Health Calculators | FitCalculato",
    description: "Explore 20+ science-backed fitness calculators — Zone 2 heart rate, VO2 Max, BMI, and more. Free tools backed by current research to optimize your health.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "FitCalculato",
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-background">
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
