"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
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

      // Opening animation
      tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(subheadingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .fromTo(paragraphRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .fromTo(imageRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.5")
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.5")
        .fromTo(shipmentRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");

      // Scroll animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        animation: gsap.to(imageRef.current, { y: 50, scale: 1.05 }),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero-section bg-white min-h-screen flex flex-col tablet:flex-row items-center justify-between px-6 tablet:px-16 desktop:px-26 max-w-7xl mx-auto">
      <div className="content-wrapper flex-1 pt-10 tablet:pt-16 desktop:pt-24 flex flex-col tablet:max-w-[50%]">
        <h1 ref={headingRef} className="text-4xl tablet:text-5xl font-medium font-outfit mb-4 text-[#2C2C54]">
          Where History Meets Home:
        </h1>
        <p ref={subheadingRef} className="text-xl mb-6 font-outfit font-light text-[#2C2C54]">
          Hornware Handicrafts for the Discerning Buyer
        </p>
        <p ref={paragraphRef} className="text-sm font-openSans mb-6 text-[#2C2C54]">
          Artwork Maestro brings the world exquisite hornware, crafted from
          sustainable materials, such as beer cups, holders and many other
          households products made from natural bone.
        </p>

        <div ref={ctaRef} className="cta-buttons mb-8 flex">
          <button className="bg-white text-[#2C2C54] px-6 py-2 rounded-full mr-4 border border-[#2C2C54] hover:bg-[#2C2C54] hover:text-white transition-colors">
            KNOW MORE
          </button>
          <button className="bg-[#2C2C54] text-white px-6 py-2 rounded-full hover:bg-[#1E1E3F] transition-colors">
            EXPLORE PRODUCTS
          </button>
        </div>

        <div ref={shipmentRef} className="flex items-center text-sm font-openSans text-[#2C2C54]">
          <span className="mr-2">🚚</span>
          Initiated more than 100+ Shipment Successfully
          <span className="ml-2 text-green-500">✓</span>
        </div>
      </div>

      <div ref={imageRef} className="flex-1 mt-8 tablet:mt-0">
        <Image
          src="/heroImage.png"  // Update this with your actual image path
          alt="Hero"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;