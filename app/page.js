import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Marquee from "./Components/Marquee";

function page() {
  return (
    
    <main className="w-full h-screen">
      <Marquee/>
      <Navbar />
      <HeroSection/>
      <div className="h-screen bg-blue-100"></div>

      

    </main>
  );
}

export default page;
