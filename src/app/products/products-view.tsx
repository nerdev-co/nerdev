'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Code2 } from 'lucide-react';
import { products } from '@/lib/projects';
import { company } from '@/lib/company';


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

const principles = [
  {
    num: '01',
    title: 'We own it outright',
    body: 'These are ours. No client owns them, no roadmap is set by a funder, and we are not waiting on anyone to approve a feature.',
  },
  {
    num: '02',
    title: 'They run on our stack',
    body: 'Everything here is built with the same architecture we ship for clients. If a pattern is weak, we fix it in our own product first.',
  },
  {
    num: '03',
    title: 'Client work funds them',
    body: 'Studio engagements pay the bills. Products are where spare capacity goes, and where the unglamorous problems get solved properly.',
  },
];

export default function ProductsPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-24 pb-20 px-6 lg:px-12"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* HERO */}
        <motion.div variants={itemVariants} className="mb-16 lg:mb-24">
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">
            {'// OUR PRODUCTS'}</span>
          <h1 className="font-sans text-4xl lg:text-6xl font-black mt-4 leading-[0.9] tracking-tight">
            Things we built<br />
            because we needed them.
          </h1>
          <p className="text-base text-text-2 mt-8 max-w-lg leading-relaxed">
            {company.brand} runs two things: client engagements, and our own software. This page is
            the second one. Everything here is owned and operated by us, with the source public
            where it makes sense.
          </p>
        </motion.div>

        {/* PRODUCT LIST */}
        <motion.div variants={itemVariants} className="mb-20 lg:mb-32">
          <div className="space-y-4">
            {products.map(product => (
              <motion.div
                key={product.slug}
                whileHover={{ borderColor: 'var(--border-2)', boxShadow: '3px 3px 0 var(--orange)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="border border-border bg-surface transition-all"
              >
                <div className="grid lg:grid-cols-[1.1fr_1fr]">
                  {/* Visual */}
                  <Link
                    href={`/work/${product.slug}`}
                    className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px] overflow-hidden"
                    style={{ backgroundColor: product.accent }}
                  >
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    )}
                  </Link>

                  {/* Detail */}
                  <div className="p-7 lg:p-9 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-mono text-[10px] text-text-3 uppercase tracking-wider">
                        {product.status} · {product.year}
                      </span>
                    </div>

                    <h2 className="font-sans text-2xl lg:text-3xl font-black mb-3">
                      {product.title}
                    </h2>

                    <p className="text-sm text-text-2 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {product.metrics && (
                      <div className="flex flex-wrap gap-6 mb-6 py-5 border-y border-border">
                        {product.metrics.map(metric => (
                          <div key={metric.label}>
                            <div className="font-sans text-xl font-bold text-orange">
                              {metric.value}
                            </div>
                            <div className="font-mono text-[9px] text-text-3 uppercase tracking-wider mt-1">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-7">
                      {product.stack.slice(0, 6).map(tech => (
                        <span
                          key={tech}
                          className="font-mono text-[9px] text-text-3 border border-border px-2 py-1 uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                      {product.stack.length > 6 && (
                        <span className="font-mono text-[9px] text-text-3 px-2 py-1 uppercase tracking-wider">
                          +{product.stack.length - 6}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                      <Link
                        href={`/work/${product.slug}`}
                        className="font-mono text-xs text-orange hover:text-orange/80 transition-colors"
                      >
                        READ THE BUILD →
                      </Link>
                      {product.links?.live && (
                        <a
                          href={product.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-text-2 hover:text-orange transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          LIVE
                        </a>
                      )}
                      {product.links?.github && (
                        <a
                          href={product.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-text-2 hover:text-orange transition-colors"
                        >
                          <Code2 className="w-3.5 h-3.5" />
                          SOURCE
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PRINCIPLES */}
        <motion.div variants={itemVariants}>
          <h2 className="font-sans text-2xl lg:text-3xl font-bold mb-10">
            How products and client work relate
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {principles.map(p => (
              <div key={p.num} className="bg-surface border border-border p-7">
                <span className="font-mono text-2xl font-bold text-orange mb-3 block">{p.num}</span>
                <h3 className="font-sans text-base font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-text-2 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex items-center px-5 py-2.5 bg-transparent text-text font-mono text-xs font-bold uppercase tracking-wider border border-border-2 hover:border-orange hover:text-orange transition-all"
            >
              See client work →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-orange text-white font-mono text-xs font-bold uppercase tracking-wider border border-orange shadow-[2px_2px_0_#b34500] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#b34500] transition-all"
            >
              Build something together →
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
