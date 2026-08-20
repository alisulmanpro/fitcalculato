import Link from 'next/link';
import Image from 'next/image';
import { MdMedicalServices, MdArrowRight } from "react-icons/md";
import { IoMdArrowForward } from 'react-icons/io';
import { LuBookOpen } from 'react-icons/lu';

export default function ToolSidebar() {
  return (
    <aside className="md:col-span-3 flex flex-col gap-6">

      {/* Guide Card */}
      <div className="flex flex-col gap-3">
        {/* Section Heading */}
        <div className="flex items-center gap-2 px-1">
          <LuBookOpen className="text-primary text-lg" />
          <h2 className="text-sm font-bold text-base-content tracking-widest uppercase">Guide</h2>
        </div>

        <Link
          href="/calculators/zone-2-heart-rate-calculator/guide"
          className="group flex gap-3 bg-base-100 border border-base-300 rounded-xl p-3 hover:shadow-md hover:border-primary/40 transition-all duration-300"
        >
          {/* Thumbnail */}
          <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
            <Image
              src="/guidance.jpg"
              alt="Zone 2 Heart Rate Guide"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center gap-1 flex-1 min-w-0">
            <h3 className="font-bold text-sm text-base-content leading-snug group-hover:text-primary transition-colors duration-200">
              Zone 2 Heart Rate Guide
            </h3>
            <p className="text-xs text-base-content/60 leading-relaxed line-clamp-2">
              Zone 2 training evolved from a niche physiology term into a fitness podcast fixture. Discover the real science.
            </p>
            <div className="flex items-center gap-1 text-primary text-xs font-semibold mt-0.5">
              Read Guide
              <IoMdArrowForward className="group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </Link>
      </div>

      {/* Contextual CTA / Related Content Widget */}
      <div className="bg-primary-container rounded-xl p-6 text-on-primary-container flex flex-col gap-4 shadow-sm border border-primary-fixed">
        <div className="w-12 h-12 bg-on-primary-container text-primary-container rounded-full flex items-center justify-center mb-2 shrink-0">
          <MdMedicalServices className="text-2xl" />
        </div>
        <h3 className="font-headline-md text-[20px] font-bold">Need Clinical Guidance?</h3>
        <p className="font-body-md text-[14px] leading-relaxed opacity-90">
          If you have underlying cardiovascular conditions, general formulas may not apply. Connect with a certified sports cardiologist or endurance coach in our directory.
        </p>
        <Link href="/specialists" className="mt-2 w-full bg-on-primary-container text-primary-container font-label-md text-label-md font-semibold h-10 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
          Find a Specialist
        </Link>
      </div>
      
      {/* AdSense Placement 3: Sidebar Skyscraper */}
      
      {/* Mini List Widget */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex flex-col gap-4">
        <h4 className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wide border-b border-outline-variant pb-3">Popular Calculators</h4>
        <ul className="flex flex-col gap-3">
          <li>
            <Link href="/tools/vo2-max" className="font-body-md text-body-md text-primary hover:underline flex items-center gap-1">
              <MdArrowRight className="text-lg shrink-0" /> VO2 Max Predictor
            </Link>
          </li>
          <li>
            <Link href="/tools/macros" className="font-body-md text-body-md text-primary hover:underline flex items-center gap-1">
              <MdArrowRight className="text-lg shrink-0" /> Macros for Endurance
            </Link>
          </li>
          <li>
            <Link href="/tools/sweat-rate" className="font-body-md text-body-md text-primary hover:underline flex items-center gap-1">
              <MdArrowRight className="text-lg shrink-0" /> Sweat Rate Calculator
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
