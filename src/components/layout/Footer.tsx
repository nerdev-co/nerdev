import Link from 'next/link';

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
              href="mailto:admin@nerdev.in"
              className="font-mono text-lg text-orange hover:underline w-fit"
            >
              → admin@nerdev.in
            </Link>
            <span className="font-mono text-xs text-text-3">
              Open for new projects. Response within 24h. IST timezone.
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-8 border-t border-border">
          <span className="font-mono text-xs text-text-3">
            © 2026 nerdev. All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/nalindalal"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-2 hover:text-orange transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://twitter.com/nerdev_in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-2 hover:text-orange transition-colors"
            >
              TWITTER
            </a>
            <a
              href="https://linkedin.com/company/nerdev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-2 hover:text-orange transition-colors"
            >
              LINKEDIN
            </a>
          </div>

          <span className="font-mono text-[10px] text-text-3 uppercase tracking-wider">
            MADE BY US. OBVIOUSLY.
          </span>
        </div>
      </div>
    </footer>
  );
}