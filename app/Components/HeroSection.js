'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);
  const infoRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Opening animation
    tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(subheadingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .fromTo(imageRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, '-=0.5')
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.5')
      .fromTo(infoRefs.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.2 }, '-=0.3');

    // Scroll animation
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      animation: gsap.to(imageRef.current, { y: 50, scale: 1.05 }),
    });

  }, []);

  return (
    <section ref={sectionRef} className="hero-section bg-gray-100 min-h-screen flex flex-col md:flex-row">
      <div className="content-wrapper flex-1 p-6 md:p-12 flex flex-col justify-center">
        <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4">Your Heading Here</h1>
        <p ref={subheadingRef} className="text-xl mb-6">Your subheading or description text goes here.</p>
        
        {/* Hero image for mobile */}
        <div ref={imageRef} className="md:hidden mb-6">
          <img src="/path-to-your-image.jpg" alt="Hero" className="w-full h-auto object-cover rounded-lg" />
        </div>

        <div ref={ctaRef} className="cta-buttons mb-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full mr-4 hover:bg-blue-600 transition-colors">Primary CTA</button>
          <button className="bg-white text-blue-500 px-6 py-2 rounded-full border border-blue-500 hover:bg-blue-50 transition-colors">Secondary CTA</button>
        </div>

        <div className="info-blocks grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div 
              key={index}
              ref={el => infoRefs.current[index] = el}
              className="bg-white p-4 rounded-lg shadow"
            >
              <h3 className="font-semibold mb-2">Info Block {index + 1}</h3>
              <p>Some information goes here.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero image for desktop and tablet */}
      <div ref={imageRef} className="hidden md:block flex-1">
        <img src="/path-to-your-image.jpg" alt="Hero" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;