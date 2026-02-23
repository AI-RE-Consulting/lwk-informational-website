import { Stat, TeamMember, PressArticle, Partner, NavLink } from '@/types';
import siteContent from '../../content/site-content.json';

// Metadata
export const metadata = siteContent.metadata;

// Header
export const header = siteContent.header;

// Navigation
export const NAV_LINKS: NavLink[] = siteContent.navigation;

// Hero
export const hero = siteContent.hero;

// Stats
export const stats: Stat[] = siteContent.stats.items;
export const statsFootnote = siteContent.stats.footnote;

// About
export const aboutSection = siteContent.about;
export const aboutDescription = siteContent.about.description;
export const focusAreas = siteContent.about.focusAreas;

// Team
export const teamSection = siteContent.team;
export const teamMembers: TeamMember[] = siteContent.team.members as TeamMember[];

// Partners
export const partnersSection = siteContent.partners;
export const partners: Partner[] = siteContent.partners.items;

// Press
export const pressSection = siteContent.press;
export const pressArticles: PressArticle[] = siteContent.press.articles;

// Closing CTA
export const closingCta = siteContent.closingCta;

// Footer
export const footer = siteContent.footer;

// External URLs
export const EXTERNAL_URLS = siteContent.externalUrls;

// Section IDs (structural, not editable content)
export const SECTION_IDS = {
  hero: 'hero',
  stats: 'stats',
  about: 'about',
  team: 'team',
  partners: 'partners',
  press: 'press',
} as const;
