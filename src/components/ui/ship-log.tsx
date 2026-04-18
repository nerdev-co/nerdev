'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShipLogEntry {
  date: string;
  status: 'DONE' | 'IN_PROGRESS';
  description: string;
}

export function ShipLog({ className = '' }: { className?: string }) {
  const [logs, setLogs] = useState<ShipLogEntry[]>([
    { date: '2026-04-12', status: 'DONE', description: 'Deployed SaaS Dashboard for Client_X' },
    { date: '2026-04-10', status: 'DONE', description: 'Optimized PostgreSQL queries for fintech app' },
    { date: '2026-04-08', status: 'DONE', description: 'Launched MVP for healthtech startup' },
    { date: '2026-04-05', status: 'DONE', description: 'Built custom CMS for media company' },
    { date: '2026-04-03', status: 'DONE', description: 'Integrated payment gateway for e-commerce' },
    { date: '2026-04-01', status: 'DONE', description: 'Created AI-powered chatbot for customer support' },
    { date: '2026-03-28', status: 'DONE', description: 'Redesigned corporate website for law firm' },
    { date: '2026-03-25', status: 'DONE', description: 'Developed inventory management system' },
    { date: '2026-03-20', status: 'DONE', description: 'Implemented real-time analytics dashboard' },
    { date: '2026-04-17', status: 'IN_PROGRESS', description: 'Building AI-agent for logistics' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLogs = [...prev];
        const inProgressIndex = newLogs.findIndex(log => log.status === 'IN_PROGRESS');
        if (inProgressIndex !== -1) {
          newLogs[inProgressIndex].status = 'DONE';
          const newLog: ShipLogEntry = {
            date: new Date().toISOString().split('T')[0],
            status: 'IN_PROGRESS',
            description: `Working on ${['AI integration', 'performance optimization', 'new feature'][Math.floor(Math.random() * 3)]} for client ${['Acorp', 'BizInc', 'CoLtd'][Math.floor(Math.random() * 3)]}`
          };
          return [newLog, ...newLogs.slice(0, -1)];
        }
        return newLogs;
      });
    }, 12000);

    return () => clearInterval(interval);
  }, []);

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
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse-slow"></span>
            <span className="font-mono text-xs text-green">LIVE</span>
          </div>
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