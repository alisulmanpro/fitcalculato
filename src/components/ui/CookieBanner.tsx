"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-base-300 border-t border-base-200 p-4 shadow-lg z-50 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-base-content max-w-4xl">
        We use cookies to enhance your experience, analyze site traffic, and serve targeted advertisements. 
        By continuing to visit this site you agree to our use of cookies. 
        Learn more in our <Link href="/privacy" className="text-primary hover:underline font-bold">Privacy Policy</Link>.
      </div>
      <div className="flex gap-2 shrink-0">
        <button onClick={acceptCookies} className="btn btn-primary btn-sm rounded-lg font-bold">
          Accept All
        </button>
      </div>
    </div>
  );
}
