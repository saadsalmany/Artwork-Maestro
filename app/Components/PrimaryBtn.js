'use client';
import Link from 'next/link';
import { useState } from "react";

const PrimaryBtn = ({ href, children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => setIsClicked(true);
  const handleMouseUp = () => setIsClicked(false);

  return (
    <Link href={href} className="group relative inline-block">
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={`
          relative z-10
          text-xs
          px-6 py-2
          bg-primary-red text-white font-outfit rounded-full
          border border-transparent hover:border-secondary-blue
          transition-all duration-300 ease-in-out
          ${isClicked ? "scale-95" : ""}
          hover:bg-white hover:shadow-sm hover:border border-secondary-blue hover:text-secondary-blue hover:-translate-y-1
          mobile:text-xs mobile:px-6 mobile:py-2
          tablet:text-sm tablet:px-6 tablet:py-2
          desktop:text-base desktop:px-6 desktop:py-2
        `}
      >
        {children}
      </button>
      <div className="absolute inset-0 bg-secondary-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
    </Link>
  );
};

export default PrimaryBtn;
