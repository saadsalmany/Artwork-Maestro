"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Logo from "./Logo";
import PrimaryBtn from "./PrimaryBtn";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:justify-between w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            {/* Navigation links */}
            <div className="flex items-center font-outfit">
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

          {/* Mobile layout */}
          <div className="sm:hidden flex items-center justify-between w-full">
            {/* Logo for mobile */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <div className="flex items-center">
              {/* PrimaryBtn on the left of hamburger menu */}
              <PrimaryBtn href="/signin">ORDER NOW</PrimaryBtn>
              {/* Hamburger menu (hidden on larger screens) */}
              <div className="ml-3">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-gray-500 transition-colors duration-300"
                >
                  <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
                  {isOpen ? (
                    <RiCloseFill className="h-6 w-6" />
                  ) : (
                    <RiMenu3Fill className="h-7 w-7" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`sm:hidden ${isOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 font-outfit">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/products">Products</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

// Custom NavLink component for desktop menu
function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <div className="text-gray-600 hover:text-blue-600 cursor-pointer mx-4 relative group transition-colors duration-300 ease-in-out">
        <span className="font-outfit">{children}</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </div>
    </Link>
  );
}

// Custom NavLink component for mobile menu
function MobileNavLink({ href, children }) {
  return (
    <Link href={href}>
      <div className="block text-gray-600 hover:text-blue-600 hover:bg-gray-100 py-2 px-4 cursor-pointer font-outfit transition-all duration-300 ease-in-out rounded-md">
        {children}
      </div>
    </Link>
  );
}

export default Navbar;