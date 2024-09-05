import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg overflow-hidden flex flex-col w-full h-[28rem] ">
      <div className="relative w-full h-56 shadow-md rounded-lg overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg "
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-outfit font-semibold text-gray-800 mb-2">
            {product.name}
          </h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {product.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-xs font-openSans px-2 py-1 rounded-full text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm font-openSans text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        </div>
        <Link href={`/products/${product.slug}`}>
          <button className="w-full bg-primary-red rounded-full text-white font-outfit py-2 px-4 transition duration-300 flex items-center justify-center group hover:bg-secondary-blue">
            <span>View Details</span>
            <ChevronRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;