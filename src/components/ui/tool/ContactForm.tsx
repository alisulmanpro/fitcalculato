'use client';

import React from 'react';

export default function ContactForm() {
  return (
    <div className="w-full max-w-4xl mt-12 bg-surface-container rounded-2xl p-6 md:p-8 border border-outline-variant shadow-sm">
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="font-headline-lg text-headline-lg text-on-background">Have Feedback?</h2>
        <p className="text-on-surface-variant text-sm">
          Let us know how we can improve this calculator or if you have any questions.
        </p>
      </div>

      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-label-sm text-on-surface-variant">Name</label>
            <input 
              type="text" 
              id="name" 
              className="bg-surface border border-outline px-4 py-3 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-label-sm text-on-surface-variant">Email</label>
            <input 
              type="email" 
              id="email" 
              className="bg-surface border border-outline px-4 py-3 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="comment" className="font-label-sm text-on-surface-variant">Comment</label>
          <textarea 
            id="comment" 
            rows={4}
            className="bg-surface border border-outline px-4 py-3 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-y"
            placeholder="Share your thoughts..."
          />
        </div>

        <button 
          type="submit" 
          className="mt-2 w-full md:w-auto md:self-end bg-primary hover:bg-primary/90 text-on-primary font-label-lg py-3 px-8 rounded-lg transition-colors shadow-sm"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
