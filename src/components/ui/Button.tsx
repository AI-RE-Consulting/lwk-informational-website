import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'outlineLight';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function Button({ children, href, variant = 'primary', size = 'md', className = '', onClick, target, rel }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold active:scale-[0.98]';

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const variants = {
    primary:
      'bg-accent-gold text-white hover:bg-accent-gold/85 border border-accent-gold',
    outline:
      'border border-white/30 text-white hover:bg-white/10 hover:border-white/60',
    outlineLight:
      'border border-accent-gold/40 text-accent-gold hover:bg-accent-gold hover:text-white',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
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
