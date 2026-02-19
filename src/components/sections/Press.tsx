'use client';

import { pressArticles } from '@/lib/data';
import SectionLabel from '../ui/SectionLabel';
import PressCard from '../ui/PressCard';
import FadeInUp from '../animations/FadeInUp';

export default function Press() {
  return (
    <section id="press" className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInUp className="mb-14">
          <SectionLabel light>In The News</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mt-4">
            Press
          </h2>
        </FadeInUp>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-6 lg:px-8 pb-4 max-w-7xl mx-auto">
          {pressArticles.map((article, i) => (
            <PressCard key={article.headline} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
