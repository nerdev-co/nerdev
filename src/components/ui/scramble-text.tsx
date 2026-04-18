'use client';

import { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARS = '!@#$%&*/\\|?><[]{}01';

export function ScrambleText({ text, className = '', delay = 0 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsScrambling(true);
      
      const chars = text.split('');
      const finalChars = chars.map((char, i) => {
        if (char === ' ') return ' ';
        return char;
      });

      intervalsRef.current = chars.map((_, i) => {
        const cycleInterval = setInterval(() => {
          setDisplayText(prev => {
            const chars = prev.split('');
            const scrambledChars = chars.map((char, j) => {
              if (j === i && char !== ' ') {
                return CHARS[Math.floor(Math.random() * CHARS.length)];
              }
              return char;
            });
            return scrambledChars.join('');
          });
        }, 40);

        const resolveTimeout = setTimeout(() => {
          clearInterval(cycleInterval);
          setDisplayText(prev => {
            const chars = prev.split('');
            chars[i] = finalChars[i];
            return chars.join('');
          });
        }, 200);

        return cycleInterval;
      });

      const cleanupTimeout = setTimeout(() => {
        setDisplayText(text);
      }, chars.length * 40 + 200);

      return () => {
        intervalsRef.current.forEach(clearInterval);
        clearTimeout(cleanupTimeout);
      };
    }, delay);

    return () => {
      clearTimeout(startTimeout);
    };
  }, [text, delay]);

  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {displayText}
    </span>
  );
}