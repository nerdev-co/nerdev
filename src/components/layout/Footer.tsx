import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="pb-16">
          <h2 className="font-sans text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.9] tracking-tight">
            LET&apos;S BUILD <br />
            <span style={{ color: 'var(--orange)' }}>SOMETHING.</span>
          </h2>
          <div className="mt-8 flex flex-col gap-2">
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
            {['GITHUB', 'TWITTER', 'LINKEDIN'].map(link => (
              <Link
                key={link}
                href="#"
                className="font-mono text-xs text-text-2 hover:text-orange transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          <span className="font-mono text-[10px] text-text-3 uppercase tracking-wider">
            MADE BY US. OBVIOUSLY.
          </span>
        </div>
      </div>
    </footer>
  );
}