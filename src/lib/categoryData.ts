const categoriesStore: Record<string, CategoryData> = {
    "cardio-and-endurance": {
        slug: "cardio-and-endurance",
        heroTitle: "Cardio & Endurance Calculators",
        heroDescription: "Precision tools to measure your cardiovascular fitness, pacing, and endurance potential. Designed for athletes and health-conscious individuals.",
        seoSections: [],
        calculators: [
            {
                id: 'zone-2-heart-rate',
                title: 'Zone 2 Heart Rate Calculator',
                description: 'Find your precise aerobic training zone for maximum endurance benefits.',
                slug: 'zone-2-heart-rate-calculator',
                category: 'cardio-and-endurance',
                icon: 'TbActivityHeartbeat'
            },
            {
                id: 'vo2-max',
                title: 'VO2 Max Calculator',
                description: 'Calculate your VO2 max and discover your true biological fitness age.',
                slug: 'vo2-max-calculator',
                category: 'cardio-and-endurance',
                icon: 'TbLungs'
            },
        ],
        mainArticleHtml: "",
        relatedBlogs: []
    },
};

export function getCategoryData(slug: string): CategoryData | null {
    return categoriesStore[slug] || null;
}