'use client';

import { partners } from '@/lib/data';
import SectionLabel from '../ui/SectionLabel';
import FadeInUp from '../animations/FadeInUp';
import StaggerChildren from '../animations/StaggerChildren';
import { staggerItem } from '../animations/StaggerChildren';
import { motion } from 'framer-motion';

export default function Partners() {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <SectionLabel>Our Partners</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mt-4">
            Partners
          </h2>
        </FadeInUp>

        <StaggerChildren className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={staggerItem}
              className="group flex items-center justify-center w-40 h-20 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              title={partner.name}
            >
              <span className="text-navy-800 font-bold text-sm tracking-[0.15em] uppercase text-center group-hover:text-accent-gold transition-colors duration-500">
                {partner.logoText}
              </span>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
