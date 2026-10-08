import type { Metadata } from 'next';
import { company } from '@/lib/company';
import ProductsView from './products-view';

export const metadata: Metadata = {
  title: 'Products',
  description: `Software ${company.brand} builds and owns outright — tools we run ourselves, on our own infrastructure, with no client in the middle.`,
};

export default function Page() {
  return <ProductsView />;
}
