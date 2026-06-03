"use client"

import { MdSearch } from "react-icons/md";
import { useState } from "react";
import SearchModal from "../SearchModal";

export default function HeroSection() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-6">
          Ultimate Fitness & Health Calculators to Reach Your Goals
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
          Access a comprehensive directory of clinical-grade tools. From basic BMI to advanced tracking for GLP-1 and Zone 2 training, optimize your health journey today.
        </p>
        <div className="relative max-w-2xl mx-auto group shadow-lg shadow-surface-variant/50 rounded-full cursor-pointer" onClick={() => setIsSearchOpen(true)}>
          <MdSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-primary text-[28px]" />
          <input 
            type="text" 
            placeholder="Search calculators..." 
            className="w-full pl-16 pr-8 py-5 bg-surface-container-lowest border border-outline-variant rounded-full font-body-lg text-body-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline transition-shadow"
            readOnly
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary-container transition-colors">
            Search
          </button>
        </div>
      </section>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
