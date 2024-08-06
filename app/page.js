import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Marquee from "./Components/Marquee";
import CollectionSection from "./Components/CollectionSection";
import BenefitSection from "./Components/BenefitSection";
import Testimonial from "./Components/Testimonial";
import DiscoverSection from "./Components/DiscoverSection";
import Footer from "./Components/Footer";

function page() {
  return (
    
    <main className="w-full h-[400vh]">
      <Marquee/>
      <Navbar />
      <HeroSection/>
      <CollectionSection/>
      <BenefitSection/>
      <Testimonial/>
      <DiscoverSection/>
      <Footer/>

      

    </main>
  );
}

export default page;
