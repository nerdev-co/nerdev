'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { company } from '@/lib/company';
import { retainer, pricePair } from '@/lib/pricing';


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

const retainerLabel = pricePair(retainer);

const processSteps = [
  { num: '01', title: 'DISCOVERY', subtitle: '(1 call, 30 min)', description: 'Tell me the problem, not the solution. Bring context, not a spec — we\'ll work out the solution together.' },
  { num: '02', title: 'PROPOSAL', subtitle: '(24h turnaround)', description: 'A written scope: what I\'ll build, what I won\'t, the timeline, and the price. One round of revisions included.' },
  { num: '03', title: 'BUILD', subtitle: '(weekly check-ins)', description: 'Work runs in one-week cycles with something deployed at the end of each. Not a demo in week six.' },
  { num: '04', title: 'SHIP', subtitle: '(you own everything)', description: 'Deployed to your infrastructure. You own the repo, the domain, and the database. Handover docs plus a 30-minute walkthrough.' },
  { num: '05', title: 'SUPPORT', subtitle: '(optional)', description: `Maintenance ${retainerLabel.primary} per month (${retainerLabel.secondary}): monitoring, bug fixes, and minor updates. Feature work is scoped separately, not bundled into a retainer.` },
];

const paymentMilestones = [
  { milestone: 'START', amount: '50%', trigger: 'On scope sign-off' },
  { milestone: 'DELIVERY', amount: '50%', trigger: 'On delivery' },
];

const faqs = [
  { question: 'How long does a typical project take?', answer: 'Most projects ship in 4–8 weeks. Complex builds may take 12. I don\'t drag timelines out to bill more hours.' },
  { question: 'What if we need changes mid-project?', answer: 'Scope is locked at the start, but real projects move. Small changes are absorbed; anything larger gets a written scope adjustment with a price before it starts.' },
  { question: 'Who actually does the work?', answer: 'I do. If an engagement needs specialist AI or heavy frontend work, I bring in a named collaborator — and you know who, and what they\'re doing, before you sign.' },
  { question: 'Are you a registered business?', answer: `Yes — ${company.entityType}, and the details are published on the company page so you can verify them before contracting.` },
  { question: 'Do you work with equity?', answer: 'Occasionally, for the right project and the right terms. Worth a conversation rather than a policy.' },
  { question: 'Are you available for full-time contracts?', answer: 'Yes, case by case. Some startups need someone embedded rather than delivering in cycles.' },
  { question: 'What technologies do you use?', answer: 'Modern stacks — Next.js, TypeScript, Python, LLMs, AWS. But the tool follows your problem, not my preference.' },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <details 
      className="border border-border bg-surface"
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none hover:bg-surface-2 transition-colors">
        <span className="font-sans text-base font-bold">{question}</span>
        <span className={`font-mono text-xl text-orange transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </summary>
      <div className="px-5 pb-5">
        <p className="text-sm text-text-2">{answer}</p>
      </div>
    </details>
  );
}

export default function ProcessPage() {
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
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">{'// HOW WE WORK'}</span>
          <h1 className="font-sans text-4xl lg:text-6xl font-black mt-4 leading-[0.9] tracking-tight">
            No discovery sprints. <br />
            No bloated SOWs.
          </h1>
          <p className="text-base text-text-2 mt-8 max-w-lg leading-relaxed">
            Most agencies take three weeks to tell you what they&apos;ll build. I spend 30 minutes
            understanding the problem, then send a written proposal.
          </p>
        </motion.div>
        
        {/* PROCESS STEPS */}
        <motion.div variants={itemVariants} className="mb-20 lg:mb-32">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {processSteps.map((step) => (
              <div 
                key={step.num}
                className="bg-surface p-6 lg:p-8"
              >
                <span className="font-mono text-xs text-text-3 mb-2 block">{step.num} {step.title}</span>
                <span className="font-mono text-[10px] text-text-3 mb-4 block">{step.subtitle}</span>
                <p className="text-sm text-text-2 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* PAYMENT STRUCTURE */}
        <motion.div variants={itemVariants} className="mb-20 lg:mb-32">
          <h2 className="font-sans text-2xl lg:text-3xl font-bold mb-8">
            Payment structure
          </h2>
          <div className="bg-surface border border-border overflow-hidden">
            <div className="grid grid-cols-3 border-b border-border">
              <div className="px-5 py-3 font-mono text-xs text-text-3 uppercase tracking-wider border-r border-border">MILESTONE</div>
              <div className="px-5 py-3 font-mono text-xs text-text-3 uppercase tracking-wider border-r border-border">AMOUNT</div>
              <div className="px-5 py-3 font-mono text-xs text-text-3 uppercase tracking-wider">TRIGGER</div>
            </div>
            {paymentMilestones.map(m => (
              <div key={m.milestone} className="grid grid-cols-3 border-b border-border last:border-b-0">
                <div className="px-5 py-4 font-mono text-sm border-r border-border">{m.milestone}</div>
                <div className="px-5 py-4 font-mono text-sm text-orange border-r border-border">{m.amount}</div>
                <div className="px-5 py-4 font-mono text-sm">{m.trigger}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-text-3">
            Invoices are payable within 7 days. Full terms on the{' '}
            <a href="/legal/terms" className="text-orange hover:underline">
              terms page
            </a>
            .
          </p>
        </motion.div>
        
        {/* FAQ */}
        <motion.div variants={itemVariants}>
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">{'// FAQ'}</span>
          <h2 className="font-sans text-2xl lg:text-3xl font-bold mt-4 mb-8">
            Common questions
          </h2>
          
          <div className="space-y-px">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}