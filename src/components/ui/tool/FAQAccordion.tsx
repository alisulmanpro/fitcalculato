'use client';

import React, { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';

const faqs = [
  {
    question: 'Is this online calculator as accurate as a lab test?',
    answer: 'No online estimation can perfectly match the precision of a clinical cardiopulmonary exercise test (CPET) performed in a lab with a mask measuring the exact volume of gases you inhale and exhale. However, estimation methods like the Uth-Sørensen-Overgaard-Pedersen formula or running tests are validated by sports scientists and provide a highly reliable baseline for tracking your progress and understanding your general fitness age.'
  },
  {
    question: 'What is considered a "good" VO2 max?',
    answer: 'A "good" score is entirely dependent on your age and sex. For a 35-year-old man, a score of 45 is considered good, while the same score for a 35-year-old woman would be classified as excellent. Generally speaking, scoring in the 50th percentile or above for your specific age and gender bracket indicates a healthy level of cardiovascular fitness.'
  },
  {
    question: 'How long does it take to improve my fitness age?',
    answer: 'While beginners often experience rapid improvements—sometimes seeing noticeable changes within just 4 to 6 weeks of consistent aerobic training—meaningful, long-term reductions in your fitness age take sustained effort over several months. Combining Zone 2 endurance work with targeted HIIT sessions will yield the fastest results.'
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 mt-8">
      <h2 className="font-headline-lg text-headline-lg text-on-background">Frequently Asked Questions</h2>
      <div className="flex flex-col border-t border-outline-variant">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-outline-variant">
              <button 
                onClick={() => toggleAccordion(index)} 
                className="w-full flex justify-between items-center py-5 text-on-background hover:text-primary transition-colors text-left"
              >
                <span className="font-headline-md text-lg pr-4">{faq.question}</span>
                <span className={`transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>
                  <LuChevronDown className="w-5 h-5" />
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-5' : 'max-h-0 opacity-0'}`}
              >
                <div className="text-on-surface-variant leading-relaxed text-sm text-justify">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
