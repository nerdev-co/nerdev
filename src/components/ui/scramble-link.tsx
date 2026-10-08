'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface ScrambleLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CHARS = '!<>-_\\/[]{}—=+*^?#________';
const TICK_MS = 30;

export function ScrambleLink({ href, children, className = '' }: ScrambleLinkProps) {
  const text = typeof children === 'string' ? children : '';
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const iterationsRef = useRef(0);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setDisplay(text);
  };

  const handleMouseEnter = () => {
    if (!text || intervalRef.current) return;

    iterationsRef.current = 0;
    const total = text.length;

    intervalRef.current = setInterval(() => {
      const resolved = Math.floor(iterationsRef.current);

      setDisplay(
        text
          .split('')
          .map((char, i) =>
            i < resolved ? char : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join('')
      );

      iterationsRef.current += 1 / 3;

      if (iterationsRef.current >= total) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setDisplay(text);
      }
    }, TICK_MS);
  };

  return (
    <Link
      href={href}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={stop}
    >
      {display}
    </Link>
  );
}
