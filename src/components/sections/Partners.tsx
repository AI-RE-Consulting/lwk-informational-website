'use client';

import { partners } from '@/lib/data';
import { partnersSection } from '@/lib/content';
import SectionHeading from '../ui/SectionHeading';
import FadeInUp from '../animations/FadeInUp';
import StaggerChildren from '../animations/StaggerChildren';
import { staggerItem } from '../animations/StaggerChildren';
import { motion } from 'framer-motion';

export default function Partners() {
  return (
    <section id="partners" className="section-padding bg-white">
      <div className="section-container">
        <FadeInUp className="mb-12">
          <SectionHeading label={partnersSection.label} title={partnersSection.title} centered />
          <p className="text-gray-600 text-center mt-4 text-base">{partnersSection.description}</p>
        </FadeInUp>

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={staggerItem}
              className="group flex items-center justify-center border border-gray-200 px-8 py-5 hover:border-accent-gold/40 hover:shadow-sm transition-all duration-300 min-h-[80px]"
              title={partner.name}
            >
              {partner.logoSrc ? (
                <img
                  src={partner.logoSrc}
                  alt={partner.name}
                  className={`${partner.logoClassName || 'max-h-10'} w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300`}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <span className={`text-navy-800 font-serif text-base text-center group-hover:text-accent-gold transition-colors duration-300${partner.logoSrc ? ' hidden' : ''}`}>
                {partner.logoText}
              </span>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
