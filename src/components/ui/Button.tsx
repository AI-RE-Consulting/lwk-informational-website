import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'outlineLight';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = 'primary', className = '', onClick }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-7 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer';

  const variants = {
    primary:
      'bg-accent-gold text-white hover:bg-accent-gold/90 border border-accent-gold',
    outline:
      'border border-white/30 text-white hover:bg-white/10 hover:border-white/60',
    outlineLight:
      'border border-accent-gold/40 text-accent-gold hover:bg-accent-gold hover:text-white',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
