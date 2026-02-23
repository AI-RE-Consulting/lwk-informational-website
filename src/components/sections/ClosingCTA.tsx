import Button from '../ui/Button';
import FadeInUp from '../animations/FadeInUp';
import { EXTERNAL_URLS } from '@/lib/constants';
import { closingCta } from '@/lib/content';

export default function ClosingCTA() {
  return (
    <section className="py-20 lg:py-28 bg-navy-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            {closingCta.heading}
          </h2>
          <p className="text-white/70 mt-4 max-w-lg mx-auto leading-relaxed">
            {closingCta.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button href={EXTERNAL_URLS.investorPortal} variant="primary" target="_blank" rel="noopener noreferrer">
              {closingCta.portalButton}
            </Button>
            <Button href={EXTERNAL_URLS.linkedin} variant="outline" target="_blank" rel="noopener noreferrer">
              {closingCta.linkedinButton}
            </Button>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
