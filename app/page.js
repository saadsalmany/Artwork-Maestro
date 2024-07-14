import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Marquee from "./Components/Marquee";
import CollectionSection from "./Components/CollectionSection";

function page() {
  return (
    
    <main className="w-full h-[400vh]">
      <Marquee/>
      <Navbar />
      <HeroSection/>
      <CollectionSection/>

      

    </main>
  );
}

export default page;
