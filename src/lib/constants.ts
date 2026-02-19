import { NavLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'TRACK RECORD', href: '#stats' },
  { label: 'TEAM', href: '#team' },
  { label: 'PARTNERS', href: '#partners' },
  { label: 'PRESS', href: '#press' },
];

export const SECTION_IDS = {
  hero: 'hero',
  stats: 'stats',
  about: 'about',
  team: 'team',
  partners: 'partners',
  press: 'press',
} as const;

export const EXTERNAL_URLS = {
  investorPortal: 'https://lwkpartners.investorportal.co',
  linkedin: 'https://www.linkedin.com/company/lwk-partners/',
} as const;
