import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects, getProject } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  
  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-6 lg:px-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-sans text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/work" className="text-orange hover:underline">← Back to Work</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 lg:px-12">
      <div className="max-w-[760px] mx-auto">
        <Link 
          href="/work" 
          className="inline-flex items-center font-mono text-xs text-text-3 hover:text-orange transition-colors mb-8"
        >
          ← BACK TO WORK
        </Link>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="font-mono text-[9px] text-text-3 border border-border px-2 py-1 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="font-sans text-4xl lg:text-5xl font-black leading-[0.9] tracking-tight mb-4">
          {project.title}
        </h1>
        
        <p className="font-mono text-xs text-text-3 mb-12">
          {project.client} · {project.year}
        </p>
        
        <div className="w-full h-px bg-border mb-12"></div>
        
        {project.metrics && (
          <div className="grid grid-cols-3 gap-4 mb-16">
            {project.metrics.map(metric => (
              <div 
                key={metric.label}
                className="text-center p-4 border border-border"
              >
                <div className="font-sans text-4xl lg:text-5xl font-bold text-orange mb-2">
                  {metric.value}
                </div>
                <div className="font-mono text-[10px] text-text-3 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mb-12">
          <h2 className="font-sans text-2xl font-bold mb-4">THE PROBLEM</h2>
          <p className="text-base text-text-2 leading-relaxed">
            {project.problem}
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="font-sans text-2xl font-bold mb-4">OUR APPROACH</h2>
          <div className="space-y-6">
            {project.approach.map((paragraph, i) => (
              <div 
                key={i}
                className="pl-4 border-l-[3px] border-orange"
              >
                <p className="text-base text-text-2 leading-relaxed">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="font-sans text-2xl font-bold mb-4">TECH STACK USED</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span 
                key={tech}
                className="font-mono text-xs text-text-2 border border-border px-3 py-1.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="font-sans text-2xl font-bold mb-4">OUTCOME</h2>
          <p className="text-lg text-text leading-relaxed">
            {project.outcome}
          </p>
        </div>
        
        <Link 
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-orange text-white font-mono text-sm font-bold uppercase tracking-wider border border-orange shadow-[3px_3px_0_#b34500] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0_#b34500] transition-all"
        >
          Start a similar project →
        </Link>
      </div>
    </div>
  );
}