
declare global {
    type CalculatorCategory = 'cardio-and-endurance';

    interface Calculator {
        id: string;
        title: string;
        description: string;
        icon: string;
        slug: string;
        category: CalculatorCategory;
    }

    interface BlogPost {
        id: string;
        title: string;
        excerpt: string;
        image: string;
        link: string;
    }

    interface CategoryData {
        slug: string;
        heroTitle: string;
        heroDescription: string;
        seoSections: string[];
        calculators: Calculator[];
        mainArticleHtml: string;
        relatedBlogs: BlogPost[];
    }

}

export { }