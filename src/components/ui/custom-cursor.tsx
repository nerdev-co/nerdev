'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const interactiveElements = ['a', 'button', 'input', 'textarea', 'select'];
      
      if (interactiveElements.includes(tagName)) {
        setIsHovering(true);
      } else if (target.closest('a, button, input, textarea, select')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
        mixBlendMode: 'difference' as const,
        width: 12,
        height: 12,
        borderRadius: '50%',
        backgroundColor: 'var(--orange)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease, transform 0.15s ease-out',
      }}
    />
  );
}