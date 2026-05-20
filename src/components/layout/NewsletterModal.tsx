'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { newsletter } from '@/lib/content';

interface NewsletterModalProps {
  onClose: () => void;
}

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
    // Mailchimp's classic endpoint accepts /subscribe/post-json for JSONP responses.
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

export default function NewsletterModal({ onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-900/85 backdrop-blur-sm p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-modal-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white shadow-2xl border-t-2 border-accent-gold"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close newsletter signup"
          className="absolute top-4 right-4 text-gray-600 hover:text-navy-900 transition-colors p-1 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 py-10">
          <h2
            id="newsletter-modal-title"
            className="font-serif text-2xl text-navy-900 mb-3"
          >
            {newsletter.title}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {newsletter.description}
          </p>

          {status === 'success' ? (
            <p className="text-sm text-navy-800 bg-gray-50 border-l-2 border-accent-gold px-4 py-3">
              {message}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <label
                htmlFor="newsletter-email"
                className="block text-xs font-semibold tracking-[0.15em] text-navy-900 mb-2"
              >
                {newsletter.emailLabel}
              </label>
              <input
                ref={inputRef}
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={newsletter.emailPlaceholder}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 border border-gray-200 text-sm text-navy-900 placeholder:text-gray-600/60 focus:border-accent-gold focus:outline-none transition-colors disabled:opacity-60"
              />

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
                <p className="mt-3 text-xs text-red-600">{message}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-5 w-full px-5 py-3 bg-accent-gold text-white text-xs font-semibold tracking-[0.15em] hover:bg-accent-gold/85 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === 'submitting' ? newsletter.submittingButton : newsletter.submitButton}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
