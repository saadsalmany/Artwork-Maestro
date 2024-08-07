import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-charcoal font-openSans">
      <div className="container max-w-6xl  mx-auto px-8 py-16">
        <div className="flex flex-col desktop:flex-row justify-between items-start desktop::items-center">
          <div className="mb-8 flex flex-col desktop:mb-0 w-full">
            <div className="flex items-center flex-col desktop:flex-row space-x-3 mb-16 desktop:mb-10">
              <img
                src="/Logo.svg"
                alt="Artwork Maestro"
                className="w-12 h-12 mb-4 desktop:mb-0"
              />
              <h2 className="text-2xl font-bold font-outfit text-secondary-blue">
                Artwork Maestro
              </h2>
            </div>
            <div className="space-y-12">
              <div className="flex items-start space-x-2">
                <div>
                  <p className="font-semibold text-lg desktop:text-base desktop:text-left mb-1 desktop:mb-1 ">
                    Address
                  </p>
                  <p className="text-sm text-center desktop:text-left">
                    Mohalla Sarai Tarin, Sambhal, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="space-y-2 desktop:space-y-3">
                <p className="font-semibold text-lg desktop:text-base mb-4 desktop:mb-4">
                  {" "}
                  Contact
                </p>
                <a
                  href="tel:+919876543210"
                  className="flex items-center w-36 space-x-2 group hover:text-primary-red transition-all duration-300 ease-in-out"
                >
                  <Phone
                    size={16}
                    className="text-primary-red group-hover:animate-pulse"
                  />
                  <span className="text-sm">+91 - 9876543210</span>
                </a>
                <a
                  href="mailto:artworkmaestro@site.com"
                  className="flex items-center w-52 space-x-2 group hover:text-primary-red transition-all duration-300 ease-in-out"
                >
                  <Mail
                    size={16}
                    className="text-primary-red group-hover:animate-pulse"
                  />
                  <span className="text-sm">artworkmaestro@site.com</span>
                </a>
                <div className="mb-8 justify-center  desktop:mb-0 w-full desktop:hidden flex items-center">
                  <img
                    src="/footerLogo.svg"
                    alt="Artwork Maestro Logo"
                    className="w-40 h-40 object-contain mt-8"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center desktop:justify-start justify-center space-x-6 desktop:space-x-4">
                  <a
                    href="#"
                    className="text-secondary-blue hover:text-primary-red transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6"
                    aria-label="Facebook"
                  >
                    <Facebook size={35} />
                  </a>
                  <a
                    href="#"
                    className="text-secondary-blue hover:text-primary-red transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6"
                    aria-label="Instagram"
                  >
                    <Instagram size={35} />
                  </a>
                  <a
                    href="#"
                    className="text-secondary-blue hover:text-primary-red transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={36} />
                  </a>
                  <a
                    href="#"
                    className="text-secondary-blue hover:text-primary-red transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6"
                    aria-label="Linkedin"
                  >
                    <Linkedin size={35} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 hidden lg:mb-0 w-full desktop:flex desktop:justify-end items-center">
            <img
              src="/footerLogo.svg"
              alt="Artwork Maestro Logo"
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="mb-4 text-xs text-center">
            Copyright © {currentYear} Artwork Maestro, All rights reserved | Powered by{" "}
            <span className="font-outfit ml-1 underline text-sm text-primary-red cursor-pointer hover:text-secondary-blue transition-colors duration-300">
               Saad Salmany
            </span>
          </p>
          <div className="flex mt-4 flex-wrap justify-center sm:justify-end space-x-4">
            {["Certifications","|", "FAQs","|", "Privacy Policy"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-primary-red text-xs transition-colors duration-300 ease-in-out relative group"
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
