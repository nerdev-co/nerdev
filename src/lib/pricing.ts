/**
 * Pricing in ₹ (primary) with USD secondary.
 * One source of truth so no page quotes a stale number.
 */

export interface Price {
  /** Primary figure, always rendered in ₹. */
  inr: number;
  /** Rounded USD equivalent, shown alongside. */
  usd: number;
  label: string;
}

export const services: { label: string; title: string; description: string; tags: string[]; price: Price }[] = [
  {
    label: '// 01',
    title: 'Web Applications',
    description: 'Next.js, full-stack, SaaS, e-commerce. Production-ready from day one.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    price: { inr: 150_000, usd: 1_800, label: 'FROM' },
  },
  {
    label: '// 02',
    title: 'AI Solutions',
    description: 'LLM integration, agents, automation, custom models that actually work.',
    tags: ['LLMs', 'LangChain', 'Python'],
    price: { inr: 100_000, usd: 1_200, label: 'FROM' },
  },
  {
    label: '// 03',
    title: 'Mobile Apps',
    description: 'React Native, iOS + Android. One codebase, two platforms.',
    tags: ['React Native', 'iOS', 'Android'],
    price: { inr: 200_000, usd: 2_400, label: 'FROM' },
  },
  {
    label: '// 04',
    title: 'API & Backend',
    description: 'REST, GraphQL, auth, infrastructure. The boring stuff done right.',
    tags: ['REST', 'GraphQL', 'AWS'],
    price: { inr: 75_000, usd: 900, label: 'FROM' },
  },
  {
    label: '// 05',
    title: 'Full Builds',
    description: '0→1, end-to-end product. We own the whole thing.',
    tags: ['Strategy', 'Build', 'Ship'],
    price: { inr: 350_000, usd: 4_200, label: 'FROM' },
  },
];

/** "FROM ₹1.5L" — Indian numbering, which is how local clients read prices. */
export function formatInrLakh(value: number): string {
  const lakhs = value / 100_000;
  if (lakhs >= 1) {
    const text = lakhs % 1 === 0 ? String(lakhs) : lakhs.toFixed(1);
    return `₹${text}L`;
  }
  return `₹${(value / 1000).toFixed(0)}K`;
}

export function formatUsd(value: number): string {
  return `$${value.toLocaleString('en-US')}`;
}

/** Compact two-line price for cards: ₹ primary, USD secondary. */
export function pricePair(price: Price): { primary: string; secondary: string } {
  return {
    primary: `${price.label} ${formatInrLakh(price.inr)}`,
    secondary: `~ ${formatUsd(price.usd)}`,
  };
}

export const budgetOptions = [
  { value: 'under-75k', label: 'Under ₹75,000' },
  { value: '75k-2.5l', label: '₹75,000 – ₹2.5L' },
  { value: '2.5l-8l', label: '₹2.5L – ₹8L' },
  { value: '8l-plus', label: '₹8L+' },
];

/** Monthly maintenance retainer, quoted in both currencies. */
export const retainer: Price = { inr: 20_000, usd: 240, label: 'FROM' };
