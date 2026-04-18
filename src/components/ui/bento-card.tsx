'use client';

interface BentoCardProps {
  label?: string;
  title: string;
  description?: string;
  tags?: string[];
  price?: string;
  children?: React.ReactNode;
  span?: 'normal' | 'wide';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function BentoCard({ 
  label, 
  title, 
  description, 
  tags, 
  price, 
  children,
  span = 'normal',
  className = '',
  onClick,
  href
}: BentoCardProps) {
  const content = (
    <div
      className={`bg-surface border border-border p-7 transition-all duration-200 hover:-translate-y-2 hover:border-orange hover:shadow-[8px_8px_0_var(--orange)] ${
        span === 'wide' ? 'md:col-span-2' : ''
      } ${className}`}
    >
      {label && (
        <span className="block font-mono text-[10px] text-text-3 mb-3 tracking-wider">
          {label}
        </span>
      )}
      <h3 className="font-sans text-lg font-bold mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-text-2 leading-relaxed mb-4">{description}</p>
      )}
      {tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span 
              key={tag}
              className="font-mono text-[10px] text-text-3 border border-border px-2 py-1 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {price && (
        <div className="pt-4 border-t border-border">
          <span className="font-mono text-sm text-orange">{price}</span>
        </div>
      )}
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block cursor-pointer">
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="block w-full text-left cursor-pointer">
        {content}
      </button>
    );
  }

  return content;
}