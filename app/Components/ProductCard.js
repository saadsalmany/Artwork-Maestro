import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col w-full ">
      <div className="relative w-72 h-[14.4rem] desktop:w-60 desktop:h-48 mx-auto mt-4">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl shadow-md h-full w-full "
        />
      </div>
      <div className="pt-2 pb-6 px-6 flex-grow flex flex-col">
        <h3 className="text-xl font-outfit font-semibold text-secondary-blue mb-2">
          {product.name}
        </h3>
        <div className="flex space-x-2 mb-3">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-xs font-openSans px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm hidden desktop:flex font-openSans text-charcoal mb-4 flex-grow">
          {product.description.substring(0, 80)}...
        </p>
        <p className="text-sm desktop:hidden flex font-openSans text-charcoal mb-4 flex-grow">
          {product.description.substring(0, 70)}...
        </p>
        <button className="w-full bg-primary-red rounded-full text-white font-outfit py-2 px-4 hover:bg-red-600 transition duration-300 flex items-center justify-center">
          <span>Learn More</span>
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
