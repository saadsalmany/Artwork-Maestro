import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-outfit font-semibold text-secondary-blue mb-2">{product.name}</h3>
        <p className="text-sm font-openSans text-charcoal mb-4">
          {product.description.substring(0, 100)}...
        </p>
        <Link href={`/products/${product.slug}`} className="w-full bg-primary-red text-white font-outfit py-2 px-4 rounded-full flex items-center justify-center">
          Learn More
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;