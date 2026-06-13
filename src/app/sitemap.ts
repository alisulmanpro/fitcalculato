import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fitcalculato.com';

  // Base and static pages
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/disclaimer',
    '/faqs',
    '/join',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.7,
  }));

  // Dynamic calculator tool pages
  const toolRoutes = [
    '/zone-two-heart-rate-calculator',
    '/vo2-max-calculator',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...toolRoutes];
}
