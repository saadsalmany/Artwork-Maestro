'use client'
import React, { useState } from 'react';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side: Product Showcase */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-secondary-blue mb-4">Authentic Viking Hornware</h2>
            <p className="text-lg text-charcoal mb-6">
              Discover our exquisite collection of handcrafted hornware, perfect for modern-day Vikings and enthusiasts alike.
            </p>
            <div className="mb-6">
              <img src="/api/placeholder/600/400" alt="Viking hornware collection" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <h3 className="text-2xl font-semibold text-secondary-blue mb-4">Why Choose Our Hornware?</h3>
            <ul className="list-disc list-inside text-charcoal mb-6">
              <li>Authentic craftsmanship</li>
              <li>Durable and long-lasting</li>
              <li>Unique designs inspired by Viking culture</li>
              <li>Perfect for reenactments and daily use</li>
            </ul>
            <button className="flex items-center justify-center bg-primary-red text-white py-3 px-6 rounded-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
              Explore Our Collection
              <ArrowRight className="ml-2" />
            </button>
          </div>

          {/* Right side: Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-secondary-blue mb-6">Contact the Horn Masters</h2>
            <p className="text-lg text-charcoal mb-6">
              Have questions about our hornware or need a custom piece? We're here to help you find the perfect Viking-inspired products.
            </p>
            <form action="https://formspree.io/f/xldrnvbp" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition duration-300 ease-in-out"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary-red text-white py-3 px-6 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-primary-red focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Company Information */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-secondary-blue mb-6">Hornware Artisans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-charcoal">Master Craftsman</h3>
              <p>Shahzaib Alam</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-charcoal">Workshop Manager</h3>
              <p>Altmash Alam</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="text-primary-red flex-shrink-0 mt-1" />
                <p>Area Mangal Pura Takhiya Colony, Sarai Tarin District Sambhal 244303 Moradabad, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="text-primary-red" />
                <div>
                  <a href="mailto:artworkmaestro@gmail.com" className="hover:text-primary-red transition duration-300">artworkmaestro@gmail.com</a>
                  <br />
                  <a href="mailto:artworkmaestro@yahoo.com" className="hover:text-primary-red transition duration-300">artworkmaestro@yahoo.com</a>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="text-primary-red" />
                <div>
                  <a href="tel:+917528610666" className="hover:text-primary-red transition duration-300">+91 752861066</a>
                  <br />
                  <a href="tel:+919045067866" className="hover:text-primary-red transition duration-300">+91 9045067866</a>
                  <br />
                  <a href="tel:+918791526817" className="hover:text-primary-red transition duration-300">+91 8791526817</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;