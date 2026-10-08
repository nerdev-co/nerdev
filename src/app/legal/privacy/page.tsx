import Link from 'next/link';
import type { Metadata } from 'next';
import { company, identifierRows, socialLinks } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${company.brand} collects, uses, and protects personal data submitted through this site.`,
};

const updated = '2026-10-08';

export default function PrivacyPage() {
  const addr = company.registeredOffice;
  const ids = identifierRows();

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 lg:px-12">
      <div className="max-w-[760px] mx-auto">
        <span className="font-mono text-xs text-text-3 tracking-wider uppercase">
          {'// LEGAL / PRIVACY'}</span>
        <h1 className="font-sans text-4xl lg:text-5xl font-black mt-4 leading-[0.95] tracking-tight">
          Privacy policy
        </h1>
        <p className="font-mono text-xs text-text-3 mt-4">
          Last updated {updated}
        </p>

        <div className="mt-12 space-y-10 text-sm text-text-2 leading-relaxed">
          <section>
            <p>
              {company.legalName}, trading as {company.brand}, operates{' '}
              {company.siteUrl.replace('https://', '')}. This policy covers personal data collected
              through this website. Client project data is governed by the confidentiality terms in
              the applicable proposal, not by this policy.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">What is collected</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-text">Enquiry form.</span> Your name, email address, budget
                range, and the project description you submit.
              </li>
              <li>
                <span className="text-text">Server logs.</span> IP address, browser type, and
                pages requested, retained by the hosting provider for security and diagnostics.
              </li>
              <li>
                <span className="text-text">No analytics or advertising trackers.</span> No
                third-party cookies, no profiling, no ad pixels on this site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">Why it is collected</h2>
            <p>
              Enquiry data is used only to assess the enquiry and respond to it. Server logs are
              used to operate the site and investigate abuse. Data is not sold, rented, or shared
              for marketing.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">How long it is kept</h2>
            <p>
              Enquiry records are kept for up to 24 months, then deleted. Server logs follow the
              hosting provider&apos;s retention policy, typically 30 to 90 days.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">Processors</h2>
            <p>
              Enquiry messages are delivered through an email provider, and the site is hosted on
              third-party infrastructure. Those processors receive only the data needed to perform
              their function and are not permitted to use it for their own purposes.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">Your rights</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data, and you
              can withdraw an enquiry at any time. Email{' '}
              <a href={`mailto:${company.email}`} className="text-orange hover:underline">
                {company.email}
              </a>{' '}
              with the subject line <span className="font-mono text-xs">DATA_REQUEST</span>. Requests
              are answered within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">Security</h2>
            <p>
              Data is transmitted over HTTPS. Access is limited to what is needed to respond to
              enquiries. No system is perfectly secure, but nothing collected here is sensitive
              financial or health data.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">
              Controller and contact
            </h2>
            <p>
              Data controller: {company.legalName}, trading as {company.brand},{' '}
              {addr.line1}, {addr.city}, {addr.state} {addr.postalCode}, {addr.country}.
            </p>
            {ids.length > 0 && (
              <p className="font-mono text-xs text-text-3 mt-3">
                {ids.map((id) => `${id.label}: ${id.value}`).join(' · ')}
              </p>
            )}
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center gap-6">
          <span className="font-mono text-xs text-text-3">
            © {new Date().getFullYear()} {company.copyrightHolder}
          </span>
          <Link href="/legal/terms" className="font-mono text-xs text-text-2 hover:text-orange">
            TERMS →
          </Link>
          <Link href="/company" className="font-mono text-xs text-text-2 hover:text-orange">
            COMPANY DETAILS →
          </Link>
        </div>

        <p className="mt-8 font-mono text-[10px] text-text-3 uppercase tracking-wider">
          {socialLinks.map((s) => s.label).join(' · ')} · {company.siteUrl.replace('https://', '')}
        </p>
      </div>
    </div>
  );
}
