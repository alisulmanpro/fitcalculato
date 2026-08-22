import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://fitcalculato.com';

  // 1. Static pages
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/join`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/author`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  const categoriesStore = await import('@/lib/categoryData').then(m => m.getAllCategories());
  const allCalculators = categoriesStore.flatMap((cat: any) => cat.calculators);

  const calculatorRoutes = allCalculators.map((item: any) => ({
    url: `${baseUrl}/calculators/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const calculatorGuideRoutes = allCalculators
    .filter((item: any) => item.slug === "zone-2-heart-rate-calculator")
    .map((item: any) => ({
      url: `${baseUrl}/calculators/${item.slug}/guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  const articlesStore = await import('@/lib/categoryData').then(m => m.getAllBlogs());
  const allArticles = articlesStore.flatMap((cat: any) => cat);

  const articleRoutes = allArticles.map((item: BlogPost) => ({
    url: `${baseUrl}/blogs/${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const categoryRoutes = categoriesStore.map((item: any) => ({
    url: `${baseUrl}/categories/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...calculatorRoutes, ...categoryRoutes, ...articleRoutes, ...calculatorGuideRoutes];
}
