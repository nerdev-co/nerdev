'use client';

import { motion } from 'framer-motion';

interface MarqueeStripProps {
  items: string[];
}

export function MarqueeStrip({ items = [] }: MarqueeStripProps) {
  return (
    <div className="relative w-full h-12 overflow-hidden border-y border-border bg-surface">
      {/* Fade masks on both ends */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-surface to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-surface to-transparent" />
      
      <div className="flex items-center h-full">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ['0%', '-25%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          }}
        >
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <span 
              key={i} 
              className="font-mono text-[11px] tracking-[0.2em] px-10 flex-shrink-0 flex items-center gap-3"
            >
              <span className="w-1 h-1 rounded-full bg-orange" />
              <span className="text-text">{item}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}