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
                SEO_tilte: "Zone 2 Heart Rate Calculator: Unlock Your Ideal Training Zone",
                SEO_description: "Calculate your Zone 2 heart rate by age using the Tanaka and Karvonen formulas. See your exact range, learn how to interpret it, and train smarter.",
                SEO_canonical: "/calculators/zone-2-heart-rate-calculator",
                guide: [
                    {
                        id: 'zone-2-heart-rate-guide',
                        title: 'Zone 2 Heart Rate Guide',
                        description: 'Learn the science behind training smart with Zone 2 heart rate guide.',
                        type: 'main',
                    }
                ]
            },
            {
                id: 'vo2-max',
                title: 'VO2 Max Calculator',
                description: 'Calculate your VO2 max and discover your true biological fitness age.',
                slug: 'vo2-max-calculator',
                category: 'cardio-and-endurance',
                icon: 'TbLungs',
                top: true,
                SEO_tilte: "VO2 Max Calculator",
                SEO_description: "Calculate your VO2 max and discover your true biological fitness age.",
                SEO_canonical: "/calculators/vo2-max-calculator",
                guide: [
                    {
                        id: 'vo2-max-guide',
                        title: 'VO2 Max Guide: What It Is, Why It Matters, and How to Improve It',
                        description: 'Ask doctors which single number best forecasts overall lifespan, and more now point to one metric: VO2 max. Not cholesterol. Not resting heart rate. Not even blood pressure. It reflects your peak aerobic capacity.',
                        type: 'main',
                    },
                    {
                        id: 'what-is-vo2-max',
                        title: 'What Is VO2 Max? A Clear, No-Jargon Explanation',
                        description: 'What is VO2 max? Learn what the number actually measures, why it matters more than most fitness stats, and what counts as a good score for your age.',
                        type: 'related',
                    },
                    {
                        id: 'vo2-max-chart',
                        title: 'VO2 Max Chart: Average Scores by Age and Sex',
                        description: ' VO2 max chart by age and sex, covering men and women from their 20s to 70s. See exactly where your score falls, from poor to superior.',
                        type: 'related',
                    },
                    {
                        id: 'vo2-max-by-age',
                        title: 'VO2 Max by Age: What Changes Decade by Decade',
                        description: 'VO2 max by age, decade by decade. See what changes in your 20s through 60s, why scores shift, and how to train at each stage of life.',
                        type: 'related',
                    },
                    {
                        id: 'how-to-measure-vo2-max',
                        title: 'How to Measure VO2 Max: Every Method Compared',
                        description: ' How to measure VO2 max, from lab tests to home methods. Compare the Cooper test, Rockport walk, heart rate formulas, and wearable estimates.',
                        type: 'related',
                    },
                    {
                        id: 'understanding-your-vo2-max-score',
                        title: 'Understanding Your VO2 Max Score: What the Number Actually Means',
                        description: 'Understanding your VO2 max score means more than checking a chart. Learn what your number really means for daily life, long-term health, and training.',
                        type: 'related',
                    },
                    {
                        id: 'how-to-improve-vo2-max',
                        title: 'How to Improve VO2 Max: A Science-Based Training Plan',
                        description: 'How to improve VO2 max with proven training methods, realistic timelines, and the mistakes that quietly stall progress. A science-based plan for every fitness level. ',
                        type: 'related',
                    },
                ]
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
                SEO_canonical: "/blogs/how-to-calculate-zone-2-heart-rate",
                SEO_description: "Learn how to calculate Zone 2 heart rate using the Tanaka, Fox, Karvonen, and Maffetone formulas, with worked examples and the mistakes that throw the number off.",
                SEO_title: "How to Calculate Zone 2 Heart Rate: 4 Simple Ways to Get It Righ",
            },
            {
                id: 'what-Is-zone-2-training',
                title: 'What Is Zone 2 Training?',
                excerpt: 'Ask five people what Zone 2 training means and you will likely get five different answers. One mentions fat burning. Another brings up mitochondria. Someone says "easy cardio" and walks away.',
                image: '/what-Is-zone-2-training.jpg',
                link: '/public/markdown/blogs/what-Is-zone-2-training.md',
                SEO_canonical: "/blogs/what-Is-zone-2-training",
                SEO_description: "What is Zone 2 training, really? Learn the definition, how it differs from Zone 1 and Zone 3, real examples for running, cycling, and walking, and whether it's worth your time.",
                SEO_title: "What Is Zone 2 Training? A Clear, No-Hype Explanation",
            },
            {
                id: 'zone-2-heart-rate-by-age',
                title: 'Zone 2 Heart Rate by Age',
                excerpt: "A 25-year-old and a 65-year-old can both be working just as hard in Zone 2, breathing just as easily, sweating just as much, yet their heart rate numbers can differ by almost 20 beats per minute. Neither one is doing it wrong. Their hearts are just built on different clocks.",
                image: '/zone-2-heart-rate-by-age.jpg',
                link: '/public/markdown/blogs/zone-2-heart-rate-by-age.md',
                SEO_canonical: "/blogs/zone-2-heart-rate-by-age",
                SEO_description: "See your Zone 2 heart rate range by age from 20 to 80, why the number shifts as you get older, and what actually stays the same no matter your age.",
                SEO_title: "Zone 2 Heart Rate by Age: Full Chart and What Actually Changes",
            },
            {
                id: 'zone-2-heart-rate-chart',
                title: 'Zone 2 Heart Rate Chart',
                excerpt: 'To be effective during a workout, a heart rate chart must be clear and readable at a glance. This one is built for that. One table shows where Zone 2 sits among all five zones, and a second shows how the numbers shift depending on how you calculate them.',
                image: '/zone-2-heart-rate-chart.jpg',
                link: '/public/markdown/blogs/zone-2-heart-rate-chart.md',
                SEO_canonical: "/blogs/zone-2-heart-rate-chart",
                SEO_description: "A complete Zone 2 heart rate chart showing all five training zones, percentage ranges, and how to read your numbers whether you train by age or heart rate reserve.",
                SEO_title: "Zone 2 Heart Rate Chart: All 5 Zones, Explained in One Place",
            },
            {
                id: 'zone-2-heart-rate-zones-explained',
                title: 'Zone 2 Heart Rate Zones Explained',
                excerpt: "Five zones, one heart, and a lot of confusing labels on your fitness watch. If you've ever glanced down mid-run and wondered whether that orange bar means you're training smart or just training hard for no reason, this guide clears it up.",
                image: '/zone-2-heart-rate-zones-explained.jpg',
                link: '/public/markdown/blogs/zone-2-heart-rate-zones-explained.md',
                SEO_canonical: "/blogs/zone-2-heart-rate-zones-explained",
                SEO_description: "All 5 heart rate training zones explained clearly, with real percentages, what each one feels like, and where Zone 2 sits between easy recovery and hard racing effort.",
                SEO_title: "Zone 2 Heart Rate Zones Explained: All 5 Zones Made Simple",
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

export function getCalculatorBySlug(slug: string): Calculator | null {
    for (const categoryKey in categoriesStore) {
        const category = categoriesStore[categoryKey];
        const calculator = category.calculators.find((item) => item.slug === slug);

        if (calculator) {
            return calculator;
        }
    }

    return null;
}