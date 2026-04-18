'use client';

import { motion } from 'framer-motion';

interface MarqueeStripProps {
  items: string[];
}

const MarqueeStrip = ({ items = [] }: MarqueeStripProps) => {
  const content = items.join('  ·  ');

  return (
    <div className="relative flex overflow-hidden bg-orange w-full h-11 items-center">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        <span className="font-mono text-xs font-bold text-white uppercase tracking-wider px-4">
          {content}
        </span>
        <span className="font-mono text-xs font-bold text-white uppercase tracking-wider px-4" aria-hidden="true">
          {content}
        </span>
        <span className="font-mono text-xs font-bold text-white uppercase tracking-wider px-4" aria-hidden="true">
          {content}
        </span>
        <span className="font-mono text-xs font-bold text-white uppercase tracking-wider px-4" aria-hidden="true">
          {content}
        </span>
      </motion.div>
    </div>
  );
};

export { MarqueeStrip };