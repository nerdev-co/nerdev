'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ScrambleText } from '@/components/ui/scramble-text';
import { MarqueeStrip } from '@/components/ui/marquee-strip';
import { BentoCard } from '@/components/ui/bento-card';
import { ShipLog } from '@/components/ui/ship-log';
import { TechStackConfigurator } from '@/components/ui/tech-stack-configurator';
import { services, pricePair } from '@/lib/pricing';
import { company } from '@/lib/company';


const differentiators = [
  { num: '01', before: 'Most agencies ask: what do you want?', after: 'We ask: what problem actually needs solving?' },
  { num: '02', before: 'Most codebases work on the demo day.', after: 'We build systems that hold up under production load.' },
  { num: '03', before: 'Most shops hand you a repo and disappear.', after: 'I stay until it ships, and I answer the phone after.' },
  { num: '04', before: 'Most quotes hide who is actually doing the work.', after: 'The name on the contract is the name in the editor.' },
];

const techStack = ['Next.js', 'TypeScript', 'Node.js', 'Python', 'LLMs', 'AWS'];

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

export default function Home() {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      className="min-h-screen"
    >
      {/* HERO SECTION - TIER 1 */}
      <section className="section-tier-1 min-h-[100svh] flex flex-col lg:flex-row pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 h-full">
            {/* LEFT COLUMN */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-xs text-text-2 tracking-wider uppercase">
                  <span className="inline-flex items-center gap-2 border border-orange/30 bg-orange-dim px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-slow"></span>
                    OPEN FOR PROJECTS
                  </span>
                </span>
              </div>
              
              <motion.h1 
                className="font-sans text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tight mb-6 relative cursor-default"
                whileHover={{ skewX: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ScrambleText text="We build the software serious startups actually ship." />
                {/* Ghost text layer */}
                <span className="absolute -top-[20%] -left-[5%] text-[clamp(5rem,15vw,12rem)] font-black text-text opacity-[0.03] pointer-events-none select-none whitespace-nowrap">
                  NERDEV
                </span>
              </motion.h1>
              
              <p className="text-base text-text-2 leading-relaxed max-w-md mb-8">
                {company.brand} is a one-person product engineering studio run by{' '}
                {company.legalName}. I architect, build, and ship production systems myself — no
                account layer, no handoffs, no one between you and the code.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-5 py-2.5 bg-orange text-white font-mono text-xs font-bold uppercase tracking-wider border border-orange shadow-[2px_2px_0_#b34500] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#b34500] transition-all"
                >
                  BOOK A CALL →
                </Link>
                <Link 
                  href="/work"
                  className="inline-flex items-center px-5 py-2.5 bg-transparent text-text font-mono text-xs font-bold uppercase tracking-wider border border-border-2 hover:border-orange hover:text-orange transition-all"
                >
                  SEE OUR WORK
                </Link>
              </div>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="group font-mono text-[11px] tracking-[0.15em] px-4 py-1.5 flex items-center gap-2 border border-border hover:border-orange hover:text-orange transition-all cursor-default"
                  >
                    <span className="w-1 h-1 rounded-full bg-text-3 group-hover:bg-orange" />
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            
            {/* RIGHT COLUMN - LIVE TERMINAL */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] bg-surface border border-border">
                <style jsx>{`
                  .scanlines::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      rgba(0, 0, 0, 0.08) 2px,
                      rgba(0, 0, 0, 0.08) 4px
                    );
                    pointer-events: none;
                  }
                `}</style>
                <div className="relative scanlines">
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                      <span className="font-mono text-xs text-text-3 ml-2">studio.ts</span>
                    </div>
                    <span className="font-mono text-[9px] text-orange bg-orange-dim px-2 py-0.5">LIVE</span>
                  </div>
                  <div className="p-5 font-mono text-xs leading-[1.9]">
                    <div>
                      <span className="text-blue">const</span> studio = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-yellow">principal</span>: <span className="text-green">&quot;{company.legalName}&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-yellow">entity</span>: <span className="text-green">&quot;{company.entityType}&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-yellow">stack</span>: {'{'} <span className="text-yellow">web</span>: <span className="text-green">&quot;Next.js + TypeScript&quot;</span>, <span className="text-yellow">ai</span>: <span className="text-green">&quot;LLMs + Agents&quot;</span> {'}'}
                    </div>
                    <div className="pl-4">
                      <span className="text-yellow">philosophy</span>: <span className="text-green">&quot;ship fast, own everything&quot;</span>
                    </div>
                    <div>{'}'} <span className="text-text-3">satisfies</span> Studio;</div>
                    <div className="mt-2">
                      <span className="text-text-3">{'// currently building:'}</span>
                    </div>
                    <div>
                      <span className="text-blue">await</span> deploy(project.<span className="text-yellow">current</span>); <span className="text-orange cursor-blink">▋</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* MARQUEE STRIP */}
      <MarqueeStrip items={['PRODUCT ENGINEERING', 'SYSTEMS ARCHITECTURE', 'AI INTEGRATION', 'PRODUCTION-READY', 'NO FLUFF']} />
      
      {/* SERVICES / WHAT WE BUILD */}
      <section className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div variants={itemVariants} className="mb-12">
            <span className="font-mono text-xs text-text-3 tracking-wider uppercase">{'// 01 — WHAT WE BUILD'}</span>
            <h2 className="font-sans text-3xl lg:text-4xl font-black mt-4 leading-tight">
              Systems, not just software.
            </h2>
            <p className="text-base text-text-2 mt-2">
              We don&apos;t take tickets. We solve problems.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => {
              const { primary, secondary } = pricePair(service.price);
              return (
                <BentoCard
                  key={service.label}
                  span={i === 0 ? 'wide' : 'normal'}
                  label={service.label}
                  title={service.title}
                  description={service.description}
                  tags={service.tags}
                  price={primary}
                  priceSecondary={secondary}
                />
              );
            })}
            <Link href="/contact" className="block">
              <BentoCard
                className="h-full flex flex-col justify-center items-center text-center border-orange hover:bg-orange-dim"
                title="Have a project?"
                description="Let's talk."
              >
                <span className="font-mono text-lg text-orange mt-2">→</span>
              </BentoCard>
            </Link>
          </div>
        </div>
      </section>
      
      {/* DIFFERENTIATION SECTION */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <motion.div variants={itemVariants} className="mb-12">
            <span className="font-mono text-xs text-text-3 tracking-wider uppercase">{'// 02 — THE DIFFERENCE'}</span>
            <h2 className="font-sans text-3xl lg:text-4xl font-black mt-4 leading-tight">
              We ask different questions.
            </h2>
          </motion.div>
          
          <div className="space-y-0 divide-y divide-border">
            {differentiators.map((item) => (
              <motion.div 
                key={item.num} 
                variants={itemVariants}
                className="py-8 lg:py-12"
              >
                <div className="grid lg:grid-cols-[80px_1fr] gap-6 items-start">
                  <div className="flex flex-col items-start">
                    <span className="font-mono text-3xl font-bold text-orange leading-none">{item.num}</span>
                    <span className="w-8 h-px bg-orange mt-2" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm text-text-3 italic mb-2">{item.before}</p>
                    <p className="font-sans text-lg lg:text-xl font-bold">{item.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* LIVE SHIP LOG */}
      <section className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div variants={itemVariants} className="mb-12">
            <span className="font-mono text-xs text-text-3 tracking-wider uppercase">{'// 03 — ACTIVITY'}</span>
            <h2 className="font-sans text-3xl lg:text-4xl font-black mt-4 leading-tight">
              Live Ship Log
            </h2>
            <p className="text-base text-text-2 mt-2">
              Real projects. Real commits. No portfolio filler.
            </p>
          </motion.div>
          
          <ShipLog />
        </div>
      </section>

      
      
      {/* TECH STACK CONFIGURATOR */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <motion.div variants={itemVariants} className="mb-12">
            <span className="font-mono text-xs text-text-3 tracking-wider uppercase">{'// 04 — BUILD YOUR ESTIMATE'}</span>
            <h2 className="font-sans text-3xl lg:text-4xl font-black mt-4 leading-tight">
              Configure your stack.
            </h2>
            <p className="text-base text-text-2 mt-2">
              No call required to get a ballpark. Final price is fixed in a written proposal.
            </p>
          </motion.div>
          
          <TechStackConfigurator />
        </div>
      </section>

      {/* COMPANY STRIP */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div variants={itemVariants} className="border border-border bg-surface p-8 lg:p-10 grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
            <div>
              <span className="font-mono text-xs text-text-3 tracking-wider uppercase">
                {'// THE BUSINESS'}</span>
              <h2 className="font-sans text-2xl lg:text-3xl font-black mt-3 leading-tight">
                A named person, not an agency.
              </h2>
              <p className="text-sm text-text-2 mt-3 leading-relaxed max-w-lg">
                {company.brand} is a registered individual — {company.legalName}, trading as{' '}
                {company.brand}. Contracts, invoices, and the code all carry the same name. Entity
                details, registered office, and terms are published, so you can verify the business
                before you sign anything.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/company"
                className="inline-flex items-center px-5 py-2.5 bg-orange text-white font-mono text-xs font-bold uppercase tracking-wider border border-orange shadow-[2px_2px_0_#b34500] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#b34500] transition-all"
              >
                Company details →
              </Link>
              <Link
                href="/legal/terms"
                className="inline-flex items-center px-5 py-2.5 bg-transparent text-text-2 font-mono text-xs font-bold uppercase tracking-wider border border-border hover:border-orange hover:text-orange transition-all"
              >
                Terms
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}