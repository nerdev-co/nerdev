import type { Metadata } from 'next';
import { company } from '@/lib/company';
import CompanyView from './company-view';

export const metadata: Metadata = {
  title: 'Company',
  description: `Legal and business information for ${company.brand} — entity type, contracting identity, registered office, and how to verify the business before you contract.`,
};

export default function Page() {
  return <CompanyView />;
}
