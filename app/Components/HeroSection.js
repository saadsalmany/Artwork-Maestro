"use client";
import Image from "next/image";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section bg-white desktop:mt-6 mb-12 desktop:mb-0 flex flex-col tablet:items-center desktop:flex-row items-stretch justify-between px-6 tablet:px-16 desktop:px-26 max-w-7xl mx-auto relative">
        <div className="content-wrapper desktop:gap-5  tablet:gap-7 gap-2 flex-1 pt-16 h-auto tablet:pt-28 desktop:pt-16 flex flex-col tablet:items-center desktop:items-start desktop:w-0">
          <h1 className="text-[7vw] tablet:text-[6vw] desktop:text-[3vw] font-bold font-outfit mb-0 desktop:leading-relaxed text-secondary-blue tablet:text-center desktop:text-left">
            Simplify Sourcing With Us:
          </h1>
          <p className="text-xl desktop:w-[45rem] tablet:text-[4.5vw] tablet:w-[50rem] mb-3 font-outfit leading-tight font-normal desktop:mt-0 desktop:text-[2.2vw] text-secondary-blue tablet:text-center desktop:text-left">
            We're one-stop trusted and certified source for all
            Indian handicrafts.
          </p>
          <p className="text-xs tablet:text-2xl tablet:w-[45rem] tablet:text-center font-openSans font-medium text-charcoal mb-6 tablet:mb-8
          desktop:text-lg desktop:w-[40rem] desktop:text-left ">
            Exquisite home decors, handcrafted Indian jewelry & sustainable
            products made from natural materials like horn, bone, resin, mother
            of pearl, wood & marble.
          </p>


          {/* HeroImage for mobile layout */}
          <div
            className="w-64 tablet:w-[50vw] tablet:block ml-10 mb-5 -mt-8 desktop:absolute desktop:w-96
            desktop:top-24 desktop:left-[48rem] border-2 border-zinc-400 rounded-2xl drop-shadow-2xl bg-yellow-100"
          >
            <Image
              src="/hero2.webp"
              alt="Viking holding hornmug"
              width={500}
              height={500}
              priority={true}
              loading="eager"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="cta-buttons mb-7 flex justify-center desktop:justify-start gap-2 tablet:gap-7">
            <SecondaryBtn href="/about">KNOW MORE</SecondaryBtn>
            <PrimaryBtn href="/products">EXPLORE PRODUCTS</PrimaryBtn>
          </div>

          <div className="flex items-center text-xs tablet:text-sm justify-center desktop:justify-start font-openSans text-charcoal">
            <Image
              src="/plane.gif"
              alt="Globe Plane icon"
              width={20}
              height={20}
            />
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
      </section>
    </>
  );
};

export default HeroSection;
