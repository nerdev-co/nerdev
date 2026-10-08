'use client';

import { motion, Variants } from 'framer-motion';
import { Code2, ArrowUpRight } from 'lucide-react';
import { company } from '@/lib/company';


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

const founder = {
  name: company.legalName,
  role: 'FOUNDER · PRINCIPAL ENGINEER',
  bio: 'nerdev is a one-person studio — this is me. Building production systems across React, Next.js, TypeScript, Node.js, PostgreSQL, and AWS since 2024. Open-source contributor. I believe clean architecture matters more than clever code, and that the person you meet should be the person who ships.',
  stack: 'Next.js · TypeScript · Node.js · PostgreSQL · AWS · Docker',
  github: 'https://github.com/nalindalal',
};

const collaborators = [
  {
    name: 'Samarth Nagar',
    specialty: 'AI · ML · LLM systems',
    bio: 'ML/AI engineer. Former Fortune 500. Brought in on engagements that need language models, agents, or automation pipelines in production.',
    stack: 'Python · LangChain · OpenAI · FastAPI · TensorFlow · AWS',
    github: 'https://github.com/samarth-na',
  },
  {
    name: 'Muskan Wagh',
    specialty: 'Full-stack · Frontend',
    bio: 'Full-stack developer focused on React, Next.js, and interface work. Engaged per-project on builds with a heavy frontend component.',
    stack: 'React · Next.js · TypeScript · Node.js · PostgreSQL',
    github: 'https://github.com/Muskan-wagh',
  },
];

const values = [
  { num: '01', title: 'SHIP IT', description: 'Done beats perfect. Work gets deployed, not just committed.' },
  { num: '02', title: 'NO FLUFF', description: 'No buzzwords, no jargon. Just working code and honest timelines.' },
  { num: '03', title: 'FAIR DEAL', description: 'Priced on what the work actually costs, not on what the market tolerates.' },
  { num: '04', title: 'NO HANDOFFS', description: 'You talk to whoever writes the code. No account layer in between.' },
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
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">{'// WHO WE ARE'}</span>
          <h1 className="font-sans text-4xl lg:text-6xl font-black mt-4 leading-[0.9] tracking-tight">
            One engineer.<br />
            One studio.<br />
            Zero middlemen.
          </h1>
          <p className="text-base text-text-2 mt-8 max-w-lg leading-relaxed">
            {company.brand} started in {company.foundingYear} out of frustration with how long
            software takes to ship. I do in weeks what most agencies take months for — not by
            cutting corners, but by not spending time on anything that isn&apos;t the product.
          </p>
        </motion.div>

        {/* FOUNDER */}
        <motion.div variants={itemVariants} className="mb-20 lg:mb-32">
          <h2 className="font-sans text-2xl lg:text-3xl font-bold mb-8">THE FOUNDER</h2>

          <div className="bg-surface border border-border p-7 lg:p-9">
            <span className="inline-block font-mono text-[10px] uppercase tracking-wider mb-3 text-orange">
              {founder.role}
            </span>
            <h3 className="font-sans text-2xl lg:text-3xl font-black mb-4">{founder.name}</h3>
            <p className="text-sm text-text-2 leading-relaxed mb-5 max-w-2xl">{founder.bio}</p>
            <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs text-text-3">{founder.stack}</span>
              <a
                href={founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-text-2 hover:text-orange transition-colors"
              >
                <Code2 className="w-4 h-4" />
                nalindalal
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* COLLABORATORS */}
        <motion.div variants={itemVariants} className="mb-20 lg:mb-32">
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">
            {'// COLLABORATORS'}</span>
          <h2 className="font-sans text-2xl lg:text-3xl font-bold mt-4 mb-4">
            Called in when it&apos;s warranted
          </h2>
          <p className="text-base text-text-2 mb-8 max-w-lg leading-relaxed">
            These two are independent engineers I bring onto specific engagements. They are not
            founders, not employees, and not on every project. If an engagement needs specialist AI
            or heavy frontend work, they&apos;re in the room — and you&apos;ll know who is working on
            what before you sign.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {collaborators.map((person, i) => (
              <motion.div
                key={person.name}
                whileHover={{ borderColor: 'var(--border-2)' }}
                transition={{ duration: 0.2 }}
                className="relative bg-surface border border-border p-7"
              >
                <span className="absolute top-4 right-4 font-mono text-5xl font-bold text-text-3 opacity-10">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="inline-block font-mono text-[10px] uppercase tracking-wider mb-3 text-blue">
                  COLLABORATOR · {person.specialty}
                </span>
                <h3 className="font-sans text-xl font-black mb-3">{person.name}</h3>
                <p className="text-sm text-text-2 leading-relaxed mb-4">{person.bio}</p>
                <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono text-xs text-text-3">{person.stack}</span>
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-text-2 hover:text-orange transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    GITHUB
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* OSS */}
        <motion.div variants={itemVariants} className="mb-20 lg:mb-32">
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">{'// OPEN SOURCE'}</span>
          <h2 className="font-sans text-2xl lg:text-3xl font-bold mt-4 mb-6">
            We build in public.
          </h2>
          <p className="text-base text-text-2 mb-8 max-w-lg leading-relaxed">
            The GitHub organisation is the record. Commit history, issues, and release history
            are public and cannot be edited after the fact.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={company.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-surface border border-border hover:border-orange transition-colors"
            >
              <Code2 className="w-5 h-5" />
              <span className="font-mono text-sm">nerdev-co</span>
              <ArrowUpRight className="w-4 h-4 text-text-3" />
            </a>
            <a
              href={founder.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-surface border border-border hover:border-orange transition-colors"
            >
              <Code2 className="w-5 h-5" />
              <span className="font-mono text-sm">nalindalal</span>
              <ArrowUpRight className="w-4 h-4 text-text-3" />
            </a>
          </div>
        </motion.div>
        
        {/* VALUES */}
        <motion.div variants={itemVariants}>
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">{'// VALUES'}</span>
          <h2 className="font-sans text-2xl lg:text-3xl font-bold mt-4 mb-8">
            What we believe.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
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