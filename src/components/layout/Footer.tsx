import Link from 'next/link';
import { company, socialLinks } from '@/lib/company';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-32 pb-10">
        <div className="pb-16 relative">
          <h2 className="font-sans text-[clamp(3rem,8vw,7rem)] font-black leading-[0.85] tracking-tight">
            BUILD <br />
            SOMETHING<br />
            <span style={{ color: 'var(--orange)' }}>UNREASONABLE.</span>
          </h2>
          <div className="mt-12 flex flex-col gap-2">
            <Link
              href={`mailto:${company.email}`}
              className="font-mono text-lg text-orange hover:underline w-fit"
            >
              → {company.email}
            </Link>
            <span className="font-mono text-xs text-text-3">
              Open for new projects. Response within 24h. {company.timezone}.
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-8 border-t border-border">
          <div className="space-y-1">
            <span className="font-mono text-xs text-text-3">
              © {new Date().getFullYear()} {company.copyrightHolder}
            </span>
            <span className="block font-mono text-[10px] text-text-3 opacity-70">
              {company.entityType} · {company.jurisdiction}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {socialLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-2 hover:text-orange transition-colors"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              { href: '/company', label: 'COMPANY' },
              { href: '/legal/terms', label: 'TERMS' },
              { href: '/legal/privacy', label: 'PRIVACY' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-text-3 hover:text-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
