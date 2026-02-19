'use client';

import { motion } from 'framer-motion';
import { NAV_LINKS, EXTERNAL_URLS } from '@/lib/constants';

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] bg-navy-900/98 flex flex-col items-center justify-center"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white p-2 cursor-pointer"
        aria-label="Close menu"
      >
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <nav className="flex flex-col items-center gap-8">
        {NAV_LINKS.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={onClose}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.07 }}
            className="text-white text-lg font-semibold tracking-[0.15em] hover:text-accent-gold transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
        <motion.a
          href={EXTERNAL_URLS.investorPortal}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 px-8 py-3 border border-accent-gold text-accent-gold text-sm font-semibold tracking-[0.15em] hover:bg-accent-gold hover:text-white transition-all duration-300"
        >
          INVESTOR PORTAL
        </motion.a>
      </nav>
    </motion.div>
  );
}
