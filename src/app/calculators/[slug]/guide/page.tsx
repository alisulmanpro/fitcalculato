import MarkdownViewer from '@/lib/MarkdownViewer';
import ToolSidebar from '@/components/ui/tool/ToolSidebar';
import { DynamicHero } from '@/components/categories/dynamic-page';
import type { Metadata } from 'next';
import { getCalculatorBySlug } from '@/lib/categoryData';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const data = getCalculatorBySlug(slug);
    const guide = data?.guide?.find((item) => item.type === 'main');

    const defaultTitle = "Fitness Guide";
    const defaultDescription = "Comprehensive fitness guide to help you achieve your health and training goals.";

    const title = guide?.title
        ? `${guide.title}`
        : defaultTitle;

    const description = guide?.description || defaultDescription;
    const canonical = data?.SEO_canonical
        ? `${data.SEO_canonical}/guide`
        : `/calculators/${slug}/guide`;

    return {
        metadataBase: new URL("https://fitcalculato.com"),

        alternates: {
            canonical: canonical,
        },

        title: title,
        description: description,

        openGraph: {
            title: title,
            description: description,
            url: `https://fitcalculato.com${canonical}`,
            siteName: "FitCalculato",
            type: "article",
        },

        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
        },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const data = getCalculatorBySlug(slug);
    const guide = data?.guide?.find((item) => item.type === 'main');

    return (
        <main>
            <DynamicHero title={guide?.title || ""} description={guide?.description || ""} image="/guidance.jpg" />
            <div className='grid grid-cols-1 md:grid-cols-7 gap-5 p-5 md:p-10 mx-auto'>
                <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
                    <MarkdownViewer filePath={`/public/markdown/${slug}/guide.md`} />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <div className="sticky top-20">
                        <ToolSidebar />
                    </div>
                </div>
            </div>
        </main>
    );
}
