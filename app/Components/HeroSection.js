"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef({});

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial animations
      tl.from(elementsRef.current.heading, { opacity: 0, y: 50, duration: 1 })
        .from(elementsRef.current.subheading, { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
        .from(elementsRef.current.paragraph, { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
        .from(elementsRef.current.image, { opacity: 0, scale: 0.8, duration: 0.5 }, "-=0.5")
        .from(elementsRef.current.mobileParagraph, { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
        .from(elementsRef.current.mobileImage, { opacity: 0, scale: 0.8, duration: 0.5 }, "-=0.5")
        .from(elementsRef.current.cta, { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(elementsRef.current.shipment, { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(elementsRef.current.marquee, { opacity: 0, y: 20, duration: 0.5 }, "-=0.3");


      // Subtle parallax effect for images
      gsap.to(elementsRef.current.image, {
        y: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup function
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="hero-section bg-white min-h-screen flex flex-col tablet:items-center desktop:flex-row items-stretch justify-between px-6 tablet:px-16 desktop:px-26 max-w-7xl mx-auto relative"
      >
        <div className="content-wrapper desktop:gap-5 tablet:gap-7 gap-2 flex-1 pt-16 tablet:pt-28 desktop:pt-16 flex flex-col tablet:items-center desktop:items-start desktop:max-w-[50%]">
          <h1
            ref={(el) => (elementsRef.current.heading = el)}
            className="text-[7vw] tablet:text-[6vw] desktop:text-[3vw] font-medium font-outfit mb-0 desktop:leading-relaxed text-secondary-blue tablet:text-center desktop:text-left"
          >
            Where History Meets Home:
          </h1>
          <p
            ref={(el) => (elementsRef.current.subheading = el)}
            className="text-xl tablet:text-[4.5vw] tablet:w-[60vw] mb-3 font-outfit leading-tight font-light desktop:mt-0 desktop:text-[2.2vw] text-secondary-blue tablet:text-center desktop:text-left"
          >
            Hornware Handicrafts for the Discerning Buyer
          </p>
          <p
            ref={(el) => (elementsRef.current.mobileParagraph = el)}
            className="text-xs tablet:hidden font-openSans text-charcoal mb-4 tablet:mb-8"
          >
            Artwork Maestro offers exquisite hornware crafted from sustainable
            materials such as beer cups, holders and explore more!
          </p>

          <p
            ref={(el) => (elementsRef.current.paragraph = el)}
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
            ref={(el) => (elementsRef.current.mobileImage = el)}
            className="w-72 desktop:hidden tablet:w-[50vw] tablet:block ml-10 mb-5 -mt-8"
          >
            <Image
              src="/heroSvg.svg"
              alt="Hero"
              width={288}
              height={288}
              className="w-full h-auto object-cover"
            />
          </div>

          <div
            ref={(el) => (elementsRef.current.cta = el)}
            className="cta-buttons mb-7 flex justify-center desktop:justify-start gap-2 tablet:gap-7"
          >
            <SecondaryBtn href="/about">KNOW MORE</SecondaryBtn>
            <PrimaryBtn href="/products">EXPLORE PRODUCTS</PrimaryBtn>
          </div>

          <div
            ref={(el) => (elementsRef.current.shipment = el)}
            className="flex items-center text-xs tablet:text-sm justify-center desktop:justify-start font-openSans text-charcoal"
          >
            <Image
              src="/plane.gif"
              alt="Truck Icon"
              width={20}
              height={20}
            />
            <p className="mx-2 desktop:text-sm tablet:text-lg ">
              Initiated more than 100+ Shipment Successfully
            </p>
            <Image
              src="/successIcon.svg"
              alt="Success Icon"
              width={20}
              height={20}
            />
          </div>
        </div>

        <div
          ref={(el) => (elementsRef.current.image = el)}
          className="hidden desktop:block tablet:hidden flex-1 relative tablet:mt-8 desktop:mt-10 desktop:left-16"
        >
          <Image
            src="/heroSvg.svg"
            alt="Hero"
            width={500}
            height={500}
            quality={100}
            className="w-full h-auto object-contain tablet:max-w-md tablet:mx-auto desktop:max-w-none desktop:w-[500px] desktop:h-[500px]"
          />
        </div>
      </section>

    
    </>
  );
};

export default HeroSection;