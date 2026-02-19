import SectionLabel from './SectionLabel';

interface SectionHeadingProps {
  label: string;
  title: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({ label, title, light, centered }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <SectionLabel light={light}>{label}</SectionLabel>
      <h2
        className={`font-serif text-3xl sm:text-4xl mt-4 ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
