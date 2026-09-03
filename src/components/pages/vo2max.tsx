import React from 'react';
import Image from "next/image";
import MarkdownViewer from '@/lib/MarkdownViewer';
import AuthorWidget from '../AuthorWidget';
import CalculatorHero from '../calculators-hero';
import ToolSidebar from '../ui/tool/ToolSidebar';
import { IoMdArrowForward } from 'react-icons/io';
import Link from 'next/link';
import Vo2MaxCalculatorForm from '../ui/tool/Vo2MaxCalculatorForm';
import { LuBookOpen } from 'react-icons/lu';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Vo2MaxCalculator({ slug }: { slug: string }) {
  return (
    <main className="w-full">
      <CalculatorHero title="VO2 Max Calculator: Estimate Your Cardiorespiratory Fitness Score" image="/vo2.jpg" />
      <div className="grid grid-cols-1 md:grid-cols-7 gap-5 p-5 md:p-10 mx-auto">
        <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
          <div className="bg-base-200 border border-base-300 rounded-xl p-5 space-y-4">
            <p className="text-base-content/90 leading-relaxed text-sm md:text-base">
              If you've ever seen a "VO2 Max" number pop up on your Apple Watch, Garmin, or Whoop and wondered what it actually means, you're not alone. It's one of the most searched fitness metrics online, and for good reason. VO2 max is the single number that tells you how efficiently your heart, lungs, and muscles work together under maximum effort. <br />
              Our <b>VO2 max calculator</b> gives you a fast, evidence-based estimate of your cardiorespiratory fitness using a validated non-exercise or Cooper test formula, so you don't need a lab, a mask, or a treadmill to get a useful starting number.<br />
              Below, you'll find the formula behind the calculator, a step-by-step breakdown of how to calculate VO2 max yourself, and guidance on interpreting your score against normative charts for your age and sex.
            </p>
          </div>

          <Vo2MaxCalculatorForm />

          <MarkdownViewer filePath={`/public/markdown/${slug}/docs.md`} />

          {/* Guide Card Section */}
          <div className="flex flex-col gap-3">
            {/* Section Heading */}
            <div className="flex items-center gap-2">
              <LuBookOpen className="text-primary text-4xl" />
              <h2 className="text-3xl font-bold text-base-content tracking-wide uppercase">Guide</h2>
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
                  VO2 Max Guide
                </h3>
                <p className="text-sm text-base-content/60 leading-relaxed line-clamp-2">
                  Ask doctors which single number best forecasts overall lifespan, and more now point to one metric: VO2 max. Not cholesterol. Not resting heart rate. Not even blood pressure. It reflects your peak aerobic capacity.
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
