interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase ${
        light ? 'text-accent-gold/80' : 'text-accent-gold'
      }`}
    >
      {children}
    </span>
  );
}
