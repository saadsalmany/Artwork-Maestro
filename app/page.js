import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Marquee from "./Components/Marquee";
import CollectionSection from "./Components/CollectionSection";
import BenefitSection from "./Components/BenefitSection";
import Testimonial from "./Components/Testimonial";
import DiscoverSection from "./Components/DiscoverSection";
import Footer from "./Components/Footer";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>Artwork Maestro - Explore Handicraft Items</title>
        <meta name="description" content="Explore unique handicraft artwork collections, discover emerging artists, and get exclusive benefits at Artwork Maestro." />
        <link rel="canonical" href="https://www.artworkmaestro.com/" />
        <meta name="keywords" content="artwork, handicraft, bone, mother of pearl, artworkmaestro, art collections, emerging artists, exclusive benefits" />
      </Head>
      <main className="w-full bg-white h-[400vh]">
        <Marquee />
        <Navbar />
        <HeroSection />
        <CollectionSection />
        <BenefitSection />
        <Testimonial />
        <DiscoverSection />
        <Footer />
      </main>
    </>
  );
}

export default HomePage;