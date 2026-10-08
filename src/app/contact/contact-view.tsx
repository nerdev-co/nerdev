'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Clock, Globe, Check, Calendar } from 'lucide-react';
import { company } from '@/lib/company';
import { budgetOptions } from '@/lib/pricing';


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.45, ease: 'circOut' } }
};

const infoCards = [
  { icon: Mail, label: 'EMAIL_', value: company.email, href: `mailto:${company.email}`, color: 'var(--orange)' },
  { icon: Clock, label: 'RESPONSE_', value: 'Within 24 hours · Mon–Sat', color: 'var(--text-2)' },
  { icon: Globe, label: 'TIMEZONE_', value: company.timezone, color: 'var(--text-2)' },
  { icon: Calendar, label: 'AVAILABILITY_', value: 'Open for new projects', color: 'var(--green)' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    details: '',
    company: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setError('Something went wrong. Email us directly and we will pick it up.');
        return;
      }

      setSubmitted(true);
    } catch {
      setError('Could not reach the server. Email us directly and we will pick it up.');
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      className="min-h-screen pt-24 pb-20 px-6 lg:px-12"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* HERO */}
        <motion.div variants={itemVariants} className="mb-20 lg:mb-32">
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">{'// GET IN TOUCH'}</span>
          <h1 className="font-sans text-4xl lg:text-6xl font-black mt-4 leading-[0.9] tracking-tight">
            Tell us what you&apos;re building.
          </h1>
          <p className="text-base text-text-2 mt-8 max-w-lg leading-relaxed">
            No pitch deck required. A paragraph is fine. You&apos;ll get a reply within 24 hours,
            and a written proposal within a day of that.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
          {/* LEFT COLUMN - INFO */}
          <motion.div variants={itemVariants}>
            <div className="space-y-3">
              {infoCards.map((card) => (
                <a 
                  key={card.label}
                  href={card.href}
                  className="block bg-surface border border-border p-4 hover:border-orange transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <card.icon className="w-4 h-4" style={{ color: card.color }} />
                    <span className="font-mono text-xs text-text-3 uppercase">{card.label}</span>
                  </div>
                  <span 
                    className="block mt-1 font-mono text-sm" 
                    style={{ color: card.href ? card.color : 'var(--text)' }}
                  >
                    {card.value}
                  </span>
                </a>
              ))}
            </div>
            
            <div className="mt-8 space-y-3">
              <a
                href={company.bookingUrl}
                className="inline-flex items-center gap-2 font-mono text-xs text-text-2 hover:text-orange transition-colors"
              >
                Or book directly →
              </a>
              <div className="font-mono text-[10px] text-text-3 uppercase tracking-wider">
                <Link href="/company" className="hover:text-orange transition-colors">
                  Entity details →
                </Link>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - FORM */}
          <motion.div variants={itemVariants}>
            {submitted ? (
              <div className="bg-surface border border-border p-10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green/10">
                  <Check className="w-8 h-8 text-green" />
                </div>
                <h3 className="font-mono text-2xl text-green mb-2">MESSAGE_SENT.log</h3>
                <p className="font-mono text-sm text-text-3">We&apos;ll reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-surface border border-border">
                <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                  <span className="font-mono text-xs text-text-3">{'// NEW_PROJECT.init()'}</span>
                  <button 
                    type="submit"
                    className="font-mono text-xs text-orange hover:text-orange/80"
                  >
                    ↵ SUBMIT
                  </button>
                </div>
                
                <div className="p-5 space-y-5">
                  {/* Honeypot. Hidden from users, catches naive bots. */}
                  <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-text-3 uppercase tracking-wider mb-2">
                      YOUR_NAME_
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={120}
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-3 bg-bg border border-border focus:border-orange outline-none transition-colors font-mono text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-text-3 uppercase tracking-wider mb-2">
                      EMAIL_
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={200}
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-3 bg-bg border border-border focus:border-orange outline-none transition-colors font-mono text-sm"
                      placeholder="jane@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block font-mono text-xs text-text-3 uppercase tracking-wider mb-2">
                      BUDGET_RANGE_
                    </label>
                    <select
                      id="budget"
                      required
                      value={form.budget}
                      onChange={(e) => setForm({...form, budget: e.target.value})}
                      className="w-full px-4 py-3 bg-bg border border-border focus:border-orange outline-none transition-colors font-mono text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select a range</option>
                      {budgetOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="details" className="block font-mono text-xs text-text-3 uppercase tracking-wider mb-2">
                      PROJECT_DETAILS_
                    </label>
                    <textarea
                      id="details"
                      required
                      maxLength={5000}
                      value={form.details}
                      onChange={(e) => setForm({...form, details: e.target.value})}
                      className="w-full px-4 py-3 bg-bg border border-border focus:border-orange outline-none transition-colors font-mono text-sm resize-none h-32"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  {error && (
                    <p role="alert" className="font-mono text-xs text-orange border border-orange/40 bg-orange-dim px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-orange text-white font-mono text-sm font-bold uppercase tracking-wider border border-orange shadow-[3px_3px_0_#b34500] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0_#b34500] transition-all disabled:opacity-60 disabled:shadow-none disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                  >
                    {sending ? 'Sending…' : 'Send message'}
                  </button>

                  <p className="font-mono text-[10px] text-text-3 leading-relaxed">
                    Submitted details are used only to reply to your enquiry. See the{' '}
                    <Link href="/legal/privacy" className="text-text-2 hover:text-orange">
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}