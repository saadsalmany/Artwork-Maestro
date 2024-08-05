// Testimonial.js
"use client";
import React, { useState, useEffect } from "react";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";

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
    setNewReview((prev) => ({ ...prev, [name]: value }));
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
    <div className="bg-white py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-secondary-blue text-center mb-10">
          Customer Reviews and Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg shadow-lg p-8 h-[44rem] ">
          <h3 className="text-2xl font-bold text-secondary-blue mb-6">
            Submit Your Review
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="quote" className="block mb-1 font-medium">
                Your Review
              </label>
              <textarea
                id="quote"
                name="quote"
                value={newReview.quote}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows="4"
                required
              />
            </div>
            <div>
              <label htmlFor="author" className="block mb-1 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={newReview.author}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="country" className="block mb-1 font-medium">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={newReview.country}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newReview.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="rating" className="block mb-1 font-medium">
                Rating
              </label>
              <select
                id="rating"
                name="rating"
                value={newReview.rating}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-5 "
                required
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Star{num !== 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-start gap-4">
              <PrimaryBtn type="submit">Submit</PrimaryBtn>
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
  <div className="bg-blue-100 rounded-lg shadow-lg p-8 flex flex-col items-center">
    <div className="flex flex-col items-center mb-6">
      <p className="text-lg font-medium text-center mb-2">
        "{testimonial.quote}"
      </p>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 fill-current ${
              i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
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
        <h5 className="text-lg font-bold">{testimonial.author}</h5>
        <p className="text-sm text-gray-600">{testimonial.country}</p>
      </div>
    </div>
  </div>
);

export default Testimonial;
