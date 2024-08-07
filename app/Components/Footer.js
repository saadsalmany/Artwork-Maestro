import React from 'react';
import { Facebook, Instagram, Linkedin, WhatsApp, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-charcoal font-openSans">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/Logo.svg" alt="Artwork Maestro" className="w-12 h-12" />
              <h2 className="text-2xl font-bold font-outfit text-secondary-blue">Artwork Maestro</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="text-primary-red mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm">Mohalla Sarai Tarin, Sambhal, Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Contact</p>
                <a href="tel:+919876543210" className="flex items-center space-x-2 group hover:text-primary-red transition-all duration-300 ease-in-out">
                  <Phone size={16} className="text-primary-red group-hover:animate-pulse" />
                  <span className="text-sm">+91 - 9876543210</span>
                </a>
                <a href="mailto:artworkmaestro@site.com" className="flex items-center space-x-2 group hover:text-primary-red transition-all duration-300 ease-in-out">
                  <Mail size={16} className="text-primary-red group-hover:animate-pulse" />
                  <span className="text-sm">artworkmaestro@site.com</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mb-8 lg:mb-0">
            <img src="/Logo.svg" alt="Artwork Maestro Logo" className="w-40 h-40 object-contain" />
          </div>
          
          <div className="space-y-4">
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin, WhatsApp].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-secondary-blue hover:text-primary-red transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6"
                  aria-label={`Social Media Link ${index + 1}`}
                >
                  {/* <Icon size={24} />   */}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-200" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="mb-4 sm:mb-0 text-center sm:text-left">
            Copyright © {currentYear} Artwork Maestro, All rights reserved | <span className="font-caveat text-primary-red cursor-pointer hover:text-secondary-blue transition-colors duration-300">Powered by Saad Salmany</span>
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
            {['Certifications', 'FAQs', 'Privacy Policy'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-primary-red transition-colors duration-300 ease-in-out relative group"
              >
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;