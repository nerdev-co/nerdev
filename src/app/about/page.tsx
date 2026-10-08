import type { Metadata } from 'next';
import { company } from '@/lib/company';
import AboutView from './about-view';

export const metadata: Metadata = {
  title: 'About',
  description: `${company.legalName} is the whole of ${company.brand} — a one-person product engineering studio, plus the collaborators he calls in when an engagement needs them.`,
};

export default function Page() {
  return <AboutView />;
}
