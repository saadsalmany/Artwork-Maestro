'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => setIsClicked(true);
  const handleMouseUp = () => setIsClicked(false);
  const handleMouseLeave = () => setIsClicked(false);

  return (
    <div className="relative"> {/* Make the container relative for positioning */}
      <Link href="/" aria-label="Artwork Maestro Home">
        <Image
          src="/Logo.svg"
          alt="Your Company Logo"
          width={50}
          height={50}
          priority
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`
            desktop:duration-200 transition-all 
            desktop:hover:opacity-70
            mobile:active:scale-110 mobile:duration-75
            tablet:active:scale-110 tablet:duration-75
            ${isClicked ? "scale-110 opacity-70" : ""} // Apply effect on click for mobile/tablet
          `}
        />
      </Link>
    </div>
  );
}

export default Logo;
