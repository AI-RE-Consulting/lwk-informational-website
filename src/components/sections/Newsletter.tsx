'use client';

import { useState } from 'react';
import { newsletter } from '@/lib/content';
import SectionHeading from '../ui/SectionHeading';
import FadeInUp from '../animations/FadeInUp';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface MailchimpResponse {
  result: 'success' | 'error';
  msg: string;
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim();
}

function submitToMailchimp(email: string, honeypot: string): Promise<MailchimpResponse> {
  return new Promise((resolve, reject) => {
    const callbackName = `mc_jsonp_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
    const params = new URLSearchParams({
      EMAIL: email,
      [newsletter.honeypotField]: honeypot,
      c: callbackName,
    });
    const url = `${newsletter.mailchimpUrl}&${params.toString()}`;

    const script = document.createElement('script');
    const cleanup = () => {
      delete (window as unknown as Record<string, unknown>)[callbackName];
      script.remove();
    };

    (window as unknown as Record<string, (data: MailchimpResponse) => void>)[callbackName] = (data) => {
      cleanup();
      resolve(data);
    };

    script.src = url;
    script.onerror = () => {
      cleanup();
      reject(new Error('network'));
    };
    document.body.appendChild(script);
  });
}

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting' || !email) return;
    setStatus('submitting');
    setMessage('');
    try {
      const data = await submitToMailchimp(email, honeypot);
      if (data.result === 'success') {
        setStatus('success');
        setMessage(stripHtml(data.msg) || newsletter.successFallback);
      } else {
        setStatus('error');
        setMessage(stripHtml(data.msg) || newsletter.errorFallback);
      }
    } catch {
      setStatus('error');
      setMessage(newsletter.errorFallback);
    }
  };

  return (
    <section id="newsletter" className="section-padding bg-navy-800">
      <div className="section-container">
        <FadeInUp className="max-w-xl mx-auto text-center">
          <SectionHeading label={newsletter.label} title={newsletter.title} light centered />
          <p className="text-white/70 mt-4 leading-relaxed">
            {newsletter.description}
          </p>

          {status === 'success' ? (
            <p className="mt-8 text-sm text-white bg-white/5 border-l-2 border-accent-gold px-4 py-3 text-left">
              {message}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-8">
              <label htmlFor="newsletter-email" className="sr-only">
                {newsletter.emailLabel}
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletter.emailPlaceholder}
                  disabled={status === 'submitting'}
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/15 text-sm text-white placeholder:text-white/40 focus:border-accent-gold focus:outline-none transition-colors disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-6 py-3 bg-accent-gold text-white text-xs font-semibold tracking-[0.15em] hover:bg-accent-gold/85 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'submitting' ? newsletter.submittingButton : newsletter.submitButton}
                </button>
              </div>

              {/* Mailchimp honeypot — must remain visually hidden but accessible to bots. */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input
                  type="text"
                  name={newsletter.honeypotField}
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {status === 'error' && message && (
                <p className="mt-4 text-xs text-red-300 text-left">{message}</p>
              )}
            </form>
          )}
        </FadeInUp>
      </div>
    </section>
  );
}
