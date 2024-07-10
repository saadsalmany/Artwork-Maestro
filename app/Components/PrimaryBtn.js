"use client";

import React from "react";

function PrimaryBtn() {
  return (
    <button 
    className="bg-primary-red px-3 py-2.5 rounded-full mr-0 text-white font-outfit text-xs
     sm:text-sm sm:px-5 
     md:text-sm lg:text-sm 
     lg:px-4 lg:py-2.5 
     hover:bg-secondary-blue transition-all ease-in-out">
      ORDER NOW
    </button>
  );
}

export default PrimaryBtn;
