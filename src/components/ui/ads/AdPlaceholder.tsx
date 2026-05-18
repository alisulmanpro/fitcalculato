import React from 'react';

type AdPlaceholderProps = {
  format: 'leaderboard' | 'mobileBanner' | 'native' | 'skyscraper' | 'inFeed';
  className?: string;
};

export default function AdPlaceholder({ format, className = '' }: AdPlaceholderProps) {
  if (format === 'leaderboard') {
    return (
      <div className={`w-full max-w-[728px] h-[90px] mx-auto bg-surface-container-low border border-outline-variant rounded-lg flex items-center justify-center relative ${className}`}>
        <span className="absolute top-2 right-3 font-label-sm text-label-sm text-outline">Sponsored</span>
        <span className="font-body-md text-body-md text-on-surface-variant">AdSense Placeholder (728x90)</span>
      </div>
    );
  }

  if (format === 'mobileBanner') {
    return (
      <div className={`w-[320px] h-[50px] mx-auto bg-surface-container flex items-center justify-center border border-dashed border-outline-variant text-on-surface-variant font-label-md text-label-md relative ${className}`}>
        <span className="absolute top-1 right-2 font-label-sm text-[10px] text-outline">Sponsored</span>
        <span>Mobile Banner (320x50)</span>
      </div>
    );
  }

  if (format === 'inFeed') {
    return (
      <div className={`w-full h-[120px] bg-surface-container-low border border-outline-variant rounded-xl flex items-center justify-center relative ${className}`}>
        <span className="absolute top-3 right-4 font-label-sm text-label-sm text-outline">Sponsored</span>
        <span className="font-body-md text-body-md text-on-surface-variant">In-Feed AdSense Placeholder</span>
      </div>
    );
  }
  
  if (format === 'native') {
    return (
      <div className={`w-full bg-surface-container flex items-center justify-center border border-dashed border-outline-variant text-on-surface-variant font-label-md text-label-md min-h-[90px] ${className}`}>
        [ AdSense Native / In-Article Ad ]
      </div>
    );
  }

  if (format === 'skyscraper') {
    return (
      <div className={`w-[300px] h-[600px] bg-surface-container-low border border-outline-variant rounded-xl flex items-center justify-center relative ${className}`}>
        <span className="absolute top-3 right-4 font-label-sm text-label-sm text-outline">Sponsored</span>
        <span className="font-body-md text-body-md text-on-surface-variant text-center px-4">Sidebar AdSense<br/>Placeholder (300x600)</span>
      </div>
    );
  }

  return null;
}
