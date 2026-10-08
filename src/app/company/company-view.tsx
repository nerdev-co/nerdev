'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Building2, MapPin, FileText, ArrowUpRight, Mail } from 'lucide-react';
import { company, identifierRows } from '@/lib/company';


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: 'circOut' },
  },
};

const rows = [
  { label: 'Trade name', value: company.brand },
  { label: 'Legal name', value: company.legalName },
  { label: 'Entity type', value: company.entityType },
  { label: 'Jurisdiction', value: company.jurisdiction },
  { label: 'Trading since', value: company.tradingSince },
  { label: 'Principal place of business', value: `${company.registeredOffice.city}, ${company.jurisdiction}` },
  { label: 'Timezone', value: company.timezone },
];

export default function CompanyPage() {
  const ids = identifierRows();
  const addr = company.registeredOffice;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-24 pb-20 px-6 lg:px-12"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* HERO */}
        <motion.div variants={itemVariants} className="mb-16 lg:mb-24">
          <span className="font-mono text-xs text-text-3 tracking-wider uppercase">
            {'// LEGAL &amp; BUSINESS'}</span>
          <h1 className="font-sans text-4xl lg:text-6xl font-black mt-4 leading-[0.9] tracking-tight">
            The business behind<br />
            the work.
          </h1>
          <p className="text-base text-text-2 mt-8 max-w-lg leading-relaxed">
            You are contracting with a named individual trading as {company.brand}, not an
            anonymous agency. Everything you need to verify that before signing anything is on this
            page.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
          <div>
            {/* ENTITY DETAILS */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="font-sans text-2xl lg:text-3xl font-bold mb-8">
                Entity details
              </h2>

              <div className="border border-border bg-surface">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid sm:grid-cols-[200px_1fr] border-b border-border last:border-b-0"
                  >
                    <div className="px-5 py-4 font-mono text-xs text-text-3 uppercase tracking-wider border-b sm:border-b-0 sm:border-r border-border">
                      {row.label}
                    </div>
                    <div className="px-5 py-4 text-sm">{row.value}</div>
                  </div>
                ))}

                {ids.map((id) => (
                  <div
                    key={id.label}
                    className="grid sm:grid-cols-[200px_1fr] border-b border-border last:border-b-0"
                  >
                    <div className="px-5 py-4 font-mono text-xs text-text-3 uppercase tracking-wider border-b sm:border-b-0 sm:border-r border-border">
                      {id.label}
                    </div>
                    <div className="px-5 py-4 font-mono text-sm text-orange">{id.value}</div>
                  </div>
                ))}
              </div>

              {ids.length === 0 && (
                <p className="mt-4 font-mono text-xs text-text-3 leading-relaxed">
                  Tax and registration identifiers are published here once issued.
                </p>
              )}
            </motion.div>

            {/* REGISTERED OFFICE */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="font-sans text-2xl lg:text-3xl font-bold mb-8">
                Registered office
              </h2>

              <div className="bg-surface border border-border p-6 flex gap-4">
                <MapPin className="w-5 h-5 shrink-0 text-orange mt-1" />
                <div>
                  <address className="not-italic text-sm leading-relaxed">
                    {company.legalName}, trading as {company.brand}
                    <br />
                    {addr.line1}
                    <br />
                    {addr.city}, {addr.state} {addr.postalCode}
                    <br />
                    {addr.country}
                  </address>
                  {addr.isPlaceholder && (
                    <p className="font-mono text-[11px] text-text-3 mt-3">
                      ADDRESS_PENDING — full registered address published before first
                      contract.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* CONTRACTING */}
            <motion.div variants={itemVariants}>
              <h2 className="font-sans text-2xl lg:text-3xl font-bold mb-8">
                How we contract
              </h2>

              <div className="space-y-4 text-sm text-text-2 leading-relaxed">
                <p>
                  Contracts, invoices, and proposals are issued by{' '}
                  <span className="text-text">{company.legalName}</span> under the trade name{' '}
                  <span className="text-text">{company.brand}</span>. Payment is collected against
                  that individual, not a separate corporate account.
                </p>
                <p>
                  For clients who require a registered company on the invoice — typically
                  procurement or accounts-payable teams — say so in your first message and we will
                  provide the paperwork for an individual contractor setup.
                </p>
                <p>
                  Scope, price, and payment milestones are fixed in writing before any work starts.
                  What you own on delivery — code, infrastructure, domains, accounts — is written
                  into the proposal.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/process"
                  className="inline-flex items-center px-5 py-2.5 bg-transparent text-text font-mono text-xs font-bold uppercase tracking-wider border border-border-2 hover:border-orange hover:text-orange transition-all"
                >
                  How engagement works →
                </Link>
                <Link
                  href="/legal/terms"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-text-2 font-mono text-xs font-bold uppercase tracking-wider border border-border hover:border-orange hover:text-orange transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Terms
                </Link>
              </div>
            </motion.div>
          </div>

          {/* SIDEBAR */}
          <div>
            <motion.div variants={itemVariants} className="lg:sticky lg:top-24 space-y-4">
              <div className="bg-surface border border-border p-6">
                <Building2 className="w-5 h-5 text-orange mb-4" />
                <span className="font-mono text-xs text-text-3 uppercase tracking-wider">
                  One person. No handoffs.
                </span>
                <p className="text-sm text-text-2 mt-3 leading-relaxed">
                  The person you meet on the first call is the person who writes the code. There is
                  no account layer, no delivery team you never see, and no scope change handed to
                  someone else.
                </p>
              </div>

              <div className="bg-surface border border-border p-6">
                <span className="font-mono text-xs text-text-3 uppercase tracking-wider">
                  Verify independently
                </span>
                <ul className="mt-4 space-y-3">
                  {Object.entries(company.social).map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-mono text-sm text-text-2 hover:text-orange transition-colors"
                      >
                        {label}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-text-3 mt-4 leading-relaxed">
                  The GitHub organisation is the record. Commits, issues, and release history are
                  public.
                </p>
              </div>

              <div className="bg-surface border border-border p-6">
                <span className="font-mono text-xs text-text-3 uppercase tracking-wider">
                  Records
                </span>
                <ul className="mt-4 space-y-2">
                  {[
                    { href: '/legal/terms', label: 'Terms of engagement' },
                    { href: '/legal/privacy', label: 'Privacy policy' },
                  ].map((doc) => (
                    <li key={doc.href}>
                      <Link
                        href={doc.href}
                        className="font-mono text-sm text-text-2 hover:text-orange transition-colors"
                      >
                        → {doc.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 px-5 py-4 bg-orange text-white font-mono text-xs font-bold uppercase tracking-wider border border-orange shadow-[3px_3px_0_#b34500] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0_#b34500] transition-all"
              >
                <Mail className="w-4 h-4" />
                Request vendor form
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
