import React from "react";
import ProductShowcase from "../Components/ProductsShowcase";
import Marquee from "../Components/Marquee";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";

function ProductPage() {
  return (
    <>
      <Head>
        <title>Artwork Maestro - Exclusive Art Collections</title>
        <meta
          name="description"
          content="Explore exclusive art collections, featuring unique artwork from emerging artists. Discover your next masterpiece!"
        />
        <link rel="canonical" href="https://www.artworkmaestro.com/products" />
        <meta name="keywords" content="artwork maestro, art collections, exclusive artwork, emerging artists" />
      </Head>
      <div className="bg-zinc-100">
        <Marquee />
        <Navbar />
        <ProductShowcase />
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;