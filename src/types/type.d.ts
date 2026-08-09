
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
    }

    interface BlogPost {
        id: string;
        title: string;
        excerpt: string;
        image: string;
        link: string;
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

    interface TopCalculatorResult {
        id: string
        title: string;
        slug: string;
    }

}

export { }