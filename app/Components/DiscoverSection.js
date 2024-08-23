'use client'
import React, { useRef, useEffect, } from "react";
import Image from "next/image";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";


const ProductRangeCard = () => {
  return (
    <div className="parent-container w-full  bg-zinc-100 tablet:mb-16 desktop:mb-0">
      <div className="max-w-6xl mx-auto py-12 desktop:py-20 overflow-hidden">
        <div
          className="flex flex-col px-4 items-center justify-center tablet:flex-row tablet:ml-24 tablet:mt-0
        desktop:ml-6 desktop:mt-0"
        >
          <div className="tablet:w-1/2 p-4 mt-4 flex flex-col desktop:gap-4 justify-center">
            <h2 className="section text-secondary-blue text-3xl tablet:text-4xl desktop:text-5xl desktop:w-full tablet:w-96  font-outfit font-bold mb-4">
              Discover our exquisite product range
            </h2>
            <p className="text-charcoal section text-sm tablet:text-base tablet:w-96 font-openSans mb-6">
              Experience the beauty and craftsmanship of our handcrafted
              hornware collection
            </p>
            <div className="flex flex-row section gap-2 ">
              <PrimaryBtn href='/products'>
                  Explore Products
              </PrimaryBtn>
              <SecondaryBtn href='/contact'>
                  Contact us
              </SecondaryBtn>
            </div>
          </div>
          <div className="tablet:w-1/2 section">
            <div className="relative w-80 desktop:w-full">
              <Image
                src="/discover.jpg"
                alt="Handcrafted hornware collection"
                width={500}
                height={0}
                
                className="rounded-xl shadow-xl mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRangeCard;
