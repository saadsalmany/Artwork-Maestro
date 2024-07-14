import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Marquee from "./Components/Marquee";
import CollectionSection from "./Components/CollectionSection";

function page() {
  return (
    
    <main className="w-full h-screen">
      <Marquee/>
      <Navbar />
      <HeroSection/>
      <CollectionSection/>
      <div className="h-screen bg-blue-100"></div>

      

    </main>
  );
}

export default page;
