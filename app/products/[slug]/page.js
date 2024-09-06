import Footer from "@/app/Components/Footer";
import { products } from "../../data/Products";
import ClientComponent from "@/app/Components/ClientComponent";
import Marquee from "@/app/Components/Marquee";
import Navbar from "@/app/Components/Navbar";
import Head from "next/head";

export default function ProductPage({ params }) {
  const product = products.find((product) => product.slug === params.slug);

  return (
    <>
      <Head>
        <title>{product.name} - Artwork Maestro | {product.category}</title>
        <meta
          name="description"
          content={`Discover ${product.name}, a unique ${product.category} artwork by our maestros. Learn more about the piece, its story, and the artist.`}
        />
        <link rel="canonical" href={`https://www.artworkmaestro.com/products/${params.slug}`} />
        <meta name="keywords" content={`${product.name}, ${product.category}, artwork, art collection, ${product.tags.join(', ')}`} />
        <meta name="robots" content="index, follow" />
      </Head>
      <Marquee/>
      <Navbar/>
      <ClientComponent params={params} products={products} />
      <Footer/>
    </>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}