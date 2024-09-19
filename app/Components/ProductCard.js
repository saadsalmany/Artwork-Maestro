import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl py-4 px-2 desktop:p-4 shadow overflow-hidden flex flex-col w-full h-full ">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg aspect-square "
        />
      </div>
      <div className="px-1 py-0 pt-2 desktop:pt-2 desktop:px-2 desktop:py-0 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-outfit font-medium text-charcoal mb-2">
            {product.name}
          </h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {product.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-[.5rem] desktop:text-xs font-openSans px-2 py-1 desktop:px-2 desktop:py-1 rounded-md text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs desktop:text-sm font-openSans text-gray-600 mb-3 line-clamp-3">
            {product.description}
          </p>
        </div>
        <Link href={`/products/${product.slug}`}>
          <button className="w-full bg-primary-red rounded-xl text-white font-outfit py-1 desktop:py-2 transition duration-300 flex items-center justify-center group hover:bg-secondary-blue">
            <span className="text-xs desktop:text-sm">View Details</span>
            <ChevronRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;