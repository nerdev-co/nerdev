'use client';

import { motion } from 'framer-motion';

interface MarqueeStripProps {
  items: string[];
}

export function MarqueeStrip({ items = [] }: MarqueeStripProps) {
  return (
    <div className="relative flex overflow-hidden bg-orange w-full h-11 items-center">
      <motion.div
        className="flex whitespace-nowrap"
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
            className="font-mono text-xs font-bold text-white uppercase tracking-wider px-6"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}