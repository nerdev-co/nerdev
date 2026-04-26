'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShipLogEntry {
  date: string;
  status: 'DONE' | 'IN_PROGRESS';
  description: string;
}

export function ShipLog({ className = '' }: { className?: string }) {
  const [logs] = useState<ShipLogEntry[]>([
    { date: '2026-04-26', status: 'DONE', description: 'Ready for new projects — inbox open' },
  ]);

  return (
    <div className={`relative bg-surface border border-border ${className}`}>
      <style jsx>{`
        .scanlines::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.08) 2px,
            rgba(0, 0, 0, 0.08) 4px
          );
          pointer-events: none;
        }
      `}</style>
      <div className="relative scanlines flex flex-col h-[280px] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <span className="font-mono text-xs text-text-3">SHIP_LOG.md</span>
        </div>
        <div className="flex-1 overflow-hidden p-4">
          <AnimatePresence mode="popLayout">
            {logs.map((log, index) => (
              <motion.div
                key={`${log.date}-${log.status}-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start gap-3 mb-3 font-mono text-xs ${
                  log.status === 'IN_PROGRESS' ? 'text-orange' : 'text-text-3'
                }`}
              >
                <div className="flex-shrink-0 w-4 flex items-center justify-center">
                  {log.status === 'IN_PROGRESS' ? (
                    <span className="w-2 h-2 rounded-full bg-orange animate-pulse-slow" />
                  ) : (
                    <span className="w-2 h-2 rounded-full border border-text-3" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-text-3 mr-2">[{log.date}]</span>
                  <span>{log.description}</span>
                  {log.status === 'IN_PROGRESS' && (
                    <span className="ml-2 px-1.5 py-0.5 bg-orange-dim text-orange text-[10px] uppercase tracking-wider">
                      IN_PROGRESS
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}