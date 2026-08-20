import MarkdownViewer from '@/lib/MarkdownViewer';
import ToolSidebar from '@/components/ui/tool/ToolSidebar';
import { DynamicHero } from '@/components/categories/dynamic-page';
import { getAllCategories } from '@/lib/categoryData';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const categoryData: CategoryData[] = getAllCategories();
    const blog = categoryData
        .flatMap((item) => item.relatedBlogs)
        .find((blog) => blog.id === slug);

    return (
        <main className="">

            <DynamicHero title={blog?.title || ""} description={blog?.excerpt || ""} image={blog?.image || ""} />
            <div className='grid grid-cols-1 md:grid-cols-7 gap-5 p-5 md:p-10 mx-auto'>
                <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
                    <MarkdownViewer filePath={blog?.link || ""} />
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
