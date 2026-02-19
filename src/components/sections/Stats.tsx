'use client';

import { stats } from '@/lib/data';
import CountUp from '../ui/CountUp';
import FadeInUp from '../animations/FadeInUp';

export default function Stats() {
  return (
    <section id="stats" className="bg-navy-800 section-padding-compact">
      <div className="section-container">
        <FadeInUp>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center border-t-2 border-accent-gold/30 pt-6">
                <dd className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white">
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
                <dt className="text-white/70 text-sm mt-2 tracking-[0.15em] uppercase">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </FadeInUp>
        <p className="text-white/40 text-xs mt-10 tracking-[0.15em]">*As of Q1 2026</p>
      </div>
    </section>
  );
}
