"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import DOMPurify from "dompurify";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      quote:
        "I am absolutely thrilled with my new Viking hornware mug! The craftsmanship is exceptional and it's become my go-to drinkware.",
      author: "Lars Jensen",
      country: "Copenhagen, Denmark",
      image: "/larsc2.png",
      rating: 5,
    },
    {
      quote:
        "I purchased the Viking hornware necklace as a gift for my wife and she loves it! The quality is superb and it's a beautiful piece.",
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

  const [newReview, setNewReview] = useState({
    quote: "",
    author: "",
    country: "",
    rating: 5,
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setNewReview((prev) => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xpwadbpa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        alert("Your review has been submitted for approval. Thank you!");
        setNewReview({
          quote: "",
          author: "",
          country: "",
          rating: 5,
          email: "",
        });
      } else {
        alert("There was an error submitting your review. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-zinc-100 py-20">
      <div className="container max-w-7xl mx-auto px-10">
        <h2 className="text-2xl desktop:text-5xl font-bold text-secondary-blue text-center mb-20 desktop:mb-32 animate-fade-in">
          Customer Reviews and Testimonials
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 tablet:gap-5 desktop:gap-8 
        tablet:w-[54rem] tablet:mx-auto  tablet:px-0 desktop:px-0 desktop:w-auto mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="bg-white rounded-lg max-w-4xl mx-auto shadow-lg p-8 animate-slide-up">
          <h3 className="text-2xl font-semibold text-center text-secondary-blue mb-8 font-outfit">
            Rate Our Products!
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label
                htmlFor="quote"
                className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-secondary-blue"
              >
                Your Review
              </label>
              <textarea
                id="quote"
                name="quote"
                value={newReview.quote}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-blue focus:border-secondary-blue transition-all duration-300 ease-in-out hover:border-secondary-blue"
                rows="4"
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="group">
                <label
                  htmlFor="author"
                  className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-secondary-blue"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={newReview.author}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-blue focus:border-secondary-blue transition-all duration-300 ease-in-out hover:border-secondary-blue"
                  required
                />
              </div>
              <div className="group">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-secondary-blue"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={newReview.country}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-blue focus:border-secondary-blue transition-all duration-300 ease-in-out hover:border-secondary-blue"
                  required
                />
              </div>
            </div>
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-secondary-blue"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newReview.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-blue focus:border-secondary-blue transition-all duration-300 ease-in-out hover:border-secondary-blue"
                required
              />
            </div>
            <div className="group">
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-secondary-blue"
              >
                Rating
              </label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      setNewReview((prev) => ({ ...prev, rating: star }))
                    }
                    className="focus:outline-none transition-colors duration-300 ease-in-out hover:text-yellow-400"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= newReview.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill={star <= newReview.rating ? "currentColor" : "none"}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-start space-x-4 pt-4">
              <PrimaryBtn>Submit Review</PrimaryBtn>
              <SecondaryBtn
                type="reset"
                formReset={() =>
                  setNewReview({
                    quote: "",
                    author: "",
                    country: "",
                    rating: 5,
                    email: "",
                  })
                }
              >
                Reset
              </SecondaryBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center transform transition-all duration-300 ease-in-out hover:scale-105">
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
        <p className="text-xs font-openSans text-gray-600">
          {testimonial.country}
        </p>
      </div>
    </div>
  </div>
);

export default Testimonial;
