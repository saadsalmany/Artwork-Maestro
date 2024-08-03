import Link from "next/link";
import React from "react";
import { RxDownload } from "react-icons/rx";

const products = [
  {
    title: "Beer Cups: Crafted with Precision",
    image: "/beercup.png",
    description:
      "Our beer cups are a testament to fine craftsmanship, designed to enhance your drinking experience. Hand-polished to perfection, creating a stunning vessel for your favorite brews.",
  },
  {
    title: "Holders: Functional and Stylish Accessories",
    image: "/holders.png",
    description:
      "Elevate your home with our handcrafted holders. These versatile pieces serve as both functional supports and artistic accents, adding a touch of sophistication to any space.",
  },
  {
    title: "Jewelry: Adorn Yourself with Artistry",
    image: "/necklace.png",
    description:
      "Our handcrafted jewelry pieces are more than accessories; they're wearable art. Each piece tells a story of craftsmanship and creativity, designed to enhance your personal style.",
  },
];

function CollectionSection() {
  return (
    <>
      <div className="w-full mobile:h-[220vh] tablet:h-[90vh] desktop:h-[180vh] bg-gray-900 text-white mobile:p-8 tablet:p-16 desktop:p-44 desktop:pt-16 mobile:pb-16  flex-col ">
        <h6
          className="text-center text-xs opacity-50  mb-14 pt-5
    desktop:mb-24"
        >
          Elevate
        </h6>
        <div className="w-full h-min flex justify-center items-center">
          <h1
            className=" font-outfit text-[6.5vw] tablet:text-[4vw] 
      desktop:text-[3vw] desktop:w-[50vw] tablet:w-[70vw] font-bold mb-4 tablet:mb-10 opacity-90 text-center"
          >
            Discover Our <span className="text-primary-red">Handcrafted</span>{" "}
            Hornware Collection
          </h1>
        </div>
        <p
          className="mb-10 text-xs font-openSans mobile:leading-relaxed tracking-wide 
            desktop:hidden tablet:block text-center opacity-80 tablet:text-lg tablet:mb-20 tablet:leading-relaxed "
        >
          At Artwork Maestro, we curate a collection of exquisite hornware
          handcrafted by skilled artisans. Each piece is a unique masterpiece,
          meticulously crafted from ethically sourced horn. We invite you to
          explore the rich heritage and captivating designs that define
          hornware.
        </p>
        <p
          className="mobile:hidden font-openSans tablet:hidden desktop:block text-center
        desktop:leading-loose desktop:tracking-wider  desktop:text-xs desktop:mt-2 desktop:px-14
        desktop:mb-20 "
        >
          At Artwork Maestro, we curate a collection of exquisite hornware
          handcrafted by skilled artisans. Each piece is a unique masterpiece,
          meticulously crafted from ethically sourced horn. We invite you to
          explore the rich heritage and captivating designs that define
          hornware. At Artwork Maestro, we curate a collection of exquisite
          hornware handcrafted by skilled artisans. Each piece is a unique
          masterpiece, meticulously crafted from ethically sourced horn. We
          invite you to explore the rich heritage and captivating designs that
          define hornware. At Artwork Maestro, we curate a collection of
          exquisite hornware handcrafted by skilled artisans. Each piece is a
          unique masterpiece, meticulously crafted from ethically sourced horn.
          We invite you to explore the rich heritage and captivating designs
          that define hornware. At Artwork Maestro, we curate a collection of
          exquisite hornware handcrafted by skilled artisans. Each piece is a
          unique masterpiece, meticulously crafted from ethically sourced horn.
          We invite you to explore the rich heritage and captivating designs
          that define hornware.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800 flex flex-col gap-3 justify-center items-center hover:opacity-80 text-center mobile:h-96 desktop:h-[60vh] tablet:h-[35vh] p-4 rounded-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-70 h-48 object-cover mb-3 rounded opacity-80"
              />
              <h2
                className="text-xl font-outfit font-medium pt-0 tablet:pt-5 desktop:-mt-6 opacity-90 desktop:text-2xl
                 desktop:font-medium tracking-tight mobile:mb-0 desktop:mb-3"
              >
                {product.title}
              <div className="w-full bg-white bg-gradient-to-r from-gray-800 via-white to-gray-800 h-[1px] opacity-50 mt-2 mb-0 "></div>
              </h2>

              <p className="text-[2.5vw] desktop:text-xs font-openSans tablet:text-xs desktop:leading-relaxed opacity-80 tracking-wider">
                {product.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center items-center md:flex-row mobile:gap-6 ">
          <Link href="/">
            <button class="bg-transparent font-outfit hover:bg-secondary-blue hover: transition-all delay-100 text-white  hover:text-white py-2 px-6 border border-white hover:border-white rounded-full">
              Get Info
            </button>
          </Link>
          <Link href="/">
            <button class="bg-primary-red hover:bg-gray-400 transition-all delay-100 text-white font-medium py-2 px-6 font-outfit rounded-full inline-flex items-center">
              <RxDownload />

              <span className=" font-outfit ml-2">Brochure</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CollectionSection;
