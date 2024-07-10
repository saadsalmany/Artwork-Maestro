'use client'
import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Logo from "./Logo";

// PrimaryBtn component with responsive text size
function PrimaryBtn({ children, href }) {
  return (
    <Link href={href}>
      <button className="bg-primary-red px-6 py-2 text-white sm:text-lg text-sm rounded-full hover:bg-primary-red-dark transition duration-300 ease-in-out">
        {children}
      </button>
    </Link>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo />
            </Link>
          </div>


          {/* Hamburger menu (hidden on larger screens) */}
          <div className="-mr-2 flex items-center sm:hidden">
            {isOpen ? (
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                <span className="sr-only">Close main menu</span>
                <RiCloseFill className="h-6 w-6" />
              </button>
            ) : (
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                <span className="sr-only">Open main menu</span>
                <RiMenu3Fill className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center font-outfit space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <div className="ml-8">
              <PrimaryBtn href="/signin">ORDER NOW</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 font-outfit ">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/products">Products</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
        </div>
        <div className="px-2 pt-2 pb-3 font-outfit">
          <PrimaryBtn href="/signin">ORDER NOW</PrimaryBtn>
        </div>
      </div>
    </nav>
  );
}

// Custom NavLink component for desktop menu
function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <div className="text-gray-600 hover:text-gray-800 cursor-pointer">{children}</div>
    </Link>
  );
}

// Custom NavLink component for mobile menu
function MobileNavLink({ href, children }) {
  return (
    <Link href={href}>
      <div className="block text-gray-600 hover:text-gray-800 py-2 cursor-pointer">{children}</div>
    </Link>
  );
}

export default Navbar;
