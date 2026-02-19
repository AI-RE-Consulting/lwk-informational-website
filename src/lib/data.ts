import { Stat, TeamMember, PressArticle, Partner } from '@/types';

export const stats: Stat[] = [
  { value: 150, prefix: '$', suffix: 'M+', label: 'GAV' },
  { value: 34, suffix: '', label: 'Buildings' },
  { value: 450, suffix: '+', label: 'Units Acquired' },
  { value: 165, suffix: '+', label: 'Units in Development' },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Austin Nissly',
    title: 'Co-Founder, Partner',
    division: 'Acquisitions',
    bio: 'Austin co-founded LWK Partners to focus on value-add multifamily acquisitions in Southern California. He leads the firm\'s acquisition strategy, sourcing and underwriting investment opportunities across the Los Angeles market. Prior to LWK, Austin worked in commercial real estate investment and finance, developing expertise in multifamily asset evaluation and capital structuring.',
    email: 'austin@lwkpartners.com',
    linkedin: 'https://www.linkedin.com/in/austinnissly/',
  },
  {
    name: 'Matt Carney',
    title: 'Co-Founder, Partner',
    division: 'Acquisitions',
    bio: 'Matt co-founded LWK Partners and oversees the firm\'s acquisition execution and investor relations. He brings deep experience in real estate transactions, due diligence, and capital markets. Matt works closely with capital partners to structure investments and manage the firm\'s growing portfolio of value-add multifamily assets in Southern California.',
    email: 'matt@lwkpartners.com',
    linkedin: 'https://www.linkedin.com/in/mattcarney1/',
  },
  {
    name: 'Andrew Altman',
    title: 'Co-Founder, Partner',
    division: 'Asset Management',
    bio: 'Andrew co-founded LWK Partners and leads the firm\'s asset management and value-add renovation programs. He oversees property operations, capital improvement projects, and new unit development initiatives across the portfolio. Andrew\'s hands-on approach to asset management drives operational improvements and maximizes value creation for investors.',
    email: 'andrew@lwkpartners.com',
    linkedin: 'https://www.linkedin.com/in/andrewaltman1/',
  },
  {
    name: 'Matt Osborn',
    title: 'Co-Founder, Partner',
    division: 'Asset Management',
    bio: 'Matt co-founded LWK Partners and manages the firm\'s development pipeline and construction oversight. He specializes in identifying and executing density-addition opportunities, including ADU development and unit conversions. Matt\'s expertise in construction management and development ensures projects are delivered on time and within budget.',
    email: 'matt.osborn@lwkpartners.com',
    linkedin: 'https://www.linkedin.com/in/mattosborn1/',
  },
];

export const pressArticles: PressArticle[] = [
  {
    headline: 'LWK Partners, Cypress, Sabal Acquire L.A. Workforce Housing Portfolio for $30M',
    date: 'January 7th, 2026',
    excerpt: 'The new joint venture has plans to add workforce housing units through accessory dwelling unit development across the acquired portfolio in Los Angeles.',
    url: 'https://product.costar.com/home/news/shared/1378730609',
  },
  {
    headline: 'LWK, Cypress Secure $100M Debt for Multifamily ADU Strategy',
    date: 'November 11, 2025',
    excerpt: 'LWK Partners and Cypress Equity Investments plan to increase the density of multifamily properties they acquire throughout Southern California.',
    url: 'https://www.multihousingnews.com/lwk-cypress-secure-100m-debt-for-multifamily-adu-strategy/',
  },
  {
    headline: 'Cypress Equity Investments and LWK Partners Form Joint Venture to Pursue Workforce Housing Density Addition Strategy',
    date: 'January 27th, 2025',
    excerpt: 'CEI and LWK Partnership Combines Development and Acquisitions Expertise to Add Density to Multifamily Assets.',
    url: 'https://www.businesswire.com/news/home/20250127042406/en/',
  },
  {
    headline: 'LWK Partners Completes Acquisition of 12-Unit Multifamily Property in West Adams',
    date: 'September 15, 2024',
    excerpt: 'LWK Partners has acquired a 12-unit multifamily property in the West Adams neighborhood of Los Angeles, continuing its strategy of targeting undermanaged assets.',
    url: '#',
  },
  {
    headline: 'Southern California Multifamily Market Shows Strong Fundamentals for Value-Add Strategy',
    date: 'June 3, 2024',
    excerpt: 'Market conditions continue to favor operators focused on workforce housing and density additions in supply-constrained Los Angeles submarkets.',
    url: '#',
  },
];

export const partners: Partner[] = [
  { name: 'Sabal Investment Holdings', logoText: 'SABAL' },
  { name: 'Ascent Developer Solutions', logoText: 'ASCENT' },
  { name: 'Green Development Company', logoText: 'GREEN DEV' },
  { name: 'The Pappas Group', logoText: 'PAPPAS GROUP' },
  { name: 'NPS Management', logoText: 'NPS' },
];

export const aboutDescription = `LWK Partners ("LWK") is a real estate private equity firm focused on the acquisition and operation of value-add multifamily assets in Southern California, with a concentration in Los Angeles. Our approach targets undermanaged assets with multiple levers to create value through operational improvements, value-add renovations, and opportunities to add density via new unit development. We prioritize situations where new unit development economics allow us to deliver naturally occurring affordable housing in supply constrained communities.`;

export const focusAreas = [
  {
    title: 'Operational Improvements',
    description: 'Implementing professional management and optimizing operations to increase NOI across acquired assets.',
  },
  {
    title: 'Value-Add Renovations',
    description: 'Strategic unit and common area renovations that drive rent growth while maintaining workforce affordability.',
  },
  {
    title: 'New Unit Development',
    description: 'Adding density through ADU construction and unit conversions to maximize property value and housing supply.',
  },
];
