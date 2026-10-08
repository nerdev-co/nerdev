'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { formatInrLakh, formatUsd } from '@/lib/pricing';

interface TechStackConfiguratorProps {
  className?: string;
}

/** ₹ prices are primary; USD is a rounded secondary figure. */
const USD_PER_INR = 0.012;

const OPTIONS = [
  { id: 'web', label: 'Web Application', price: 150000, locked: true },
  { id: 'mobile', label: 'Mobile App (iOS + Android)', price: 200000, locked: false },
  { id: 'ai', label: 'AI Integration', price: 100000, locked: false },
  { id: 'api', label: 'Custom API', price: 75000, locked: false },
  { id: 'auth', label: 'Authentication', price: 35000, locked: false },
  { id: 'db', label: 'Database Architecture', price: 55000, locked: false },
];

export function TechStackConfigurator({ className = '' }: TechStackConfiguratorProps) {
  const [selected, setSelected] = useState<string[]>(['web']);
  const [result, setResult] = useState<number | null>(null);

  const toggleOption = (id: string) => {
    if (id === 'web') return;
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  const calculate = () => {
    const total = selected.reduce((sum, id) => {
      const opt = OPTIONS.find(o => o.id === id);
      return sum + (opt?.price || 0);
    }, 0);
    setResult(total);
  };

  return (
    <div className={`${className}`}>
      <div className="space-y-1">
        {OPTIONS.map((opt) => {
          const isSelected = selected.includes(opt.id);
          const isDisabled = opt.locked;
          
          return (
            <button
              key={opt.id}
              onClick={() => toggleOption(opt.id)}
              disabled={isDisabled}
              className={`w-full flex items-center justify-between px-4 py-3 border transition-all duration-200 text-left ${
                isSelected 
                  ? 'bg-orange-dim border-l-[3px] border-l-orange border-border' 
                  : 'bg-surface-2 border-border hover:border-border-2'
              } ${isDisabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 border flex items-center justify-center ${
                  isSelected ? 'bg-orange border-orange' : 'border-text-3'
                }`}>
                  {isSelected && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="font-mono text-sm text-text">{opt.label}</span>
              </div>
              <span className={`font-mono text-sm ${isSelected ? 'text-orange' : 'text-text-3'}`}>
                {isSelected
                  ? formatInrLakh(opt.price)
                  : `+${formatInrLakh(opt.price)}`}
              </span>
            </button>
          );
        })}
      </div>

      <button
        onClick={calculate}
        className="w-full mt-4 py-3 bg-orange text-white font-mono text-sm font-bold uppercase tracking-wider border border-orange shadow-[3px_3px_0_#b34500] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0_#b34500] transition-all"
      >
        Calculate
      </button>

      <AnimatePresence>
        {result !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 pt-4 border-t border-orange"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-sm text-text-3">ESTIMATED STARTING PRICE</span>
              <span className="font-mono text-2xl text-orange">{formatInrLakh(result)}</span>
            </div>
            <div className="flex items-baseline justify-between gap-4 mt-1">
              <span className="font-mono text-[10px] text-text-3 uppercase tracking-wider">
                Approx. USD
              </span>
              <span className="font-mono text-xs text-text-2">
                {formatUsd(Math.round(result * USD_PER_INR))}
              </span>
            </div>
            <p className="mt-3 font-mono text-[11px] text-text-3">
              Starting estimate only. Final scope and price are fixed in a written proposal.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}