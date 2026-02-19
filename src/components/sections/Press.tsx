'use client';

import { pressArticles } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import PressCard from '../ui/PressCard';
import FadeInUp from '../animations/FadeInUp';

export default function Press() {
  return (
    <section id="press" className="section-padding bg-navy-900">
      <div className="section-container">
        <FadeInUp className="mb-14">
          <SectionHeading label="In The News" title="Press" light />
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
