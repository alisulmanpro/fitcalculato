const categoriesStore: Record<string, CategoryData> = {
    "cardio-and-endurance": {
        id: 'cardio-and-endurance',
        slug: "cardio-and-endurance",
        heroTitle: "Cardio & Endurance Calculators",
        heroDescription: "Precision tools to measure your cardiovascular fitness, pacing, and endurance potential. Designed for athletes and health-conscious individuals.",
        heroImage: "/hero-category-1.jpeg",
        seoSections: [],
        calculators: [
            {
                id: 'zone-2-heart-rate',
                title: 'Zone 2 Heart Rate Calculator',
                description: 'Find your precise aerobic training zone for maximum endurance benefits.',
                slug: 'zone-2-heart-rate-calculator',
                category: 'cardio-and-endurance',
                icon: 'TbActivityHeartbeat',
                top: true,
            },
            {
                id: 'vo2-max',
                title: 'VO2 Max Calculator',
                description: 'Calculate your VO2 max and discover your true biological fitness age.',
                slug: 'vo2-max-calculator',
                category: 'cardio-and-endurance',
                icon: 'TbLungs',
                top: true,
            },
        ],
        mainArticleHtml: "",
        relatedBlogs: []
    },
};

export function getCategoryData(slug: string): CategoryData | null {
    return categoriesStore[slug] || null;
}

export function getAllCategories(): CategoryData[] {
    return Object.values(categoriesStore);
}

export function getTopCalculators(maxLimit: number = 5): TopCalculatorResult[] {
    const result: TopCalculatorResult[] = []

    // Saari categories mein loop chalayen ge
    for (const categoryKey in categoriesStore) {
        const category = categoriesStore[categoryKey];

        for (const calc of category.calculators) {
            // Sirf 'top: true' wale fetch honge
            if (calc.top) {
                // Title ke end ya beech se 'Calculator' word remove karne ke liye Regex
                const cleanedTitle = calc.title.replace(/\s*calculator\b/gi, '').trim();

                result.push({
                    id: calc.id,
                    title: cleanedTitle,
                    slug: calc.slug,
                });

                // Jaise hi max 5 poore hon, loop break kar do
                if (result.length >= maxLimit) {
                    return result;
                }
            }
        }
    }

    return result;
}