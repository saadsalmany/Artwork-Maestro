"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import PrimaryBtn from "./PrimaryBtn";
import { Star, Truck, RefreshCw, Shield } from "lucide-react";
import SecondaryBtn from "./SecondaryBtn";
import ProductHighlights from "./ProductHighlights";

function ClientComponent({ params, products }) {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products && params.slug) {
      const foundProduct = products.find((p) => p.slug === params.slug);
      setProduct(foundProduct);
      setMainImage(foundProduct?.images[0]);
      setLoading(false);
    }
  }, [products, params.slug]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <SecondaryBtn>Loading...</SecondaryBtn>
      </div>
    );
  if (!product)
    return (
      <div className="flex justify-center items-center font-openSans text-secondary-blue font-bold text-2xl h-screen">
        Product not found
      </div>
    );

  return (
    <div className="bg-white">
      <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-0 desktop:mx-12 lg:items-start">
          {/* Left column */}
          {/*Mobile Layout */}
         <div className="md:hidden mb-8">
         <h1 className="text-3xl px-4 sm:px-6 lg:px-8 font-outfit font-bold tracking-tight text-secondary-blue">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
            </div>

            {/* Reviews */}
            <div className="mt-3 px-4 sm:px-6 lg:px-8">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`${
                        4 > rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200"
                      } h-5 w-5 flex-shrink-0`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">4 out of 5 stars</p>
              </div>
            </div>
         </div>
          <div className="flex w-full px-4 mt-4 flex-col-reverse">
            
            {/* Image grid */}
            <div className="mt-8 tablet:w-96 tablet:h-full desktop:w-[28rem] sm:block desktop:max-w-none">
              <div
                className="grid grid-cols-5 tablet:grid-cols-4 desktop:grid-cols-5 gap-3 lg:gap-3"
                aria-orientation="horizontal"
                role="tablist"
              >
                {product.images?.map((img, index) => (
                  <button
                    key={index}
                    className={`relative h-24 rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 transition-all duration-150 ${
                      img === mainImage
                        ? "shadow-md border-[1px] border-primary-red transition-all scale-105 duration-200"
                        : "ring-1 ring-gray-300 opacity-70"
                    }`}
                    onClick={() => setMainImage(img)}
                  >
                    <span className="sr-only">{product.name}</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <Image
                        src={img}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-center object-cover"
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full desktop:w-[28rem] shadow rounded-2xl tablet:w-96 aspect-square">
              <Image
                src={mainImage}
                alt={product.name}
                layout="responsive"
                width={300}
                height={300}
                className="w-full object-center object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-4 order-first lg:order-last">
            <h1 className="text-3xl hidden md:block font-outfit font-bold tracking-tight text-secondary-blue">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
            </div>

            {/* Reviews */}
            <div className="mt-3 hidden md:block">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`${
                        4 > rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200"
                      } h-5 w-5 flex-shrink-0`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">4 out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base leading-wide font-openSans text-gray-700">
                {product.description}
              </p>
            </div>

            <div className="mt-6">
              <div className="flex gap-3 flex-wrap  text-sm text-gray-500">
                <span className="inline-flex font-outfit items-center px-4 py-2 text-center rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {product.category}
                </span>
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex font-outfit items-center px-4 py-2 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <PrimaryBtn href={"/contact"} className="w-full">
                Request Order
              </PrimaryBtn>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="font-outfit font-medium text-secondary-blue">
                Highlights
              </h3>
              <ProductHighlights highlights={product.highlights} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ClientComponent;