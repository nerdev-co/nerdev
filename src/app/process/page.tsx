import type { Metadata } from 'next';
import { company } from '@/lib/company';
import ProcessView from './process-view';

export const metadata: Metadata = {
  title: 'Process',
  description: `How ${company.brand} runs an engagement — discovery, written proposal, weekly build cycles, ownership handover, and optional support.`,
};

export default function Page() {
  return <ProcessView />;
}
