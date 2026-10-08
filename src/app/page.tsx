import type { Metadata } from 'next';
import { company } from '@/lib/company';
import HomeView from './home-view';

export const metadata: Metadata = {
  title: `${company.brand} — Product Engineering Studio`,
  description:
    `${company.brand} is a one-person product engineering studio run by ${company.legalName}. ` +
    'Web applications, AI integration, mobile apps, and backend systems — scoped in writing, ' +
    'shipped in weeks.',
};

export default function Page() {
  return <HomeView />;
}
