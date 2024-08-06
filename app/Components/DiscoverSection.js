import React from 'react';
import Image from 'next/image';

const ProductRangeCard = () => {
  return (
    <div className="parent-container w-full  bg-blue-100">
      <div className="max-w-6xl mx-auto py-12 desktop:py-20 overflow-hidden">
        <div className="flex flex-col px-4 items-center justify-center md:flex-row">
          <div className="md:w-1/2 p-4 mt-4 flex flex-col justify-center">
            <h2 className="text-secondary-blue text-3xl md:text-4xl font-outfit font-bold mb-4">
              Discover our exquisite product range
            </h2>
            <p className="text-charcoal text-sm md:text-base font-openSans mb-6">
              Experience the beauty and craftsmanship of our handcrafted hornware collection
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-primary-red text-white font-outfit py-2 px-6 rounded-full hover:bg-secondary-blue transition duration-300">
                Explore Products
              </button>
              <button className="border border-secondary-blue text-secondary-blue font-outfit py-2 px-6 rounded-full hover:bg-secondary-blue hover:text-white transition duration-300">
                Contact us
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-80 md:h-full">
              <Image
                src="/discover.svg"
                alt="Handcrafted hornware collection"
                width={500}
                height={0}
                className='rounded-xl shadow-xl mt-4'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRangeCard;