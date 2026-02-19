'use client';

import { partners } from '@/lib/data';
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
          <SectionHeading label="Our Partners" title="Partners" centered />
          <p className="text-gray-600 text-center mt-4 text-base">Trusted capital and operating partners.</p>
        </FadeInUp>

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={staggerItem}
              className="group flex items-center justify-center border border-gray-200 px-8 py-5 hover:border-accent-gold/40 hover:shadow-sm transition-all duration-300"
              title={partner.name}
            >
              <span className="text-navy-800 font-serif text-base text-center group-hover:text-accent-gold transition-colors duration-300">
                {partner.logoText}
              </span>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
