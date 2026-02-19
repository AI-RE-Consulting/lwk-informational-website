'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerItem } from '../animations/StaggerChildren';
import { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      className="bg-white rounded-sm border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h3 className="font-serif text-xl text-gray-900">{member.name}</h3>
      <p className="text-gray-600 text-sm mt-1 tracking-wide">{member.title}</p>

      <div className="flex gap-3 mt-4">
        <a
          href={`mailto:${member.email}`}
          aria-label={`Email ${member.name}`}
          className="text-navy-800 hover:text-accent-gold transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} LinkedIn`}
          className="text-navy-800 hover:text-accent-gold transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-5 text-sm text-accent-gold hover:text-accent-gold/80 font-medium tracking-wide transition-colors cursor-pointer"
      >
        {expanded ? '— Close' : '+ Read Bio'}
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">
          {member.bio}
        </p>
      </motion.div>
    </motion.div>
  );
}
