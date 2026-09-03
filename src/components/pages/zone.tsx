import ZoneCalculatorForm from '@/components/ui/tool/ZoneCalculatorForm';
import ToolSidebar from '@/components/ui/tool/ToolSidebar';
import CalculatorHero from '../calculators-hero';
import MarkdownViewer from '@/lib/MarkdownViewer';
import AuthorWidget from '../AuthorWidget';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import { LuBookOpen } from 'react-icons/lu';

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

                    {/* Guide Card Section */}
                    <div className="flex flex-col gap-3">
                        {/* Section Heading */}
                        <div className="flex items-center gap-2">
                            <LuBookOpen className="text-primary text-xl" />
                            <h2 className="text-lg font-bold text-base-content tracking-wide uppercase">Guide</h2>
                        </div>

                        {/* Guide Card */}
                        <Link
                            href={`/calculators/${slug}/guide`}
                            className="group flex gap-4 bg-base-100 border border-base-300 rounded-xl p-4 hover:shadow-md hover:border-primary/40 transition-all duration-300"
                        >
                            {/* Thumbnail */}
                            <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-lg overflow-hidden">
                                <Image
                                    src="/guidance.jpg"
                                    alt="Zone 2 Heart Rate Guide"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col justify-center gap-1.5 flex-1 min-w-0">
                                <h3 className="font-bold text-base md:text-lg text-base-content leading-snug group-hover:text-primary transition-colors duration-200">
                                    Zone 2 Heart Rate Guide
                                </h3>
                                <p className="text-sm text-base-content/60 leading-relaxed line-clamp-2">
                                    Within a few years, Zone 2 training evolved from a niche exercise physiology lab term into a fixture on fitness podcasts. Discover the real science behind training smart.
                                </p>
                                <div className="flex items-center gap-1 text-primary text-sm font-semibold mt-1">
                                    Read Guide
                                    <IoMdArrowForward className="text-base group-hover:translate-x-1 transition-transform duration-200" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    <AuthorWidget />
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