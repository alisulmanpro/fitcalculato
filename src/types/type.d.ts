
declare global {
    type CalculatorCategory = 'cardio-and-endurance';

    interface Calculator {
        id: string;
        title: string;
        description: string;
        icon: string;
        slug: string;
        category: CalculatorCategory;
        top: boolean
        SEO_tilte: string;
        SEO_description: string;
        SEO_canonical: string;
        guide: Guide[];

    }

    interface BlogPost {
        id: string;
        title: string;
        excerpt: string;
        image: string;
        link: string;
        SEO_title: string;
        SEO_description: string;
        SEO_canonical: string;
    }

    interface CategoryData {
        id: string;
        slug: string;
        heroTitle: string;
        heroDescription: string;
        heroImage: string;
        seoSections: string[];
        calculators: Calculator[];
        mainArticleHtml: string;
        relatedBlogs: BlogPost[];
    }

    interface Guide {
        id: string;
        title: string;
        description: string;
        type: "main" | "related";
    }

    interface TopCalculatorResult {
        id: string
        title: string;
        slug: string;
    }

}

export { }