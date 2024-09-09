"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import PrimaryBtn from "./PrimaryBtn";
import Link from "next/link";
import SecondaryBtn from "./SecondaryBtn";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Add this line

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set isSubmitting to true when submitting
    fetch("https://formspree.io/f/xldrnvbp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStatus("success");
        setIsSubmitting(false); // Set isSubmitting to false when submitted
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
        setIsSubmitting(false); // Set isSubmitting to false when error occurs
      });
  };


  return (
    <div className="bg-gray-100 w-full">
      <div className="max-w-6xl mx-auto py-8 mt-8 md:py-16 px-6 tablet:px-16 desktop:px-26">
        {/* Main Content */}
        <h2 className="text-4xl font-outfit text-secondary-blue font-bold text-center mb-6 md:text-3xl lg:text-7xl">
          Get in Touch
        </h2>
        <p className="text-center font-openSans tracking-wide lg:text-xl bg-primary-red px-4 py-2 text-white rounded-3xl mb-8 md:mb-12">
          We're here to help and listen.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 md:mb-12">
          {[
            {
              icon: MapPin,
              title: "Location",
              content:
                "Area Mangal Pura Takhiya Colony, Sarai Tarin District Sambhal, Moradabad, UP, India",
            },
            { icon: Phone, title: "24/7 Service", content: "+91 - 7452861066" },
            {
              icon: Mail,
              title: "Drop a line",
              content: "Info@artworkmaestro.com",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border-[1px] border-charcoal  p-6 text-center md:p-8"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-secondary-blue rounded-full text-white">
                  <item.icon size={24} />
                </div>
              </div>
              <h3 className="font-semibold font-outfit text-xl text-charcoal mb-2">
                {item.title}
              </h3>
              <p className="text-sm font-outfit leading-relaxed tracking-wide text-gray-600">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <div className="bg-navy-blue text-white rounded-lg p-6 md:w-1/3 md:p-8">
            <img
              src="/customer-service.png"
              alt="Customer Support"
              className="w-20 rounded-lg mb-4 md:mb-6"
            />
            <h3 className="text-xl font-outfit text-secondary-blue font-bold mb-2 md:text-2xl md:mb-4">
              Live chat on WhatsApp
            </h3>
            <p className="mb-4 font-openSans text-charcoal text-sm md:mb-6 md:text-base">
              Let's chat with our live experts to get answer your questions.
            </p>
            <Link
              linkProps={{
                target: "_blank",
                rel: "noopener noreferrer",
              }}
              href="https://wa.me/9045067866"
            >
              <PrimaryBtn>Live Chat</PrimaryBtn>
            </Link>
          </div>
          <div className="md:w-2/3 mx-auto">
            <h3 className="text-4xl text-center font-outfit text-secondary-blue font-bold mb-8 md:text-3xl lg:text-4xl">
              Let's Connect
            </h3>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="p-4 rounded-2xl border border-gray-300 text-sm md:p-5"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="p-4 rounded-2xl border border-gray-300 text-sm md:p-5"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="p-4 rounded-2xl border w-full border-gray-300 text-sm md:p-5"
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message goes here"
                className="p-4 rounded-2xl border border-gray-300 col-span-full text-sm md:p-5"
                rows="4"
                onChange={handleChange}
                required
              ></textarea>
              <div className="col-span-full">
                <p className="text-xs  text-gray-500 mb-4 md:text-xs">
                  *We do not share your information with any third parties.
                </p>
                <div className="flex gap-4">
                  <PrimaryBtn type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </PrimaryBtn>
                  <SecondaryBtn
                    type="reset"
                  >
                    Reset
                  </SecondaryBtn>
                </div>
              </div>
            </form>
            {status === "success" && (
              <p className="mt-6 text-green-600 text-sm md:text-base">
                Thank you for your message. We'll get back to you soon!
              </p>
            )}
            {status === "error" && (
              <p className="mt-6 text-red-600 text-sm md:text-base">
                Oops! There was a problem sending your message. Please try
                again.
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
