"use client";
import Link from "next/link";
import { useState } from "react";

const SecondaryBtn = ({ href, children, type = "button", formReset, onClick, loadMore }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => setIsClicked(true);
  const handleClick = (e) => {
    if (type === "reset" && formReset) {
      formReset();
    }
    if (onClick) {
      onClick(e);
    }
    setIsClicked(false);
  };

  if (href) {
    return (
      <Link href={href} className="group relative inline-block">
        <div className="relative">
          <button
            onMouseDown={handleMouseDown}
            onClick={handleClick}
            style={{
              zIndex: 10,
            }}
            className={`
              relative z-auto
              text-sm
              px-4 py-1.5
              bg-none text-secondary-blue font-outfit rounded-full
              border border-secondary-blue
              transition-all desktop:duration-300 mobile:duration-75 tablet:duration-75 ease-in-out
              ${isClicked ? "scale-95" : ""}
              desktop:hover:bg-white desktop:hover:shadow-sm desktop:hover:text-secondary-blue desktop:hover:-translate-y-1
              mobile:text-xs mobile:px-6 mobile:py-2
              tablet:text-xs tablet:px-6 tablet:py-2
              desktop:text-sm desktop:px-6 desktop:py-2
              mobile:active:bg-secondary-blue mobile:active:text-white
              tablet:active:bg-secondary-blue tablet:active:text-white
            `}
          >
            {children}
          </button>
          <div className="absolute inset-0 bg-secondary-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity desktop:duration-300 tablet:duration-75 mobile:duration-75 z-0"></div>
        </div>
      </Link>
    );
  } else {
    return (
      <div className="group relative inline-block">
        <button
          type={type}
          onMouseDown={handleMouseDown}
          onClick={handleClick}
          style={{
            zIndex: 10,
          }}
          className={`
            relative z-auto
            text-sm
            px-4 py-1.5
            bg-none text-secondary-blue font-outfit rounded-full
            border border-secondary-blue
            transition-all desktop:duration-300 mobile:duration-75 tablet:duration-75 ease-in-out
            ${isClicked ? "scale-95" : ""}
            desktop:hover:bg-white desktop:hover:shadow-sm desktop:hover:text-secondary-blue desktop:hover:-translate-y-1
            mobile:text-xs mobile:px-6 mobile:py-2
            tablet:text-xs tablet:px-6 tablet:py-2
            desktop:text-sm desktop:px-6 desktop:py-2
            mobile:active:bg-secondary-blue mobile:active:text-white
            tablet:active:bg-secondary-blue tablet:active:text-white
          `}
        >
          {children}
        </button>
        <div className="absolute inset-0 bg-secondary-blue rounded-full opacity-0 desktop:group-hover:opacity-100 transition-opacity desktop:duration-300 tablet:duration-75 mobile:duration-75 z-0"></div>
      </div>
    );
  }
};

export default SecondaryBtn;