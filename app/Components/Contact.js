"use client";

import React, { useState, useRef, useEffect } from "react";
import DOMPurify from "dompurify";
import {
  User,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    // Sanitize user input using DOMPurify
    const sanitizedData = {};
    for (const [key, value] of data) {
      sanitizedData[key] = DOMPurify.sanitize(value.toString());
    }
    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(sanitizedData)) {
        formData.append(key, value);
      }
      const response = await fetch("https://formspree.io/f/xldrnvbp", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  useEffect(() => {
    const sectionsElements = gsap.utils.toArray(".section");

    sectionsElements.forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 100%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 min-h-screen font-outfit">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg rounded-lg p-8">
            <h2 className="text-3xl section font-semibold text-secondary-blue mb-10">
              Contact Information
            </h2>
            <div className="space-y-6 section lg:space-y-12">
              {[
                {
                  icon: <User className="text-primary-red" />,
                  text: "Shahzaib Alam",
                },
                {
                  icon: <Briefcase className="text-primary-red" />,
                  text: "Altmash Alam",
                },
                {
                  icon: <Phone className="text-primary-red" />,
                  text: "+91 - 9045 067 855",
                },
                {
                  icon: <Mail className="text-primary-red" />,
                  text: "artworkmaestro@gmail.com",
                },
                {
                  icon: <MapPin className="text-primary-red" />,
                  text: "Area Mangal Pura Takhiya Colony, Sarai Tarin District Sambhal 244303 Moradabad, Uttar Pradesh, India",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-white shadow-md p-2 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <span className="text-charcoal section">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="bg-white rounded-lg section shadow-lg p-8"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-2xl font-semibold section text-secondary-blue mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 section">
              <div>
                <label htmlFor="name" className="block section text-charcoal mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border section border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block section text-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border section border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block section text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full p-3 border section border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary-red section text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
            {status === "success" && (
              <p className="mt-4  text-green-600">
                Thank you for your message. We'll get back to you soon!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600">
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

export default ContactForm;
