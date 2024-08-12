"use client";
import React, { useEffect, useRef } from "react";
import Marquee from "../Components/Marquee";
import Navbar from "../Components/Navbar";
import About from "../Components/About";

const page = () => {

  return (
    <div className="bg-slate-100">
      <Marquee />
      <Navbar />
      <About />
    </div>
  );
};

export default page;
