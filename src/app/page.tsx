'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ScrambleText } from '@/components/ui/scramble-text';
import { MarqueeStrip } from '@/components/ui/marquee-strip';
import { BentoCard } from '@/components/ui/bento-card';
import { ShipLog } from '@/components/ui/ship-log';
import { TechStackConfigurator } from '@/components/ui/tech-stack-configurator';
import { projects } from '@/lib/projects';

const services = [
  { label: '// 01', title: 'Web Applications', description: 'Next.js, full-stack, SaaS, e-commerce. Production-ready from day one.', tags: ['Next.js', 'TypeScript', 'PostgreSQL'], price: 'FROM $2,000' },
  { label: '// 02', title: 'AI Solutions', description: 'LLM integration, agents, automation, custom models that actually work.', tags: ['LLMs', 'LangChain', 'Python'], price: 'FROM $1,500' },
  { label: '// 03', title: 'Mobile Apps', description: 'React Native, iOS + Android. One codebase, two platforms.', tags: ['React Native', 'iOS', 'Android'], price: 'FROM $3,000' },
  { label: '// 04', title: 'API & Backend', description: 'REST, GraphQL, auth, infrastructure. The boring stuff done right.', tags: ['REST', 'GraphQL', 'AWS'], price: 'FROM $1,000' },
  { label: '// 05', title: 'Full Builds', description: '0→1, end-to-end product. We own the whole thing.', tags: ['Strategy', 'Build', 'Ship'], price: 'FROM $5,000' },
];

const differentiators = [
  { num: '01', before: 'Most agencies ask: what do you want?', after: 'We ask: what problem actually needs solving?' },
  { num: '02', before: 'Most devs write code that works today.', after: 'We build systems that hold up in production.' },
  { num: '03', before: 'Most shops hand you a codebase and leave.', after: 'We stay until the product ships. Then we\'re reachable.' },
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
                nerdev is a two-person product engineering studio. 
                We architect, build, and ship production systems. 
                No middlemen. No handoffs. We own the whole thing.
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
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                {techStack.map(tech => (
                  <span 
                    key={tech}
                    className="font-mono text-[10px] text-text-3 border border-border px-2.5 py-1.5 uppercase tracking-wider hover:border-orange hover:text-orange transition-all cursor-default"
                  >
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
                    </div>
                    <span className="font-mono text-xs text-text-3">nerdev.ts</span>
                  </div>
                  <div className="p-5 font-mono text-xs leading-[1.9]">
                    <div>
                      <span className="text-blue">const</span> studio = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-yellow">founders</span>: [<span className="text-green">&quot;nalin&quot;</span>, <span className="text-green">&quot;samarth&quot;</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-yellow">stack</span>: {'{'} <span className="text-yellow">web</span>: <span className="text-green">&quot;Next.js + TypeScript&quot;</span>, <span className="text-yellow">ai</span>: <span className="text-green">&quot;LLMs + Agents&quot;</span> {'}'}
                    </div>
                    <div className="pl-4">
                      <span className="text-yellow">philosophy</span>: <span className="text-green">&quot;ship fast, own everything&quot;</span>
                    </div>
                    <div>{'}'} <span className="text-text-3">satisfies</span> Studio;</div>
                    <div className="mt-2">
                      <span className="text-text-3">// currently building:</span>
                    </div>
                    <div>
                      <span className="text-blue">await</span> deploy(project.<span className="text-yellow">current</span>); <span className="text-orange cursor-blink">▋</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 font-mono text-[9px] text-orange bg-orange-dim px-2 py-0.5">
                  LIVE
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
            <span className="font-mono text-xs text-text-3 tracking-wider uppercase">// 01 — WHAT WE BUILD</span>
            <h2 className="font-sans text-3xl lg:text-4xl font-black mt-4 leading-tight">
              Systems, not just software.
            </h2>
            <p className="text-base text-text-2 mt-2">
              We don&apos;t take tickets. We solve problems.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <BentoCard 
              span="wide"
              label="// 01"
              title="Web Applications"
              description="Next.js, full-stack, SaaS, e-commerce. Production-ready from day one."
              tags={['Next.js', 'TypeScript', 'PostgreSQL']}
              price="FROM $2,000"
            />
            <BentoCard 
              label="// 02"
              title="AI Solutions"
              description="LLM integration, agents, automation, custom models that actually work."
              tags={['LLMs', 'LangChain', 'Python']}
              price="FROM $1,500"
            />
            <BentoCard 
              label="// 03"
              title="Mobile Apps"
              description="React Native, iOS + Android. One codebase, two platforms."
              tags={['React Native', 'iOS', 'Android']}
              price="FROM $3,000"
            />
            <BentoCard 
              label="// 04"
              title="API & Backend"
              description="REST, GraphQL, auth, infrastructure. The boring stuff done right."
              tags={['REST', 'GraphQL', 'AWS']}
              price="FROM $1,000"
            />
            <BentoCard 
              label="// 05"
              title="Full Builds"
              description="0→1, end-to-end product. We own the whole thing."
              tags={['Strategy', 'Build', 'Ship']}
              price="FROM $5,000"
            />
            <Link href="/contact" className="block">
              <BentoCard
                className="h-full flex flex-col justify-center items-center text-center border-orange hover:bg-orange-dim"
                title="Have a project?"
                description="Let's talk."
              >
                <span className="font-mono text-lg text-orange mt-2→">→</span>
              </BentoCard>
            </Link>
          </div>
        </div>
      </section>
      
      {/* DIFFERENTIATION SECTION */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <motion.div variants={itemVariants} className="mb-12">
            <span className="font-mono text-xs text-text-3 tracking-wider uppercase">// 02 — THE DIFFERENCE</span>
            <h2 className="font-sans text-3xl lg:text-4xl font-black mt-4 leading-tight">
              We ask different questions.
            </h2>
          </motion.div>
          
          <div className="space-y-0 divide-y divide-border">
            {differentiators.map((item, i) => (
              <motion.div 
                key={item.num} 
                variants={itemVariants}
                className="py-8 lg:py-12"
              >
                <div className="grid lg:grid-cols-[100px_1fr] gap-8 items-start">
                  <span className="font-mono text-5xl lg:text-7xl font-bold text-text-3 opacity-10">{item.num}</span>
                  <div>
                    <p className="text-sm text-text-3 italic mb-2">{item.before}</p>
                    <p className="font-sans text-xl font-bold">{item.after}</p>
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
            <span className="font-mono text-xs text-text-3 tracking-wider uppercase">// 03 — ACTIVITY</span>
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
            <span className="font-mono text-xs text-text-3 tracking-wider uppercase">// 04 — BUILD YOUR ESTIMATE</span>
            <h2 className="font-sans text-3xl lg:text-4xl font-black mt-4 leading-tight">
              Configure your stack.
            </h2>
            <p className="text-base text-text-2 mt-2">
              No calls required to get a ballpark.
            </p>
          </motion.div>
          
          <TechStackConfigurator />
        </div>
      </section>
    </motion.div>
  );
}