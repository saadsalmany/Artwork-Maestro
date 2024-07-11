"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Logo from "./Logo";
import PrimaryBtn from "./PrimaryBtn";

/**
 * Navbar component for both desktop and mobile layouts
 */
function Navbar() {
  // State to manage mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white border-b-[2px] fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <DesktopMenu />
            <MobileLayout isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
        <MobileMenu isOpen={isOpen} />
      </nav>
      <div className="h-20"></div> {/* This div acts as a spacer */}
    </>
  );
}

/**
 * Desktop menu component
 */
function DesktopMenu() {
  return (
    <div className="hidden sm:flex sm:items-center sm:justify-between w-full">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Navigation links */}
      <div className="flex items-center gap-0 text-md font-light font-outfit">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>

      {/* ORDER NOW button */}
      <div>
        <PrimaryBtn href="/signin">ORDER NOW</PrimaryBtn>
      </div>
    </div>
  );
}

/**
 * Mobile layout component
 * @param {boolean} isOpen - State of mobile menu
 * @param {function} toggleMenu - Function to toggle mobile menu
 */
function MobileLayout({ isOpen, toggleMenu }) {
  return (
    <div className="sm:hidden flex items-center justify-between w-full">
      {/* Logo for mobile */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex items-center">
        {/* PrimaryBtn on the left of hamburger menu with dynamic margin */}
        <div className={`transition-all duration-300 ${isOpen ? 'mr-8' : 'mr-2'}`}>
          <PrimaryBtn href="/signin">ORDER NOW</PrimaryBtn>
        </div>
        
        {/* Hamburger menu button */}
        <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

/**
 * Hamburger button component with animation
 * @param {boolean} isOpen - State of mobile menu
 * @param {function} toggleMenu - Function to toggle mobile menu
 */
function HamburgerButton({ isOpen, toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      type="button"
      className="inline-flex items-center mr-4 mb-2 justify-center pt-3.5 rounded-md text-charcoa hover:text-gray-600 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-gray-500 transition-all duration-300"
    >
      <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
      <div className={`w-6 h-6 relative ${isOpen ? 'rotate-180' : ''} transition-transform duration-500`}>
        <span className={`absolute w-full h-0.5 bg-charcoal transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
        <span className={`absolute w-full h-0.5 bg-charcoal transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'translate-y-2'}`}></span>
        <span className={`absolute w-full h-0.5 bg-charcoal transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`}></span>
      </div>
    </button>
  );
}

/**
 * Mobile menu component with enhanced animation
 * @param {boolean} isOpen - State of mobile menu
 */
function MobileMenu({ isOpen }) {
  return (
    <div 
      className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-6 py-8 bg-gradient-to-b from-white to-gray-50 rounded-b-2xl shadow-lg">
        <div className="flex flex-col space-y-4 font-outfit">
          <MobileNavLink href="/" delay="delay-100" isOpen={isOpen}>Home</MobileNavLink>
          <MobileNavLink href="/about" delay="delay-200" isOpen={isOpen}>About</MobileNavLink>
          <MobileNavLink href="/products" delay="delay-300" isOpen={isOpen}>Products</MobileNavLink>
          <MobileNavLink href="/contact" delay="delay-400" isOpen={isOpen}>Contact</MobileNavLink>
        </div>
      </div>
    </div>
  );
}

/**
 * Custom NavLink component for desktop menu
 * @param {string} href - Link destination
 * @param {React.ReactNode} children - Link text
 */
function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <div className="text-charcoal  opacity-70 px-4 py-1.5 hover:text-ch hover:mb-1 hover:bg-gray-200 : rounded-lg hover:opacity-100 cursor-pointer mx-4 relative group transition-all duration-300 ease-in-out">
        <span className="font-outfit">{children}</span>
        {/* <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-secondary-blue transition-all duration-300 ease-in-out group-hover:w-full"></span> */}
      </div>
    </Link>
  );
}

/**
 * Custom NavLink component for mobile menu with enhanced styling and animation
 * @param {string} href - Link destination
 * @param {React.ReactNode} children - Link text
 * @param {string} delay - CSS class for animation delay
 * @param {boolean} isOpen - State of mobile menu
 */
function MobileNavLink({ href, children, delay, isOpen }) {
  return (
    <Link href={href}>
      <div className={`
        block text-gray-800 font-medium text-lg
        py-3 px-4 rounded-lg
        transform transition-all duration-300 ease-in-out
        hover:bg-white hover:text-secondary-blue hover:shadow-md hover:scale-105
        active:scale-95
        ${delay} ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
      `}>
        {children}
      </div>
    </Link>
  );
}

export default Navbar;