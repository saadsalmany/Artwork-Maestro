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
  const imageRefMobile = useRef(null);
  const imageRefDesktop = useRef(null);
  const ctaRef = useRef(null);
  const shipmentRef = useRef(null);

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
          [imageRefMobile.current, imageRefDesktop.current],
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
      gsap.to([imageRefMobile.current, imageRefDesktop.current], {
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
        className="hero-section bg-white min-h-screen flex flex-col tablet:flex-row items-stretch justify-between px-6 tablet:px-16 desktop:px-26 max-w-7xl mx-auto"
      >
        <div className="content-wrapper flex-1 pt-10 tablet:pt-0 desktop:pt-0 flex flex-col tablet:max-w-[50%]">
          <h1
            ref={headingRef}
            className="text-[7vw] tablet:text-5xl desktop:text-6xl font-medium font-outfit mb-0 text-charcoal"
          >
            Where History Meets Home:
          </h1>
          <p
            ref={subheadingRef}
            className="text-xl mb-3 font-outfit leading-snug font-light text-charcoal"
          >
            Hornware Handicrafts for the Discerning Buyer
          </p>
          <p ref={paragraphRef} className="text-xs font-openSans text-charcoal">
            Artwork Maestro offers exquisite hornware crafted from sustainable
            materials such as beer cups, holders and explore more!
          </p>

          {/* Hero image for mobile */}
          <div
            ref={imageRefMobile}
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
            className="cta-buttons mb-8 flex justify-center gap-2"
          >
            <SecondaryBtn href="/about">KNOW MORE</SecondaryBtn>
            <PrimaryBtn href="/products">EXPLORE PRODUCTS</PrimaryBtn>
          </div>

          <div
            ref={shipmentRef}
            className="flex items-center text-xs justify-center font-openSans text-charcoal"
          >
            <Image
              src="/truckIcon.svg" // Path to your truck icon
              alt="Truck Icon"
              width={20} // Adjust size as needed
              height={20} // Adjust size as needed
            />
           <p className="mx-2"> Initiated more than 100+ Shipment Successfully </p>
            <Image
              src="/successIcon.svg" // Path to your truck icon
              alt="Truck Icon"
              width={20} // Adjust size as needed
              height={20} // Adjust size as needed
            />
          </div>
        </div>

        {/* Hero image for tablet and desktop */}
        <div ref={imageRefDesktop} className="hidden tablet:block flex-1">
          <Image
            src="/heroSvg.svg"
            alt="Hero"
            width={500}
            height={500}
            quality={100}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Responsive Marquee */}
      <div className="bg-secondary-blue text-white text-[8px] desktop:text-xs tablet:text-[8px] list-disc py-3 relative bottom-56">
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
