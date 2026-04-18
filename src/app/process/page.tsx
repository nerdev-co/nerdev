'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

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

const processSteps = [
  { num: '01', title: 'DISCOVERY', subtitle: '(1 call, 30 min)', description: 'Tell us the problem. Not the solution — the problem. We\'ll figure out the solution together. Bring context, not a spec.' },
  { num: '02', title: 'PROPOSAL', subtitle: '(24h turnaround)', description: 'We send a scope doc: what we\'ll build, what we won\'t, timeline, price. One round of revisions. No death-by-committee.' },
  { num: '03', title: 'BUILD', subtitle: '(weekly check-ins)', description: 'We work in 1-week cycles. You see progress every week. Not a demo in week 6. Real, deployed work.' },
  { num: '04', title: 'SHIP', subtitle: '(you own everything)', description: 'We deploy to your infrastructure. You own the repo, the domain, the database. We hand over docs and a 30-min walkthrough.' },
  { num: '05', title: 'SUPPORT', subtitle: '(optional)', description: 'Maintenance from $200/mo. Includes monitoring, bug fixes, minor updates. Not a retainer for features — those are scoped separately.' },
];

const paymentMilestones = [
  { milestone: 'START', amount: '50%', trigger: 'On scope sign-off' },
  { milestone: 'DELIVERY', amount: '50%', trigger: 'On delivery' },
];

const faqs = [
  { question: 'How long does a typical project take?', answer: 'Most projects ship in 4-8 weeks. Complex builds may take 12 weeks. We don\'t drag things out.' },
  { question: 'What if we need changes mid-project?', answer: 'We lock scope at the start, but real projects evolve. We track hours and either absorb small changes or propose a scope adjustment.' },
  { question: 'Do you work with equity?', answer: 'Sometimes, for the right project. Let\'s talk.' },
  { question: 'Are you available for full-time contracts?', answer: 'Yes, on a case-by-case basis. Some startups need someone embedded full-time.' },
  { question: 'What technologies do you use?', answer: 'We specialize in modern stacks: Next.js, TypeScript, Python, LLMs. But we pick tools based on your problem, not our preferences.' },
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
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">// HOW WE WORK</span>
          <h1 className="font-sans text-4xl lg:text-6xl font-black mt-4 leading-[0.9] tracking-tight">
            No discovery sprints. <br />
            No bloated SOWs.
          </h1>
          <p className="text-base text-text-2 mt-8 max-w-lg leading-relaxed">
            Most agencies take 3 weeks to tell you what they&apos;ll build. 
            We spend 30 minutes understanding your problem, then send you a quote.
          </p>
        </motion.div>
        
        {/* PROCESS STEPS */}
        <motion.div variants={itemVariants} className="mb-20 lg:mb-32">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {processSteps.map((step, i) => (
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
            For projects over $5k: milestone payments available.
          </p>
        </motion.div>
        
        {/* FAQ */}
        <motion.div variants={itemVariants}>
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">// FAQ</span>
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