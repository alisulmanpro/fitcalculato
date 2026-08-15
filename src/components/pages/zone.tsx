import ZoneCalculatorForm from '@/components/ui/tool/ZoneCalculatorForm';
import ToolSidebar from '@/components/ui/tool/ToolSidebar';
import CalculatorHero from '../calculators-hero';
import MarkdownViewer from '@/lib/MarkdownViewer';

export default function ZoneCalculator({ slug = 'zone-2-heart-rate-calculator' }: { slug?: string }) {
    return (
        <main className="w-full">
            <CalculatorHero title="Heart Rate Training Zone Calculator" image="/heart.jpg" />
            <div className="grid grid-cols-1 md:grid-cols-7 gap-5 p-5 md:p-10 mx-auto">
                <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
                    <div className="bg-base-200 border border-base-300 rounded-xl p-5 space-y-4">
                        <p className="text-base-content/90 leading-relaxed text-sm md:text-base">
                            Most people training in &quot;Zone 2&quot; are not actually in Zone 2. They are ten beats too high, breathing a little too hard, and wondering why their easy runs never feel easy. <br />
                            That mistake is common and fixable with math you can do in about 10 seconds. <br />
                            This <b>Zone 2 heart rate calculator</b> uses your age (and, if you want more precision, your resting heart rate) to give you a personal training range instead of a generic guess. Below the calculator, you will find the exact formulas behind the numbers, a full age-by-age breakdown, and answers to the questions people actually search for before they hit &quot;start&quot; on a run.
                        </p>
                    </div>

                    <ZoneCalculatorForm />
                    <MarkdownViewer filePath={`/public/markdown/${slug}/docs.md`} />
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