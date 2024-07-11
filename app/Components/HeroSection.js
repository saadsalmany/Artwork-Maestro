'use client'
import React from 'react';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="hero bg-gray-200 text-white py-20 ipad:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ipad:flex-row lg:mx-28 ipad:mx-3">
        {/* Left side with 5 semantic divs */}
        <div className="flex flex-col space-y-6 w-full ipad:w-3/5">
          <h1 className="text-4xl font-bold font-outfit text-secondary-blue leading-tight">Lorem Ipsum</h1>
          <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="prose">
            <p>Mauris sit amet magna finibus, laoreet odio ut, interdum tellus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit erat.</p>
          </div>
          <ul className="list-disc space-y-2">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <a href="#" className="inline-flex items-center px-4 py-2 bg-ef4344 text-white rounded-md hover:bg-darker-ef4344 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Call to Action
          </a>
        </div>

        {/* Right side with image */}
        <div className="w-full ipad:w-2/5 flex justify-end">
          <Image
            src="/HeroImage.png" // Replace with your image path
            alt="Hero Section Image"
            width={500}
            height={100}
            priority // For optimal performance on initial load
          />
        </div>
      </div>

      {/* Marquee at the bottom */}
      <marquee behavior="scroll" direction="left" className="mt-10 text-white">
        <span role="alert">Special offer! Get 20% off your first purchase.</span>
      </marquee>
    </section>
  );
}

export default HeroSection;
