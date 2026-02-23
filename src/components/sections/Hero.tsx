'use client';

import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import { EXTERNAL_URLS } from '@/lib/constants';
import { hero } from '@/lib/content';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=2000&q=80')`,
          filter: 'grayscale(100%)',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/20" />

      {/* Content */}
      <div className="relative z-10 section-container w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionLabel light>{hero.label}</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mt-5 leading-tight"
          >
            {hero.headingLine1}
            <br />
            {hero.headingLine2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/70 text-lg mt-6 leading-relaxed max-w-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Button href="#about" variant="outlineLight">
              {hero.exploreButton}
            </Button>
            <Button href={EXTERNAL_URLS.investorPortal} variant="primary" target="_blank" rel="noopener noreferrer">
              {hero.portalButton}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
