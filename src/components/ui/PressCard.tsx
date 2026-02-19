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
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      className="group flex-shrink-0 w-[340px] md:w-[380px] bg-navy-700/50 border border-white/10 rounded-sm p-8 hover:bg-navy-700/80 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 block"
    >
      <p className="text-accent-gold/70 text-xs tracking-wider uppercase">{article.date}</p>
      <h3 className="font-serif text-lg text-white mt-3 leading-snug group-hover:text-accent-gold/90 transition-colors">
        {article.headline}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mt-4">{article.excerpt}</p>
      <span className="inline-block mt-6 text-sm text-accent-gold tracking-wider font-medium group-hover:translate-x-1 transition-transform">
        Read More →
      </span>
    </motion.a>
  );
}
