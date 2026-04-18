'use client';

import { useState, useRef, useEffect } from 'react';

interface ScrambleLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export function ScrambleLink({ href, children, className = '' }: ScrambleLinkProps) {
  const [display, setDisplay] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const text = typeof children === 'string' ? children : '';

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!text) return;
    setIsScrambling(true);
    
    let iteration = 0;
    const originalText = text;
    
    intervalRef.current = setInterval(() => {
      setDisplay(
        originalText
          .split('')
          .map((char, i) => {
            if (i < iteration) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      
      if (iteration >= originalText.length) {
        setIsScrambling(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplay(text);
    setIsScrambling(false);
  };

  return (
    <a 
      href={href} 
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {display}
    </a>
  );
}