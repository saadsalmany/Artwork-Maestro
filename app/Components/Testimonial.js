"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";
import TestimonialForm from "./TestimonialForm";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      quote:
        "I am absolutely thrilled with my new handicrafted buffalo horn mug! The craftsmanship is exceptional and it's become my drinking aesthetic.",
      author: "Lars Jensen",
      country: "Copenhagen, Denmark",
      image: "/larsc2.png",
      rating: 5,
    },
    {
      quote:
        "I purchased the necklace for my wife and she loves it! The quality is superb and it's a beautiful piece.",
      author: "Pierre Dupont",
      country: "Paris, France",
      image: "/pierrec3.png",
      rating: 5,
    },
    {
      quote:
        "I've always been fascinated by Viking history and the hornware products I've purchased have exceeded my expectations. Highly recommend!",
      author: "Maria Rodriguez",
      country: "Madrid, Spain",
      image: "/Mariac1.png",
      rating: 5,
    },
  ]);

  return (
    <div  className="bg-white py-20">
      <div className="container max-w-7xl mx-auto px-10">
        <h2 className="text-3xl section font-outfit desktop:text-5xl font-bold text-secondary-blue text-center mb-12 desktop:mb-24 animate-fade-in">
          Customer Reviews and Testimonials
        </h2>

        <div
          className="grid grid-cols-1 section md:grid-cols-2 lg:grid-cols-3 gap-8 tablet:gap-5 desktop:gap-8 
        tablet:w-[54rem] tablet:mx-auto  tablet:px-0 desktop:px-0 desktop:w-auto mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <TestimonialForm />
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <div
    className="bg-white cursor-pointer rounded-[5rem] border-[1px] border-charcoal section s p-10 flex flex-col 
  items-center transform transition-all duration-300 ease-in-out desktop:hover:scale-[102%]
  desktop:hover:shadow-lg active:hover:scale-105"
  >
    <div className="flex flex-col items-center mb-6">
      <p className="text-lg font-outfit text-center mb-2">
        "{testimonial.quote}"
      </p>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
            }`}
            fill={i < testimonial.rating ? "currentColor" : "none"}
          />
        ))}
      </div>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={testimonial.image}
        alt={testimonial.author}
        className="w-12 h-12 rounded-full mb-2"
      />
      <div className="text-center">
        <h5 className="text-lg font-outfit font-medium">
          {testimonial.author}
        </h5>
        <p  className="text-xs font-openSans text-gray-600">
          {testimonial.country}
        </p>
      </div>
    </div>
  </div>
);

export default Testimonial;
