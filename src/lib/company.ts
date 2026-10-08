/**
 * Single source of truth for nerdev's brand + legal identity.
 * Every page, metadata block, and legal document reads from here.
 *
 * TODO markers are intentional: nerdev is not yet a registered entity.
 * Fill each TODO once registration is done and the whole site updates.
 */

export const company = {
  /** Trade name / brand. Used in all customer-facing copy. */
  brand: 'nerdev',

  /** The named individual who contracts with clients. */
  legalName: 'Nalin Dalal',
  legalNameIsPlaceholder: false,

  /** How nerdev contracts. Registered individual, trading under the brand. */
  entityType: 'Registered individual (sole proprietorship)',
  entityTypeIsPlaceholder: false,

  jurisdiction: 'India',
  jurisdictionIsPlaceholder: false,

  /**
   * Registered office address. Required on invoices and contracts.
   * TODO: replace with the real registered address before going live.
   */
  registeredOffice: {
    line1: 'TODO — registered office address',
    city: 'TODO — city',
    state: 'TODO — state',
    postalCode: 'TODO — PIN code',
    country: 'India',
    isPlaceholder: true,
  },

  /**
   * Government / tax identifiers.
   * TODO: fill in once registered. Leave null to hide the field entirely.
   */
  identifiers: {
    gstin: null as string | null,
    udyam: null as string | null,
    pan: null as string | null,
    iec: null as string | null,
  },

  foundingYear: 2024,
  tradingSince: '2024',

  siteUrl: 'https://nerdev.in',
  email: 'admin@nerdev.in',
  bookingUrl: 'https://cal.com/nerdev',

  timezone: 'IST (UTC+5:30)',

  social: {
    github: 'https://github.com/nerdev-co',
    twitter: 'https://twitter.com/nerdev_in',
    linkedin: 'https://linkedin.com/company/nerdev',
  },

  /** Shown in the footer and on every legal page. */
  copyrightHolder: 'Nalin Dalal, trading as nerdev',
} as const;

/** Fill in a legal identifier only if it actually exists. */
export function identifierRows() {
  const labels: Record<string, string> = {
    gstin: 'GSTIN',
    udyam: 'Udyam (MSME)',
    pan: 'PAN',
    iec: 'IEC',
  };

  return Object.entries(company.identifiers)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => ({ label: labels[key], value: value as string }));
}

export const socialLinks = [
  { label: 'GitHub', href: company.social.github },
  { label: 'Twitter', href: company.social.twitter },
  { label: 'LinkedIn', href: company.social.linkedin },
];
