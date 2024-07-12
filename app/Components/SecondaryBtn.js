'use client';
import Link from 'next/link';
import { useState } from "react";

const SecondaryBtn = ({ href, children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => setIsClicked(true);
  const handleMouseUp = () => setIsClicked(false);

  return (
    <Link href={href} className="group relative">
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={`
          relative z-10
          text-sm
          px-4 py-1.5
          bg-none text-secondary-blue font-outfit rounded-full
          border border-secondary-blue
          transition-all duration-300 ease-in-out
          ${isClicked ? "scale-95" : ""}  
         hover:bg-white hover:shadow-sm hover:text-secondary-blue hover:-translate-y-1
        mobile:text-xs mobile:px-6 mobile:py-2
        tablet:text-sm tablet:px-6 tablet:py-2
        desktop:text-base desktop:px-6 desktop:py-2
        `}
      >
        {children}
      </button>

      {/* Hover Effect Layers (from DefaultBtn) */}
      <div className="absolute inset-0 bg-secondary-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div> 
    </Link>
  );
};

export default SecondaryBtn;



// 'use client'
// import Link from 'next/link';

// const PrimaryBtn = ({ href, children }) => {
//   return (
//     <Link href={href} className="group">
//       <button className="
//         relative overflow-hidden
//         z-50
//         text-sm
//         px-4 py-1.5
//         bg-primary-red text-white font-outfit rounded-full 
//         transition-all duration-300 ease-in-out 
//         hover:bg-secondary-blue hover:shadow-sm  hover:-translate-y-1
//         mobile:text-sm mobile:px-6 mobile:py-2
//         tablet:text-sm tablet:px-6 tablet:py-2
//         desktop:text-base desktop:px-6 desktop:py-2
//       ">
//         <span className="relative z-10">{children}</span>
//         <span className="absolute inset-0 bg-primary-red bottom-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
//       </button>
//     </Link>
//   );  
// };

// export default PrimaryBtn;