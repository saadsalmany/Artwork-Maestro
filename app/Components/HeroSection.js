"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";


gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);
  const shipmentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Opening animation sequence
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          subheadingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          paragraphRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.5"
        )
        .fromTo(
          shipmentRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        );

      // Scroll animation for the image
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        animation: gsap.to(imageRef.current, { y: 50, scale: 1.05 }),
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup function
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="hero-section bg-white min-h-screen flex flex-col tablet:flex-row  items-stretch justify-between px-6 tablet:px-16 desktop:px-26 max-w-7xl mx-auto"
      >
        <div className="content-wrapper flex-1 pt-10 tablet:pt-0 desktop:pt-0 flex flex-col tablet:max-w-[50%]">
          <h1
            ref={headingRef}
            className="text-[7vw] tablet:text-5xl desktop:text-6xl font-medium font-outfit mb-0 text-[#2C2C54]"
          >
            Where History Meets Home:
          </h1>
          <p
            ref={subheadingRef}
            className="text-xl mb-3 font-outfit leading-snug font-light text-[#2C2C54]"
          >
            Hornware Handicrafts for the Discerning Buyer
          </p>
          <p
            ref={paragraphRef}
            className="text-xs font-openSans text-[#2C2C54]"
          >
            Artwork Maestro offers exquisite hornware crafted from sustainable
            materials such as beer cups, holders and explore more!"
          </p>

          {/* Hero image for mobile */}
          <div ref={imageRef} className="w-80  tablet:hidden ml-6 mb-6">
            <Image
              src="/heroSvg.svg"
              alt="Hero"
              width={0}
              height={0}
              className="w-full h-auto object-cover"
            />
          </div>

          <div ref={ctaRef} className="cta-buttons mb-8 flex justify-center gap-3 ">
          <SecondaryBtn href="/about">KNOW MORE</SecondaryBtn> {/* Add href */}
          <PrimaryBtn href="/products">EXPLORE PRODUCTS</PrimaryBtn> {/* Add href */}
          </div>

          <div
            ref={shipmentRef}
            className="flex items-center text-sm font-openSans text-[#2C2C54]"
          >
            <span className="mr-2">🚚</span>
            Initiated more than 100+ Shipment Successfully
            <span className="ml-2 text-green-500">✓</span>
          </div>
        </div>

        {/* Hero image for tablet and desktop */}
        <div ref={imageRef} className="hidden tablet:block flex-1">
          <Image
            src="/heroImage.png"
            alt="Hero"
            width={500}
            height={500}
            quality={100}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Responsive Marquee */}
      <div className="bg-secondary-blue text-white py-4">
        <Marquee speed={50} gradient={false}>
          <span className="mx-4">BONE INLAY PRODUCTS</span>
          <span className="mx-4">BUFFALO HORN PRODUCTS</span>
          <span className="mx-4">COPPER MAGNETIC BRACELETS</span>
          <span className="mx-4">FASHION JEWELLERY</span>
          <span className="mx-4">MOTHER OF PEARL PRODUCTS</span>
          <span className="mx-4">MUKHBAR BAKHOOR PRODUCTS</span>
          <span className="mx-4">SHOFAR</span>
          <span className="mx-4">WOOD HANDICRAFTS PRODUCTS</span>
        </Marquee>
      </div>
    </>
  );
};

export default HeroSection;
