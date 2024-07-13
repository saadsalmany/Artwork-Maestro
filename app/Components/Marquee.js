"use client";
import React from "react";
import FastMarquee from "react-fast-marquee";

const Marquee = () => {
  return (
    <div className="bg-secondary-blue fixed top-0 left-0 right-0 text-white text-[8px] z-50 desktop:text-xs tablet:text-[10px] list-disc py-3 w-full">
      <FastMarquee speed={50} gradient={false}>
        {[
          "BONE INLAY PRODUCTS",
          "BUFFALO HORN PRODUCTS",
          "COPPER MAGNETIC BRACELETS",
          "FASHION JEWELLERY",
          "MOTHER OF PEARL PRODUCTS",
          "MUKHBAR BAKHOOR PRODUCTS",
          "SHOFAR",
          "WOOD HANDICRAFTS PRODUCTS",
        ].map((item, index) => (
          <span key={index} className="mx-4 flex items-center">
            <span className="mr-2">•</span> {item}
          </span>
        ))}
      </FastMarquee>
    </div>
  );
};

export default Marquee;