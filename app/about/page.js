"use client";
import React, { useEffect, useRef } from "react";
import Marquee from "../Components/Marquee";
import Navbar from "../Components/Navbar";
import About from "../Components/AboutUs";
import Footer from "../Components/Footer";

// export const Metadata = {
//   title: "About Artwork Maestro",
//   description:
//     "Know more about Artwork Maestro and our handcrafted hornware products",
//   alternates: {
//     canonical: "https://artworkmaestro.com/about",
//   },
//   images: [
//     {
//       url: "https://www.artworkmaestro.com/productsImages/expo2.png",
//       width: 1200,
//       height: 630,
//     },
//   ],
// };

const page = () => {
  return (
    <div className="bg-white">
      <Marquee />
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default page;
