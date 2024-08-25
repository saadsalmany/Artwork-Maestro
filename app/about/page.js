"use client";
import React, { useEffect, useRef } from "react";
import Marquee from "../Components/Marquee";
import Navbar from "../Components/Navbar";
import About from "../Components/AboutUs";
import Footer from "../Components/Footer";

const page = () => {

  return (
    <div className="bg-white">
      <Marquee />
      <Navbar />
      <About />
      <Footer/>
    </div>
  );
};

export default page;
