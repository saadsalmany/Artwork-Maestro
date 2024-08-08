'use client';

import { useState } from 'react';
import { products } from '../data/Products';
import Navbar from './Navbar';
import Marquee from './Marquee';
import Footer from './Footer';

function ClientComponent({ params }) {
  const product = products.find(p => p.slug === params.slug);
  const [mainImage, setMainImage] = useState(product.image);
  const [activeImage, setActiveImage] = useState(product.image);

  if (!product) return <div>Product not found</div>;

  return (
    <div className='bg-zinc-100'>
    <Navbar />
    <Marquee />
    <div className="container max-w-6xl  mx-auto px-4 py-8 mt-20">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-96 object-contain rounded-lg shadow-lg"
          />
          <div className="mt-4 grid grid-cols-4 gap-2">
            {product.images &&
              product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={`w-full h-auto rounded-lg shadow-md cursor-pointer ${img === activeImage ? 'active' : ''}`}
                  style={{
                    opacity: img === activeImage ? 1 : 0.5,
                    border: img === activeImage ? '2px solid #333' : 'none',
                  }}
                  onClick={() => {
                    setMainImage(img);
                    setActiveImage(img);
                  }}
                />
              ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-outfit font-bold text-secondary-blue mb-4">
            {product.name}
          </h1>
          <p className="text-sm font-openSans text-gray-600 mb-4">
            Category: {product.category} | Tags: {product.tags.join(', ')}
          </p>
          <p className="text-lg font-openSans text-charcoal mb-6">
            {product.description}
          </p>
          <button className="bg-primary-red text-white font-outfit py-2 px-6 rounded-full hover:bg-red-600 transition-colors">
            Send Enquiry
          </button>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
  );
}

export default ClientComponent;