'use client';

import { aboutDescription, focusAreas } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import FadeInLeft from '../animations/FadeInLeft';
import FadeInRight from '../animations/FadeInRight';
import FadeInUp from '../animations/FadeInUp';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <FadeInLeft>
            <SectionHeading label="About LWK" title="Focused on Value Creation in Los Angeles Multifamily" />
            <p className="text-gray-600 leading-relaxed mt-6">{aboutDescription}</p>

            <ul role="list" className="mt-10 space-y-6">
              {focusAreas.map((area) => (
                <li key={area.title} className="border-l-2 border-accent-gold pl-5">
                  <h3 className="font-semibold text-gray-900">{area.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">{area.description}</p>
                </li>
              ))}
            </ul>
          </FadeInLeft>

          {/* Right: Image */}
          <FadeInRight>
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent-gold/20 rounded-sm" />
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                alt="Modern apartment building in Los Angeles"
                width={800}
                height={1067}
                loading="lazy"
                decoding="async"
                className="relative w-full aspect-[3/4] lg:aspect-[4/5] object-cover rounded-sm grayscale"
              />
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
}
