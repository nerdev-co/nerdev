'use client';

interface MarqueeStripProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
}

export function MarqueeStrip({ 
  items = [], 
  speed = 30,
  direction = 'left'
}: MarqueeStripProps) {
  const content = items.join('  ·  ');
  const duration = speed;
  const translateX = direction === 'left' ? -50 : 50;

  return (
    <div 
      className="relative flex overflow-hidden bg-orange w-full h-11"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(${translateX}%); }
        }
        .marquee-content {
          animation: scroll ${duration}s linear infinite;
          white-space: nowrap;
        }
        .marquee-item {
          font-family: var(--mono);
          font-size: 12px;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
        }
      `}</style>
      <div className="marquee-content flex items-center">
        <span className="marquee-item">{content}</span>
        <span className="marquee-item" aria-hidden="true">{content}</span>
      </div>
    </div>
  );
}