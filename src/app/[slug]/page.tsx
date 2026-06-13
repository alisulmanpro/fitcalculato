import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ZoneCalculator from '@/components/pages/zone';
import Vo2MaxCalculator from '@/components/pages/vo2max';

const tools: Record<string, {
  component: React.ComponentType;
  title: string;
  description: string;
}> = {
  "zone-two-heart-rate-calculator": {
    component: ZoneCalculator,
    title: "Free Zone 2 Heart Rate Calculator | FitCalculato",
    description: "Calculate your ideal Zone 2 heart rate range for aerobic endurance training. Uses Karvonen, Tanaka, and traditional formulas. Free, instant results.",
  },
  "vo2-max-calculator": {
    component: Vo2MaxCalculator,
    title: "Free VO2 Max & Fitness Age Calculator | FitCalculato",
    description: "Calculate your VO2 max and discover your true biological fitness age. Based on the Uth-Sørensen-Overgaard-Pedersen formula. Free, no signup required.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools[slug];

  if (!tool) {
    return {
      title: "Page Not Found | FitCalculato",
    };
  }

  return {
    title: tool.title,
    description: tool.description,
    openGraph: {
      title: tool.title,
      description: tool.description,
      url: `https://fitcalculato.com/${slug}`,
      siteName: "FitCalculato",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.title,
      description: tool.description,
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = tools[slug];

  if (!tool) {
    notFound();
  }

  const ToolComponent = tool.component;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": tool.title.replace(" | FitCalculato", ""),
    "url": `https://fitcalculato.com/${slug}`,
    "applicationCategory": "HealthApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": tool.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolComponent />
    </>
  );
}
