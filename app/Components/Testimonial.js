// Testimonial.js
import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "I am absolutely thrilled with my new Viking hornware mug! The craftsmanship is exceptional and it's become my go-to drinkware.",
      author: "Lars Jensen",
      role: "Copenhagen, Denmark",
      image: "/larsc2.png",
    },
    {
      quote:
        "I purchased the Viking hornware necklace as a gift for my wife and she loves it! The quality is superb and it's a beautiful piece.",
      author: "Pierre Dupont",
      role: "Paris, France",
      image: "/pierrec3.png",
    },
    {
      quote:
        "I've always been fascinated by Viking history and the hornware products I've purchased have exceeded my expectations. Highly recommend!",
      author: "Maria Rodriguez",
      role: "Madrid, Spain",
      image: "/Mariac1.png",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container max-w-6xl flex flex-col gap-16 mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-secondary-blue text-center mb-10">
        Customer Reviews and Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-lg shadow-lg p-8 flex flex-col items-center"
            >
              {/* Quote with Star Ratings */}
              <div className="flex flex-col items-center mb-6">
                <p className="text-lg font-medium text-center mb-2">
                  "{testimonial.quote}"
                </p>
                <div className="flex space-x-1">
                  {/* Generate 5 stars */}
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current text-yellow-500"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mb-2"
                />
                <div className="text-center">
                  <h5 className="text-lg font-bold">{testimonial.author}</h5>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;