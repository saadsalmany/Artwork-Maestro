import { products } from "../../data/Products";
import ClientComponent from "@/app/Components/ClientComponent";

export default function ProductPage({ params }) {
  return <ClientComponent params={params} products={products} />;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
