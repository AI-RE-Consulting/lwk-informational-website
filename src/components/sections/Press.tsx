'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { pressArticles } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import PressCard from '../ui/PressCard';
import FadeInUp from '../animations/FadeInUp';

export default function Press() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 10);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
  }, []);

  useEffect(() => {
    updateScrollState();
  }, [updateScrollState]);

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -400 : 400,
      behavior: 'smooth',
    });
  };

  return (
    <section id="press" className="section-padding bg-navy-900">
      <div className="section-container">
        <FadeInUp className="mb-14">
          <SectionHeading label="In The News" title="Press" light />
        </FadeInUp>
      </div>

      {/* Horizontal scroll container with carousel affordances */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          <div className="flex gap-6 pb-4 pl-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pr-0">
            {pressArticles.map((article, i) => (
              <PressCard key={article.headline} article={article} index={i} />
            ))}
            {/* Spacer so last card peeks from edge */}
            <div className="flex-shrink-0 w-4" aria-hidden="true" />
          </div>
        </div>

        {/* Left gradient fade */}
        {!atStart && (
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-900 to-transparent"
            aria-hidden="true"
          />
        )}

        {/* Right gradient fade */}
        {!atEnd && (
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-900 to-transparent"
            aria-hidden="true"
          />
        )}

        {/* Left arrow button */}
        {!atStart && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-800/80 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-accent-gold/50 hover:bg-navy-700 transition-all duration-200 backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Right arrow button */}
        {!atEnd && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-800/80 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-accent-gold/50 hover:bg-navy-700 transition-all duration-200 backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
