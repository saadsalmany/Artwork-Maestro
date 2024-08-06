import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-[1px] border-charcoal text-charcoal font-openSans">
      <div className="container max-w-6xl mx-auto px-8 py-8">
        <div className="flex flex-col gap-6 desktop:flex-row justify-between items-start">
          <div className="mb-8 desktop:mb-0">
            <div className="flex items-center mb-8">
              <img
                src="/Logo.svg"
                alt="Artwork Maestro"
                className="w-10 h-10 mr-2"
              />
              <h2 className="text-2xl font-outfit text-secondary-blue font-semibold">
                Artwork Maestro
              </h2>
            </div>
            <p className="mb-2 font-openSans font-semibold text-lg ">Address</p>
            <p className="text-sm w-60">
              Mohalla Sarai Tarin, Sambhal, Uttar Pradesh, India
            </p>
          </div>

          <div className="mb-8 desktop:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <a
              href="https://wa.me/+919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center underline text-sm mb-2 hover:text-primary-red transition-colors duration-300 ease-in-out"
            >
              <AiOutlineWhatsApp size={16} className="mr-2" />
              +91 - 9876543210
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=artworkmaestro@gmail.com.com&su=Subject&body=Body"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-sm underline items-center hover:text-primary-red transition-colors duration-300 ease-in-out"
            >
              <AiOutlineMail size={16} className="mr-2" />
              artworkmaestro@site.com
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[FaFacebook, FaInstagram, FaLinkedin, FaGlobe].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-charcoal hover:text-primary-red transition-colors duration-300 ease-in-out"
                  >
                    <Icon size={24} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col desktop:flex-row justify-between items-center text-sm">
          <p>
            &copy; {currentYear} Artwork Maestro, All rights reserved |Powered by{" "}
            <span className="underline hover:text-primary-red transition-colors duration-300 ease-in-out cursor-pointer">
              {" "}
               Saad Salmany{" "}
            </span>
          </p>
          <div className="mt-4 desktop:mt-0">
            <a
              href="#"
              className="hover:text-primary-red transition-colors duration-300 ease-in-out mr-4"
            >
              Certifications
            </a>
            <a
              href="#"
              className="hover:text-primary-red transition-colors duration-300 ease-in-out mr-4"
            >
              FAQs
            </a>
            <a
              href="#"
              className="hover:text-primary-red transition-colors duration-300 ease-in-out"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
