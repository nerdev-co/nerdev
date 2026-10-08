'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { clientWork } from '@/lib/projects';


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: 'circOut' },
  },
};

function ProjectCard({ project }: { project: (typeof clientWork)[0] }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, borderColor: 'var(--border-2)', boxShadow: '3px 3px 0 var(--orange)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group border border-border bg-surface transition-all"
    >
      <Link href={`/work/${project.slug}`} className="block h-full">
        <div
          className="aspect-[16/9] relative overflow-hidden"
          style={{ backgroundColor: project.accent }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <>
              <style jsx>{`
                .grid-pattern {
                  background-image:
                    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
                  background-size: 24px 24px;
                }
                .ui-rect {
                  position: absolute;
                  background: rgba(255,255,255,0.1);
                  border: 1px solid rgba(255,255,255,0.15);
                }
              `}</style>
              <div className="absolute inset-0 grid-pattern" />
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/3 ui-rect" />
              <div className="absolute top-1/3 right-1/4 w-1/3 h-1/2 ui-rect" />
              <div className="absolute bottom-1/4 left-1/3 w-1/4 h-1/4 ui-rect" />
              <div className="absolute bottom-1/3 right-1/3 w-8 h-8 rounded-full border-2 border-white/20" />
            </>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-sans text-xl font-bold mb-1 group-hover:text-orange transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-[10px] text-text-3 uppercase tracking-wider mb-3">
            {project.client} · {project.year}
          </p>
          <p className="text-sm text-text-2 leading-relaxed mb-4">
            {project.description}
          </p>

          {project.metrics && (
            <div className="flex flex-wrap gap-5 mb-4 py-4 border-y border-border">
              {project.metrics.map(metric => (
                <div key={metric.label}>
                  <div className="font-sans text-base font-bold text-orange">
                    {metric.value}
                  </div>
                  <div className="font-mono text-[9px] text-text-3 uppercase tracking-wider mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="font-mono text-[9px] text-text-3 border border-border px-2 py-1 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="font-mono text-xs text-orange transition-colors">
            VIEW CASE STUDY →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function WorkPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-24 pb-20 px-6 lg:px-12"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div variants={itemVariants} className="mb-16">
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">
            {'// CLIENT WORK'}</span>
          <h1 className="font-sans text-4xl lg:text-5xl font-black mt-4 leading-[0.95] tracking-tight">
            A short list, not<br />
            a long one.
          </h1>
          <p className="text-base text-text-2 mt-4 max-w-md">
            Every engagement here was scoped, built, and shipped by one person. These are the ones
            we can talk about publicly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {clientWork.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="inline-flex items-center px-5 py-2.5 bg-transparent text-text font-mono text-xs font-bold uppercase tracking-wider border border-border-2 hover:border-orange hover:text-orange transition-all"
          >
            See what we own →
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center px-5 py-2.5 bg-transparent text-text-2 font-mono text-xs font-bold uppercase tracking-wider border border-border hover:border-orange hover:text-orange transition-all"
          >
            How engagement works →
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
