import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ZoneCalculator from '@/components/pages/zone';
import Vo2MaxCalculator from '@/components/pages/vo2max';
import {  getCalculatorBySlug } from '@/lib/categoryData';

const tools: Record<string, {
  component: React.ComponentType<{ slug: string }>;
  title: string;
  description: string;
  canonical: string;
}> = {
  "zone-2-heart-rate-calculator": {
    component: ZoneCalculator,
    title:  getCalculatorBySlug("zone-2-heart-rate-calculator")?.SEO_tilte as string,
    description: getCalculatorBySlug("zone-2-heart-rate-calculator")?.SEO_description as string,
    canonical: getCalculatorBySlug("zone-2-heart-rate-calculator")?.SEO_canonical as string
  },
  "vo2-max-calculator": {
    component: Vo2MaxCalculator,
    title:  getCalculatorBySlug("vo2-max-calculator")?.SEO_tilte as string,
    description: getCalculatorBySlug("vo2-max-calculator")?.SEO_description as string,
    canonical: getCalculatorBySlug("vo2-max-calculator")?.SEO_canonical as string
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
      <ToolComponent slug={slug} />
    </>
  );
}
