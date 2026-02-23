import { EXTERNAL_URLS } from '@/lib/constants';
import { footer } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="section-container py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left: Logo + tagline */}
          <div>
            <span className="text-white font-serif text-2xl font-bold tracking-[0.15em]">{footer.logoText}</span>
            <p className="text-white/60 text-sm mt-3 max-w-xs leading-relaxed">
              {footer.tagline}
            </p>
            <a
              href={EXTERNAL_URLS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LWK Partners LinkedIn"
              className="inline-block mt-5 text-white/60 hover:text-accent-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-white/40 text-xs tracking-[0.15em]">
            &copy; {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
