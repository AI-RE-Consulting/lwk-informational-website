import Button from '../ui/Button';
import FadeInUp from '../animations/FadeInUp';
import { EXTERNAL_URLS } from '@/lib/constants';

export default function ClosingCTA() {
  return (
    <section className="py-20 lg:py-28 bg-navy-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Ready to Learn More About LWK Partners?
          </h2>
          <p className="text-white/70 mt-4 max-w-lg mx-auto leading-relaxed">
            Connect with our team to explore investment opportunities in Southern California multifamily real estate.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button href={EXTERNAL_URLS.investorPortal} variant="primary" target="_blank" rel="noopener noreferrer">
              Investor Portal
            </Button>
            <Button href={EXTERNAL_URLS.linkedin} variant="outline" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Button>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
