'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Code2, ArrowUpRight } from 'lucide-react';

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

const team = [
  {
    num: '01',
    role: 'FOUNDER · FULL-STACK ENGINEER',
    roleColor: 'var(--orange)',
    name: 'Nalin Dalal',
    bio: '5+ years building production systems. React, Next.js, TypeScript, Node.js, PostgreSQL, AWS. OSS contributor. I believe clean architecture matters more than clever code.',
    stack: 'Next.js · TypeScript · Node.js · PostgreSQL · AWS · Docker',
  },
  {
    num: '02',
    role: 'FOUNDER · AI ENGINEER',
    roleColor: 'var(--blue)',
    name: 'Samarth Nagar',
    bio: 'ML/AI engineer. Former Fortune 500. I build systems that make products intelligent — LLMs, agents, automation pipelines that actually work in production.',
    stack: 'Python · LangChain · OpenAI · FastAPI · TensorFlow · AWS',
  },
];

const values = [
  { num: '01', title: 'SHIP IT', description: 'Done > perfect. We deliver. Always.' },
  { num: '02', title: 'NO FLUFF', description: 'No buzzwords. No jargon. Just working code.' },
  { num: '03', title: 'FAIR DEAL', description: 'We charge what the work costs. Not what the market allows.' },
];

export default function AboutPage() {
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
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">// WHO WE ARE</span>
          <h1 className="font-sans text-4xl lg:text-6xl font-black mt-4 leading-[0.9] tracking-tight">
            Two engineers. <br />
            One studio. <br />
            Zero middlemen.
          </h1>
          <p className="text-base text-text-2 mt-8 max-w-lg leading-relaxed">
            nerdev started in 2024 when we got tired of watching software 
            take 6 months to ship. We do in 6 weeks what most agencies do in 6 months. 
            Not because we cut corners — because we don&apos;t waste time on anything 
            that isn&apos;t the product.
          </p>
        </motion.div>
        
        {/* TEAM */}
        <motion.div variants={itemVariants} className="mb-20 lg:mb-32">
          <h2 className="font-sans text-2xl lg:text-3xl font-bold mb-8">THE TEAM</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {team.map(member => (
              <motion.div
                key={member.num}
                whileHover={{ borderColor: 'var(--orange)' }}
                transition={{ duration: 0.2 }}
                className="relative bg-surface border border-border p-7"
              >
                <span className="absolute top-4 right-4 font-mono text-5xl font-bold text-text-3 opacity-10">
                  {member.num}
                </span>
                <span 
                  className="inline-block font-mono text-[10px] uppercase tracking-wider mb-3"
                  style={{ color: member.roleColor }}
                >
                  {member.role}
                </span>
                <h3 className="font-sans text-2xl font-black mb-4">{member.name}</h3>
                <p className="text-sm text-text-2 leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="pt-4 border-t border-border">
                  <span className="font-mono text-xs text-text-3">{member.stack}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* OSS */}
        <motion.div variants={itemVariants} className="mb-20 lg:mb-32">
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">// OPEN SOURCE</span>
          <h2 className="font-sans text-2xl lg:text-3xl font-bold mt-4 mb-6">
            We build in public.
          </h2>
          <p className="text-base text-text-2 mb-8">
            Our GitHub is the real portfolio.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#" 
              className="flex items-center gap-3 px-4 py-3 bg-surface border border-border hover:border-orange transition-colors"
            >
              <Code2 className="w-5 h-5" />
              <span className="font-mono text-sm">nalin</span>
              <ArrowUpRight className="w-4 h-4 text-text-3" />
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 px-4 py-3 bg-surface border border-border hover:border-orange transition-colors"
            >
              <Code2 className="w-5 h-5" />
              <span className="font-mono text-sm">samarth</span>
              <ArrowUpRight className="w-4 h-4 text-text-3" />
            </a>
          </div>
        </motion.div>
        
        {/* VALUES */}
        <motion.div variants={itemVariants}>
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">// VALUES</span>
          <h2 className="font-sans text-2xl lg:text-3xl font-bold mt-4 mb-8">
            What we believe.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {values.map(value => (
              <div 
                key={value.num}
                className="bg-surface border border-border p-6"
              >
                <span className="font-mono text-2xl font-bold text-orange mb-2 block">{value.num}</span>
                <h3 className="font-sans text-base font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-text-2">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}