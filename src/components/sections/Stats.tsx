'use client';

import { stats } from '@/lib/data';
import CountUp from '../ui/CountUp';
import FadeInUp from '../animations/FadeInUp';

export default function Stats() {
  return (
    <section id="stats" className="bg-navy-800 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white">
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className="text-white/50 text-sm mt-2 tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
        <p className="text-white/25 text-xs mt-10 tracking-wide">*As of Q1 2026</p>
      </div>
    </section>
  );
}
