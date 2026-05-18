import AdPlaceholder from '../ads/AdPlaceholder';
import Link from 'next/link';
import { MdMedicalServices, MdArrowRight } from "react-icons/md";

export default function ToolSidebar() {
  return (
    <aside className="md:col-span-3 flex flex-col gap-6">
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
      <AdPlaceholder format="skyscraper" className='hidden md:flex'/>
      <AdPlaceholder format="inFeed" className='md:hidden' />

      
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
