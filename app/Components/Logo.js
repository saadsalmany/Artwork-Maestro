'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";


function Logo() {
  return (
    <div>
      <Link
              href="/"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-105
              hover:drop-shadow-lg hover:shado"
            >
              <Image
                src="/Logo.svg"
                alt="Your Company Logo"
                width={50}
                height={50}
                priority
              />
            </Link>
    </div>
  );
}

export default Logo;
