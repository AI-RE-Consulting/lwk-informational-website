export interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export interface TeamMember {
  name: string;
  title: string;
  division: 'Acquisitions' | 'Asset Management';
  bio: string;
  email: string;
  linkedin: string;
}

export interface PressArticle {
  headline: string;
  date: string;
  excerpt: string;
  url: string;
  imageUrl?: string;
}

export interface Partner {
  name: string;
  logoText: string;
  url?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
