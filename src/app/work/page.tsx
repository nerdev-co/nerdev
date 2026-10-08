import type { Metadata } from 'next';
import WorkView from './work-view';

export const metadata: Metadata = {
  title: 'Client Work',
  description:
    'Selected engagements delivered for startups — scope, approach, and measured outcomes.',
};

export default function Page() {
  return <WorkView />;
}
