'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import Navbar from './Navbar';
import Marquee from './Marquee';
import Footer from './Footer';
import PrimaryBtn from './PrimaryBtn';

function ClientComponent({ params, products }) {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products && params.slug) {
      const foundProduct = products.find(p => p.slug === params.slug);
      setProduct(foundProduct);
      setMainImage(foundProduct?.image);
      setLoading(false);
    }
  }, [products, params.slug]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className='bg-zinc-100 min-h-screen flex flex-col'>
      <Navbar />
      <Marquee />
      <main className="flex-grow container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-56 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative w-full pb-[80%] overflow-hidden rounded-lg bg-gray-200">
              {mainImage && (
                <Image
                  src={mainImage}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full object-center object-cover"
                />
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images?.map((img, index) => (
                <button
                  key={index}
                  className={`relative pb-[80%] overflow-hidden rounded-md ${img === mainImage ? 'shadow-lg ring-2 ring-charcoal' : ' opacity-70'}`}
                  onClick={() => setMainImage(img)}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 w-full h-full object-center object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-outfit font-bold text-secondary-blue">
              {product.name}
            </h1>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-openSans text-gray-600">
                Category: {product.category}
              </span>
              <span className="text-sm font-openSans text-gray-600">
                |
              </span>
              <span className="text-sm font-openSans text-gray-600">
                Tags: {product.tags.join(', ')}
              </span>
            </div>
            <p className="text-lg font-openSans text-charcoal">
              {product.description}
            </p>
            <PrimaryBtn href={'/contact'}>Send Enquiry</PrimaryBtn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ClientComponent;