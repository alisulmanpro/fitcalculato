"use client";
import React, { useState, useEffect } from 'react';

const reviews = [
  {
    text: "The TDEE precision here is unmatched. I use these tools exclusively to map out nutrition plans for my elite athletes.",
    author: "Dr. Sarah M., Performance Coach",
  },
  {
    text: "I've tried many fitness calculators, but the Cardio & Endurance tools on this site are the most accurate I've found for marathon prep.",
    author: "Jason T., Marathon Runner",
  },
  {
    text: "As a personal trainer, having a reliable TDEE and macro calculator in one place saves me hours every week.",
    author: "Elena R., Certified PT",
  },
  {
    text: "The endurance pacing calculator completely changed my training approach. I finally hit my sub-4 hour marathon goal!",
    author: "Mark D., Amateur Athlete",
  },
  {
    text: "Clean interface, incredibly accurate results. The TDEE tool helped me finally break through my weight loss plateau.",
    author: "Rachel K., Fitness Enthusiast",
  },
  {
    text: "These tools take the guesswork out of nutrition. The evidence-based methodology gives me confidence in the numbers.",
    author: "Dr. James L., Sports Nutritionist",
  },
  {
    text: "I recommend this site to all my clients. The simplicity of the cardio calculators makes it easy for beginners to understand their zones.",
    author: "Sophie W., Triathlon Coach",
  },
  {
    text: "The precision of the daily energy expenditure tool is phenomenal. It accounted for my specific activity levels perfectly.",
    author: "Michael B., Bodybuilder",
  },
  {
    text: "Finally, a fitness calculator that doesn't overwhelm you with ads. Just straightforward, accurate, and easy to use tools.",
    author: "Amanda H., Crossfit Athlete",
  },
  {
    text: "The heart rate zone calculator helped me optimize my recovery days. Crucial tools for anyone serious about their training.",
    author: "David C., Cycling Coach",
  },
];

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [isClient, setIsClient] = useState(false);

  // Handle client-side logic to avoid hydration mismatch and setup resize listener
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setIsClient(true);
    }, 0);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  // Autoplay logic
  useEffect(() => {
    if (!isClient) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(timer);
  }, [totalSlides, isClient]);

  // Group reviews into slides
  const slides = [];
  for (let i = 0; i < reviews.length; i += itemsPerSlide) {
    slides.push(reviews.slice(i, i + itemsPerSlide));
  }

  if (!isClient) {
    return <div className="w-full py-10 min-h-75"></div>; // Skeleton/empty state during SSR
  }

  return (
    <div className="w-full py-10 overflow-hidden relative max-w-7xl mx-auto">
      <div 
        className="flex transition-transform duration-700 ease-in-out w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="w-full shrink-0 flex justify-center gap-6 px-4">
            {slide.map((review, reviewIndex) => (
              <div key={reviewIndex} className="card bg-base-100 shadow-sm w-full md:w-87.5 lg:w-96 border border-base-200">
                <div className="card-body">
                  <div className="flex gap-1 text-success mb-2">
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  </div>
                  <p className="italic text-base-content/80 mb-4 min-h-20">
                    "{review.text}"
                  </p>
                  <h3 className="font-bold mt-auto">— {review.author}</h3>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Pagination indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-primary w-6' : 'bg-base-300'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
