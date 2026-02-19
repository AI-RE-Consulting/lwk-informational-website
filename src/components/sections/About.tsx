'use client';

import { aboutDescription, focusAreas } from '@/lib/data';
import SectionLabel from '../ui/SectionLabel';
import FadeInLeft from '../animations/FadeInLeft';
import FadeInRight from '../animations/FadeInRight';
import FadeInUp from '../animations/FadeInUp';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <FadeInLeft>
            <SectionLabel>About LWK</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mt-4 leading-snug">
              Focused on Value Creation in Los Angeles Multifamily
            </h2>
            <p className="text-gray-600 leading-relaxed mt-6">{aboutDescription}</p>

            <div className="mt-10 space-y-6">
              {focusAreas.map((area) => (
                <div key={area.title} className="border-l-2 border-accent-gold pl-5">
                  <h3 className="font-semibold text-gray-900">{area.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">{area.description}</p>
                </div>
              ))}
            </div>
          </FadeInLeft>

          {/* Right: Image */}
          <FadeInRight>
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent-gold/20 rounded-sm" />
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                alt="Modern apartment building in Los Angeles"
                className="relative w-full h-[400px] lg:h-[520px] object-cover rounded-sm grayscale"
              />
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
}
