import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ZoneCalculator from '@/components/pages/zone';
import Vo2MaxCalculator from '@/components/pages/vo2max';

const tools: Record<string, {
  component: React.ComponentType;
  title: string;
  description: string;
}> = {
  "zone-2-heart-rate-calculator": {
    component: ZoneCalculator,
    title: "Free Zone 2 Heart Rate Calculator",
    description: "Use our free Zone 2 Heart Rate Calculator to find your exact training range by age. Backed by 2025 research. Burn fat, build endurance, and train smarter today",
  },
  "vo2-max-calculator": {
    component: Vo2MaxCalculator,
    title: "Free VO2 Max & Fitness Age Calculator",
    description: "Calculate your VO2 max score in seconds. Our free aerobic fitness calculator covers men and women by age with expert guidance on what your number means and how to improve it.",
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
      title: "Page Not Found",
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
