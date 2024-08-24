"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";


const HeroSection = () => {

  return (
    <>
      <section
        className="hero-section bg-zinc-100 desktop:mt-6 mb-12 desktop:mb-0 flex flex-col tablet:items-center desktop:flex-row items-stretch justify-between px-6 tablet:px-16 desktop:px-26 max-w-7xl mx-auto relative"
      >
        <div className="content-wrapper desktop:gap-5  tablet:gap-7 gap-2 flex-1 pt-16 h-auto tablet:pt-28 desktop:pt-16 flex flex-col tablet:items-center desktop:items-start desktop:w-0">
          <h1
            className="text-[7vw] tablet:text-[6vw] desktop:text-[3vw] font-medium font-outfit mb-0 desktop:leading-relaxed text-secondary-blue tablet:text-center desktop:text-left"
          >
            Where History Meets Home:
          </h1>
          <p
            className="text-xl tablet:text-[4.5vw] tablet:w-[60vw] mb-3 font-outfit leading-tight font-light desktop:mt-0 desktop:text-[2.2vw] text-secondary-blue tablet:text-center desktop:text-left"
          >
            Hornware Handicrafts for the Discerning Buyer
          </p>
          <p
            className="text-xs tablet:hidden font-openSans text-charcoal mb-6 tablet:mb-8"
          >
            Exquisite home decors, handcrafted Indian jewelry & sustainable
            products made from natural materials like horn, bone, resin, mother
            of pearl, wood & marble.
          </p>

          <p
            className="hidden tablet:block tablet:w-[70vw] tablet:text-base tablet:tracking-wide text-xs tracking-wide font-openSans desktop:text-sm desktop:leading-loose desktop:mt-0 text-charcoal mb-4 tablet:mb-6 tablet:text-center desktop:text-left tablet:max-w-2xl"
          >
            Elevate your home with Artwork Maestro's exquisite hornware.
            Sustainable, handcrafted pieces tell a story of tradition and
            elegance. Discover captivating hornware - beer cups, holders, and
            home decor - to infuse warmth and character into your space.
            Experience Artwork Maestro's beauty, functionality, and
            eco-consciousness.
          </p>

          {/* HeroImage for mobile layout */}
          <div
            className="w-64 desktop:hidden tablet:w-[50vw] tablet:block ml-10 mb-5 -mt-8"
          >
            <Image
              src="/hero2.svg"
              alt="Viking holding hornmug"
              width={1000}
              height={1000}
              priority={true}
              loading='eager'
              className="w-full h-auto object-contain"
            />
          </div>

          <div
            className="cta-buttons mb-7 flex justify-center desktop:justify-start gap-2 tablet:gap-7"
          >
            <SecondaryBtn href="/about">KNOW MORE</SecondaryBtn>
            <PrimaryBtn href="/products">EXPLORE PRODUCTS</PrimaryBtn>
          </div>

          <div
            className="flex items-center text-xs tablet:text-sm justify-center desktop:justify-start font-openSans text-charcoal"
          >
            <Image src="/plane.gif" alt="Globe Plane icon" width={20} height={20} />
            <p className="mx-1 mt-1 desktop:text-sm tablet:text-lg ">
              Initiated more than 10000+ Shipment Successfully
            </p>
            <Image
              src="/successIcon.svg"
              alt="Success Icon"
              width={20}
              height={20}
              className="mt-1"
            />
          </div>
        </div>

        <div
          className="hidden desktop:block tablet:hidden flex-1 relative tablet:mt-8 desktop:mt-14 desktop:left-6"
        >
          <Image
            src="/hero2.svg"
            alt="Viking holding hornmug"
            width={500}
            height={500}
            loading="eager"
            priority={true}
            className="w-full h-auto object-contain tablet:max-w-md tablet:mx-auto desktop:max-w-none desktop:w-[500px] desktop:h-[500px]"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
