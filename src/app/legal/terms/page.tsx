import Link from 'next/link';
import type { Metadata } from 'next';
import { company, identifierRows, socialLinks } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Terms of Engagement',
  description: `The terms under which ${company.brand} accepts and delivers client engagements.`,
};

const updated = '2026-10-08';

export default function TermsPage() {
  const addr = company.registeredOffice;
  const ids = identifierRows();

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 lg:px-12">
      <div className="max-w-[760px] mx-auto">
        <span className="font-mono text-xs text-text-3 tracking-wider uppercase">
          {'// LEGAL / TERMS'}</span>
        <h1 className="font-sans text-4xl lg:text-5xl font-black mt-4 leading-[0.95] tracking-tight">
          Terms of engagement
        </h1>
        <p className="font-mono text-xs text-text-3 mt-4">
          Last updated {updated}
        </p>

        <div className="mt-12 space-y-10 text-sm text-text-2 leading-relaxed">
          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">1. Parties</h2>
            <p>
              These terms govern work supplied by{' '}
              <span className="text-text">{company.legalName}</span>, a registered individual
              trading under the name <span className="text-text">{company.brand}</span> (the{' '}
              <em>Provider</em>), to the client named in the signed proposal (the{' '}
              <em>Client</em>). Where a proposal states otherwise, that proposal prevails.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">2. Scope</h2>
            <p>
              Every engagement begins with a written proposal stating what will be delivered, what
              is explicitly out of scope, the timeline, and the price. Work outside that scope is
              quoted separately before it is started. No verbal agreement changes scope; the
              proposal is the contract.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">
              3. Fees, invoicing, and payment
            </h2>
            <p>
              Fees are quoted in Indian Rupees (₹) unless the proposal states otherwise. Projects
              are invoiced against the milestones in the proposal, with the balance due on
              delivery. Invoices are payable within 7 days. Work pauses on accounts more than 14
              days overdue.
            </p>
            <p>
              Taxes, duties, and any withholding required by law are the Client&apos;s
              responsibility. Bank charges on international transfers are borne by the Client.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">
              4. Intellectual property
            </h2>
            <p>
              On payment in full, the Client owns the source code, infrastructure configuration, and
              documentation produced specifically for them under the engagement. Repositories,
              accounts, domains, and third-party services created for the Client are registered in
              the Client&apos;s name.
            </p>
            <p>
              The Provider retains ownership of pre-existing tools, libraries, internal frameworks,
              and general know-how reused across engagements, and grants the Client a perpetual,
              irrevocable licence to use them as embedded in the delivered work. The Provider may
              reference the engagement in a portfolio unless the Client objects in writing before
              delivery.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">5. Confidentiality</h2>
            <p>
              Non-public information shared by the Client is used only to perform the engagement and
              is not disclosed to third parties. This obligation survives termination of the
              engagement.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">6. Third-party services</h2>
            <p>
              Work may depend on third-party services — cloud hosting, payment gateways, model
              providers, APIs. The Client is responsible for those accounts and their costs.
              The Provider does not control third-party availability, pricing, or policy changes,
              and is not liable for service failures on their part.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">
              7. Warranties and liability
            </h2>
            <p>
              The Provider warrants that work will be performed with reasonable skill and care, and
              that original code will not knowingly infringe third-party rights. The Provider does
              not warrant that the deliverable will meet the Client&apos;s commercial expectations or
              that third-party services will remain uninterrupted.
            </p>
            <p>
              Total liability is limited to the fees paid under the engagement. Neither party is
              liable for indirect or consequential loss, including lost profit or revenue.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">8. Client obligations</h2>
            <p>
              The Client will provide access, credentials, decisions, and feedback on the schedule
              set in the proposal, and is responsible for the accuracy of materials it supplies,
              including third-party licences and permissions. Delays caused by missing input move
              the delivery date accordingly.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">9. Termination</h2>
            <p>
              Either party may terminate with 14 days&apos; written notice. On termination the
              Client pays for all work completed up to that date and receives everything produced so
              far. Neither party is liable for consequential damages arising from termination.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">10. Governing law</h2>
            <p>
              These terms are governed by the laws of {company.jurisdiction}. Disputes are subject
              to the exclusive jurisdiction of the courts at {addr.city}.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-bold text-text mb-3">11. Contact</h2>
            <p>
              Written notices and contract correspondence go to{' '}
              <a href={`mailto:${company.email}`} className="text-orange hover:underline">
                {company.email}
              </a>
              . Posting to{' '}
              <span className="text-text">
                {addr.line1}, {addr.city}, {addr.state} {addr.postalCode}
              </span>
              , {addr.country}.
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
          <Link href="/legal/privacy" className="font-mono text-xs text-text-2 hover:text-orange">
            PRIVACY →
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
