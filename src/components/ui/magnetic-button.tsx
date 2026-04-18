'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  strength?: number;
}

export function MagneticButton({ 
  children, 
  href, 
  className = '', 
  strength = 0.3 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouse = (e: React.MouseEvent) => {
    if (isTouchDevice) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distX = clientX - centerX;
    const distY = clientY - centerY;
    
    const maxDist = 120;
    const dist = Math.sqrt(distX * distX + distY * distY);
    
    if (dist < maxDist) {
      setPosition({
        x: distX * strength,
        y: distY * strength
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonContent = (
    <motion.button
      ref={ref}
      className={className}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <div className="inline-block">
        {buttonContent}
      </div>
    );
  }

  return buttonContent;
}