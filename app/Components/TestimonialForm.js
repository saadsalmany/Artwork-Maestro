import React, { useState } from 'react';
import { Star, Mail } from 'lucide-react';
import PrimaryBtn from './PrimaryBtn';
import SecondaryBtn from './SecondaryBtn';
import DOMPurify from 'dompurify';

const TestimonialForm = () => {
  const [newReview, setNewReview] = useState({
    quote: '',
    author: '',
    country: '',
    rating: 0,
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setNewReview((prev) => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    fetch(`https://formspree.io/f/xpwadbpa`, {
      method: 'POST',
      body: JSON.stringify(newReview),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setIsSubmitting(false);
      setIsSubmitted(true);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-6">
      <div className="w-full max-w-xl bg-white border-charcoal border-[1px] rounded-3xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-4xl font-semibold text-secondary-blue font-outfit text-center mb-4">Share Your Experience</h2>
          <p className="text-charcoal leading-snug font-medium font-openSans text-center mb-8">Your feedback shapes our future innovations.</p>
          
          {isSubmitted ? (
            <p className="text-primary-red text-center mb-8">Thank you for submitting your review!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center space-x-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview((prev) => ({ ...prev, rating: star }))}
                    className="focus:outline-none transition-transform duration-300 ease-in-out hover:scale-110"
                  >
                    <Star
                      size={32}
                      className={`${star <= newReview.rating ? 'text-yellow-400' : 'text-secondary-blue'}`}
                      fill={star <= newReview.rating ? 'currentColor' : 'none'}
                    />
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <textarea
                  name="quote"
                  value={newReview.quote}
                  onChange={handleInputChange}
                  placeholder="Share your thoughts on our hornware..."
                  className="w-full p-4  rounded-xl border-[1px] border-charcoal placeholder-gray-300 text-black focus:ring-[1px] focus:outline-none "
                  rows="4"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="author"
                    value={newReview.author}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full p-4  rounded-xl border-[1px] border-charcoal placeholder-gray-300 text-charcoal focus:ring-[1px] focus:outline-none transition-all duration-300"
                  />
                  <input
                    type="text"
                    name="country"
                    value={newReview.country}
                    onChange={handleInputChange}
                    placeholder="Country"
                    className="w-full p-4   rounded-xl border-[1px] border-charcoal placeholder-gray-300 text-charcoal focus:ring-[1px] focus:outline-none transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute top-1/2 transform -translate-y-1/2 left-4 h-5 w-5 text-gray-300" />
                  <input
                    type="email"
                    name="email"
                    value={newReview.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full p-4 pl-12  rounded-xl border-[1px] border-charcoal placeholder-gray-300 text-charcoal focus:ring-[1px] focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>
              <div className='flex gap-4'>
                <PrimaryBtn type='submit' disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </PrimaryBtn>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialForm;