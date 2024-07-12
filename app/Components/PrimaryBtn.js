'use client'
import Link from 'next/link';

const PrimaryBtn = ({ href, children }) => {
  return (
    <Link href={href} className="group">
      <button className="
        relative overflow-hidden
        text-sm
        px-4 py-1.5
        bg-primary-red text-white font-outfit rounded-full 
        transition-all duration-300 ease-in-out 
        hover:bg-secondary-blue hover:shadow-lg transform hover:-translate-y-1
        mobile:text-sm mobile:px-4 mobile:py-1.5
        tablet:text-base tablet:px-4 tablet:py-1.5
        desktop:text-base desktop:px-6 desktop:py-2.5
      ">
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-secondary-blue transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      </button>
    </Link>
  );
};

export default PrimaryBtn;