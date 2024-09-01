import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Marquee from "./Components/Marquee";
import CollectionSection from "./Components/CollectionSection";
import BenefitSection from "./Components/BenefitSection";
import Testimonial from "./Components/Testimonial";
import DiscoverSection from "./Components/DiscoverSection";
import Footer from "./Components/Footer";

export const metadata = {
  title: 'Artwork Maestro | Home',
  description: 'Welcome to Artwork Maestro - Your destination for handcrafted hornware products',
  alternates: {
    canonical: 'https://artworkmaestro.com',
  },
  images: [
    {
      url: "https://www.artworkmaestro.com/productsImages/p1.png",
      width: 1200,
      height: 630,
    },
  ],
};

function Page() {
  return (
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
  );
}

export default Page;