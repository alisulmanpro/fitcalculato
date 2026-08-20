import MarkdownViewer from '@/lib/MarkdownViewer';
import ToolSidebar from '@/components/ui/tool/ToolSidebar';
import { DynamicHero } from '@/components/categories/dynamic-page';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <main className="">
            
            <DynamicHero title={"Zone 2 Heart Rate Guide"} description={"Within a few years, Zone 2 training evolved from a niche exercise physiology lab term into a fixture on fitness podcasts. This rapid surge in popularity brings a dual reality: while the public discovers a highly valuable tool, online misinformation frequently distorts the actual science."} image="/guidance.jpg" />
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
