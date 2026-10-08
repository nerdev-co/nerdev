import type { Metadata } from 'next';
import { company } from '@/lib/company';
import ContactView from './contact-view';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Start a project with ${company.brand}. Tell us the problem and get a written proposal within 24 hours.`,
};

export default function Page() {
  return <ContactView />;
}
