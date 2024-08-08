import Marquee from '@/app/Components/Marquee';
import { products } from '../../data/Products';
import Navbar from '@/app/Components/Navbar';
import Footer from '@/app/Components/Footer';
import ClientComponent from '@/app/Components/ClientComponent';

export default function ProductPage({ params }) {
  return (
    <ClientComponent params={params} />
  );
}

export async function generateStaticParams() {
  return products.map(product => ({
    slug: product.slug,
  }));
}