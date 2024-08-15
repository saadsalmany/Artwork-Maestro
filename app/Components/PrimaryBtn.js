"use client";
import Link from "next/link";
import { useState } from "react";

const PrimaryBtn = ({
  href,
  children,
  type = "submit",
  onClick,
  blank = false, // Add a default value for blank
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => setIsClicked(true);
  const handleMouseUp = () => setIsClicked(false);

  if (href) {
    return (
      <Link
        linkProps={{
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        href={href}
        target={blank ? "_blank" : undefined}
      >
        <div className="group relative inline-block">
          <button
            onClick={onClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{
              zIndex: 10,
            }}
            className={`
              relative z-auto
              text-xs
              px-6 py-2
              bg-primary-red text-white font-outfit rounded-full
              border border-transparent desktop:hover:border-secondary-blue
              transition-all desktop:duration-300 mobile:duration-75 ease-in-out
              desktop:hover:bg-white desktop:hover:shadow-sm desktop:hover:text-secondary-blue desktop:hover:-translate-y-1
              mobile:text-xs mobile:px-6 mobile:py-2
              tablet:text-xm tablet:px-6 tablet:py-2
              desktop:text-sm desktop:px-6 desktop:py-2
              mobile:active:bg-secondary-blue mobile:active:opacity-100
              tablet:active:bg-secondary-blue tablet:active:opacity-100
            `}
          >
            {children}
          </button>
          <div className="absolute inset-0 bg-secondary-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity mobile:duration-75 desktop:duration-300 z-0"></div>
        </div>
      </Link>
    );
  } else {
    return (
      <div className="group relative inline-block">
        <button
          type={type}
          onClick={onClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{
            zIndex: 10,
          }}
          className={`
            relative z-auto
            text-xs
            px-6 py-2
            bg-primary-red text-white font-outfit rounded-full
            border border-transparent desktop:hover:border-secondary-blue
            transition-all desktop:duration-300 mobile:duration-75 ease-in-out
            desktop:hover:bg-white desktop:hover:shadow-sm desktop:hover:text-secondary-blue desktop:hover:-translate-y-1
            mobile:text-xs mobile:px-6 mobile:py-2
            tablet:text-xm tablet:px-6 tablet:py-2
            desktop:text-sm desktop:px-6 desktop:py-2
            mobile:active:bg-secondary-blue mobile:active:opacity-100
            tablet:active:bg-secondary-blue tablet:active:opacity-100
          `}
        >
          {children}
        </button>
        <div className="absolute inset-0 bg-secondary-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity mobile:duration-75 desktop:duration-300 z-0"></div>
      </div>
    );
  }
};

export default PrimaryBtn;
