'use client';

import { useEffect, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARS = '!@#$%&*/\\|?><[]{}01';
const CYCLE_MS = 40;
const RESOLVE_MS = 200;

export function ScrambleText({ text, className = '', delay = 0 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const chars = text.split('');
    const timers: (ReturnType<typeof setInterval> | ReturnType<typeof setTimeout>)[] = [];

    const start = setTimeout(() => {
      chars.forEach((char, i) => {
        if (char === ' ') return;

        const cycle = setInterval(() => {
          setDisplayText(prev => {
            const next = prev.split('');
            next[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
            return next.join('');
          });
        }, CYCLE_MS);

        const resolve = setTimeout(() => {
          clearInterval(cycle);
          setDisplayText(prev => {
            const next = prev.split('');
            next[i] = char;
            return next.join('');
          });
        }, RESOLVE_MS);

        timers.push(cycle, resolve);
      });

      timers.push(
        setTimeout(() => setDisplayText(text), chars.length * CYCLE_MS + RESOLVE_MS)
      );
    }, delay);

    timers.push(start);

    return () => {
      timers.forEach(t => {
        clearTimeout(t);
        clearInterval(t as ReturnType<typeof setInterval>);
      });
    };
  }, [text, delay]);

  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {displayText}
    </span>
  );
}
