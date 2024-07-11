"use client";

import React from "react";

function PrimaryBtn() {
  return (
    <button 
    className="bg-primary-red px-3 py-2.5 rounded-full mr-0 text-white font-outfit text-xs
     sm:text-sm sm:px-5 
     md:text-sm lg:text-base
     lg:px-9  lg:py-2
     hover:bg-secondary-blue transition-all duration-300 ease-in-out">
      ORDER NOW
    </button>
  );
}

export default PrimaryBtn;
