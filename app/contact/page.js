import React from "react";
import Navbar from "../Components/Navbar";
import Marquee from "../Components/Marquee";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function page() {
  return (
    <>
      <Marquee/>
      <Navbar />
      <Contact/>
      <Footer/>
    </>
  );
}

export default page;
