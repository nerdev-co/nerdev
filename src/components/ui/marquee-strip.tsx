'use client';

import { motion } from 'framer-motion';

interface MarqueeStripProps {
  items: string[];
}

export function MarqueeStrip({ items = [] }: MarqueeStripProps) {
  return (
    <div className="relative w-full h-11 overflow-hidden">
      {/* Fade masks on both ends */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-orange to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-orange to-transparent" />
      
      <div className="flex items-center h-full bg-orange">
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
              className="font-mono text-xs font-bold text-white uppercase tracking-wider px-8 flex-shrink-0"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}