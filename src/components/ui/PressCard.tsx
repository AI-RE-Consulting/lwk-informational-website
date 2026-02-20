'use client';

import { motion } from 'framer-motion';
import { PressArticle } from '@/types';

interface PressCardProps {
  article: PressArticle;
  index: number;
}

export default function PressCard({ article, index }: PressCardProps) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 30, y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex-shrink-0 w-[340px] md:w-[380px] bg-navy-700/50 border border-white/10 rounded-sm p-8 hover:bg-navy-700/80 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 block snap-start"
    >
      <p className="text-accent-gold/70 text-xs tracking-[0.15em] uppercase">{article.date}</p>
      <h3 className="font-serif text-lg text-white mt-3 leading-snug group-hover:text-accent-gold/90 transition-colors">
        {article.headline}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed mt-4">{article.excerpt}</p>
      <span className="inline-block mt-6 text-sm text-accent-gold tracking-[0.15em] font-medium group-hover:translate-x-1 transition-transform">
        Read More →
      </span>
    </motion.a>
  );
}
