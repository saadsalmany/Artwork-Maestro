// components/Navbar.jsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PrimaryBtn from './PrimaryBtn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  const NavLink = ({ href, label, isMobile }) => (
    <Link
      href={href}
      className={`
        relative overflow-hidden
        ${isMobile 
          ? 'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out'
          : 'text-charcoal hover:text-secondary-blue transition-colors duration-300 py-2'
        }
        ${pathname === href ? (isMobile ? 'bg-secondary-blue text-white' : 'font-semibold') : ''}
      `}
      onClick={() => isMobile && setIsOpen(false)}
    >
      <span className="relative z-10">{label}</span>
      {!isMobile && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-blue transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      )}
    </Link>
  );

  return (
    <>
      <nav className="fixed w-full z-50 bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <span className="text-2xl font-bold text-secondary-blue">Logo</span>
            </Link>

            <div className="hidden desktop:flex items-center justify-center flex-grow">
              {navLinks.map((link) => (
                <div key={link.href} className="group mx-3">
                  <NavLink {...link} />
                </div>
              ))}
            </div>

            <div className="hidden desktop:block">
              <PrimaryBtn href="/signin">ORDER NOW</PrimaryBtn>
            </div>

            <div className="flex items-center desktop:hidden">
              <div className="mr-2">
                <PrimaryBtn href="/signin">ORDER NOW</PrimaryBtn>
              </div>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-charcoal focus:outline-none transition-transform duration-300 hover:scale-110"
              >
                <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div 
          className={`
            desktop:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} isMobile />
            ))}
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;