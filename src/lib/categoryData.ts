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
        relatedBlogs: [
            {
                id: 'how-to-calculate-zone-2-heart-rate',
                title: 'How to Calculate Zone 2 Heart Rate',
                excerpt: 'Search "how to calculate Zone 2 heart rate," and you will find four different formulas, each claiming to be the right one. None of them are lying to you. They are just measuring the same target from slightly different angles',
                image: '/how-to-calculate-zone-2-heart-rate.jpg',
                link: '/public/markdown/blogs/how-to-calculate-zone-2-heart-rate.md',
            },
            {
                id: 'what-Is-zone-2-training',
                title: 'What Is Zone 2 Training?',
                excerpt: 'Ask five people what Zone 2 training means and you will likely get five different answers. One mentions fat burning. Another brings up mitochondria. Someone says "easy cardio" and walks away.',
                image: '/what-Is-zone-2-training.jpg',
                link: '/public/markdown/blogs/what-Is-zone-2-training.md',
            },
            {
                id: 'zone-2-heart-rate-by-age',
                title: 'Zone 2 Heart Rate by Age',
                excerpt: "A 25-year-old and a 65-year-old can both be working just as hard in Zone 2, breathing just as easily, sweating just as much, yet their heart rate numbers can differ by almost 20 beats per minute. Neither one is doing it wrong. Their hearts are just built on different clocks.",
                image: '/zone-2-heart-rate-by-age.jpg',
                link: '/public/markdown/blogs/zone-2-heart-rate-by-age.md',
            },
            {
                id: 'zone-2-heart-rate-chart',
                title: 'Zone 2 Heart Rate Chart',
                excerpt: 'To be effective during a workout, a heart rate chart must be clear and readable at a glance. This one is built for that. One table shows where Zone 2 sits among all five zones, and a second shows how the numbers shift depending on how you calculate them.',
                image: '/zone-2-heart-rate-chart.jpg',
                link: '/public/markdown/blogs/zone-2-heart-rate-chart.md',
            },
            {
                id: 'zone-2-heart-rate-zones-explained',
                title: 'Zone 2 Heart Rate Zones Explained',
                excerpt: "Five zones, one heart, and a lot of confusing labels on your fitness watch. If you've ever glanced down mid-run and wondered whether that orange bar means you're training smart or just training hard for no reason, this guide clears it up.",
                image: '/zone-2-heart-rate-zones-explained.jpg',
                link: '/public/markdown/blogs/zone-2-heart-rate-zones-explained.md',
            },
        ]
    },
};

export function getCategoryData(slug: string): CategoryData | null {
    return categoriesStore[slug] || null;
}

export function getAllCategories(): CategoryData[] {
    return Object.values(categoriesStore);
}

export function getAllCalculators(): (Calculator & { categoryName: string; categorySlug: string })[] {
    return getAllCategories().flatMap((category) =>
        category.calculators.map((calc) => ({
            ...calc,
            categoryName: category.heroTitle.replace(/\s*Calculators\s*$/i, "").trim(),
            categorySlug: category.slug,
        }))
    );
}

export function getAllBlogs(): (BlogPost & { categoryName: string; categorySlug: string })[] {
    return getAllCategories().flatMap((category) =>
        category.relatedBlogs.map((blog) => ({
            ...blog,
            categoryName: category.heroTitle.replace(/\s*Calculators\s*$/i, "").trim(),
            categorySlug: category.slug,
        }))
    );
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