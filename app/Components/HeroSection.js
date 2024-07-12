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
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const paragraphRefDesktop = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);
  const shipmentRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial animations
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
          [paragraphRefDesktop.current],
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
        )
        .fromTo(
          marqueeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        );

      // Fade in/out scroll trigger for the entire section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: gsap.fromTo(
          sectionRef.current,
          { opacity: 1, y: 0 },
          { opacity: 0, y: -50 }
        ),
      });

      // Subtle parallax effect for images
      gsap.to(imageRef.current, {
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
        <div className="content-wrapper gap-1 flex-1 pt-7 tablet:pt-11 desktop:pt-12 flex flex-col tablet:items-center desktop:items-start desktop:max-w-[50%]">
          <h1
            ref={headingRef}
            className="text-[7vw] tablet:text-[5vw] desktop:text-[3vw] font-medium font-outfit mb-0 desktop:leading-relaxed text-secondary-blue tablet:text-center desktop:text-left"
          >
            Where History Meets Home:
          </h1>
          <p
            ref={subheadingRef}
            className="text-xl tablet:text-3xl mb-3 font-outfit leading-tight font-light desktop:mt-0 desktop:text-[2.2vw] text-secondary-blue tablet:text-center desktop:text-left"
          >
            Hornware Handicrafts for the Discerning Buyer
          </p>
          <p
            ref={paragraphRef}
            className="text-xs tablet:hidden font-openSans text-charcoal mb-4 tablet:mb-8"
          >
            Artwork Maestro offers exquisite hornware crafted from sustainable
            materials such as beer cups, holders and explore more!
          </p>

          <p
            ref={paragraphRefDesktop}
            className="hidden tablet:block tablet:text-base text-xs tracking-wide font-openSans desktop:text-sm desktop:leading-loose desktop:mt-0 text-charcoal mb-4 tablet:mb-6 tablet:text-center desktop:text-left tablet:max-w-2xl"
          >
            Elevate your home with Artwork Maestro's exquisite hornware.
            Sustainable, handcrafted pieces tell a story of tradition and
            elegance. Discover captivating hornware - beer cups, holders, and
            home decor - to infuse warmth and character into your space.
            Experience Artwork Maestro's beauty, functionality, and
            eco-consciousness.
          </p>

          {/* Hero image for mobile - keep as is */}
          <div
            ref={imageRef}
            className="w-72 tablet:hidden ml-10 mb-5 -mt-8"
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
            ref={ctaRef}
            className="cta-buttons mb-7 flex justify-center desktop:justify-start gap-2 tablet:gap-4"
          >
            <SecondaryBtn href="/about">KNOW MORE</SecondaryBtn>
            <PrimaryBtn href="/products">EXPLORE PRODUCTS</PrimaryBtn>
          </div>

          <div
            ref={shipmentRef}
            className="flex items-center text-xs tablet:text-sm justify-center desktop:justify-start font-openSans text-charcoal"
          >
            <Image
              src="/truckIcon.svg"
              alt="Truck Icon"
              width={20}
              height={20}
            />
            <p className="mx-2">
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

        {/* Hero image for tablet and desktop */}
        <div
          ref={imageRef}
          className="hidden tablet:block flex-1 relative tablet:mt-8 desktop:mt-0 desktop:left-16"
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

      {/* Responsive Marquee */}
      <div
        ref={marqueeRef}
        className="bg-secondary-blue text-white text-[8px] desktop:text-xs tablet:text-[10px] list-disc py-3 w-full fixed bottom-0 left-0 right-0 z-50"
      >
        <Marquee speed={50} gradient={false}>
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
        </Marquee>
      </div>
    </>
  );
};

export default HeroSection;