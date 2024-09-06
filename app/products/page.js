import React from "react";
import ProductShowcase from "../Components/ProductsShowcase";
import Marquee from "../Components/Marquee";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// export const Metadata = {
//   title: "Explore Our handicraft products",
//   description:
//     "Unique, handcrafted hornware products and coasters, made with passion and skill",
//   alternates: {
//     canonical: "https://artworkmaestro.com/products",
//   },
//   images: [
//     {
//       url: "https://www.artworkmaestro.com/productsImages/PF1.jpg",
//       width: 1200,
//       height: 630,
//     },
//   ],
// };
function page() {
  return (
    <div className="bg-zinc-100">
      <Marquee />
      <Navbar />
      <ProductShowcase />
      <Footer />
    </div>
  );
}

export default page;
