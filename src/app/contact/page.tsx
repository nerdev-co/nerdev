'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { Mail, Clock, Globe, Check, Calendar } from 'lucide-react';

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
  { icon: Mail, label: 'EMAIL_', value: 'admin@nerdev.in', href: 'mailto:admin@nerdev.in', color: 'var(--orange)' },
  { icon: Clock, label: 'RESPONSE_', value: 'Within 24 hours · Mon–Sat', color: 'var(--text-2)' },
  { icon: Globe, label: 'TIMEZONE_', value: 'IST (UTC+5:30)', color: 'var(--text-2)' },
  { icon: Calendar, label: 'AVAILABILITY_', value: 'Open for new projects', color: 'var(--green)' },
];

const budgetOptions = [
  { value: 'under-1k', label: '< $1,000' },
  { value: '1k-3k', label: '$1,000 – $3,000' },
  { value: '3k-10k', label: '$3,000 – $10,000' },
  { value: '10k-plus', label: '$10,000+' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">// GET IN TOUCH</span>
          <h1 className="font-sans text-4xl lg:text-6xl font-black mt-4 leading-[0.9] tracking-tight">
            Tell us what you&apos;re building.
          </h1>
          <p className="text-base text-text-2 mt-8 max-w-lg leading-relaxed">
            No pitch deck required. A paragraph is fine. 
            We respond within 24 hours. IST timezone.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
          {/* LEFT COLUMN - INFO */}
          <motion.div variants={itemVariants}>
            <div className="space-y-3">
              {infoCards.map((card, i) => (
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
            
            <div className="mt-8">
              <a 
                href="https://cal.com/nerdev"
                className="inline-flex items-center gap-2 font-mono text-xs text-text-2 hover:text-orange transition-colors"
              >
                Or book directly →
              </a>
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
                  <span className="font-mono text-xs text-text-3">// NEW_PROJECT.init()</span>
                  <button 
                    type="submit"
                    className="font-mono text-xs text-orange hover:text-orange/80"
                  >
                    ↵ SUBMIT
                  </button>
                </div>
                
                <div className="p-5 space-y-5">
                  <div>
                    <label className="block font-mono text-xs text-text-3 uppercase tracking-wider mb-2">
                      YOUR_NAME_
                    </label>
                    <input 
                      type="text" 
                      required
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-3 bg-bg border border-border focus:border-orange outline-none transition-colors font-mono text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-mono text-xs text-text-3 uppercase tracking-wider mb-2">
                      EMAIL_
                    </label>
                    <input 
                      type="email" 
                      required
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-3 bg-bg border border-border focus:border-orange outline-none transition-colors font-mono text-sm"
                      placeholder="jane@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-mono text-xs text-text-3 uppercase tracking-wider mb-2">
                      BUDGET_RANGE_
                    </label>
                    <select 
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
                    <label className="block font-mono text-xs text-text-3 uppercase tracking-wider mb-2">
                      PROJECT_DETAILS_
                    </label>
                    <textarea 
                      required
                      value={form.details}
                      onChange={(e) => setForm({...form, details: e.target.value})}
                      className="w-full px-4 py-3 bg-bg border border-border focus:border-orange outline-none transition-colors font-mono text-sm resize-none h-32"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-orange text-white font-mono text-sm font-bold uppercase tracking-wider border border-orange shadow-[3px_3px_0_#b34500] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0_#b34500] transition-all"
                  >
                    Send message
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}