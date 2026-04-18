'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/lib/projects';

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

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, borderColor: 'var(--border-2)', boxShadow: '3px 3px 0 var(--orange)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group border border-border bg-surface transition-all"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div 
          className="aspect-[16/9] relative overflow-hidden"
          style={{ backgroundColor: project.accent }}
        >
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
          <span className="font-mono text-xs text-orange group-hover:text-orange transition-colors">
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
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">// SELECTED WORK</span>
          <h1 className="font-sans text-4xl lg:text-5xl font-black mt-4 leading-[0.95] tracking-tight">
            We pick 5 projects. <br />
            Not 50.
          </h1>
          <p className="text-base text-text-2 mt-4 max-w-md">
            Fewer projects means each one actually represents what we can do.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}