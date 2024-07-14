import React from "react";

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
      <div className="w-full min-h-screen bg-gray-900 text-white mobile:p-8 desktop:p-44  flex-col ">
        <h6
          className="text-center text-xs opacity-50  mb-14 pt-5
    desktop:mb-24"
        >
          Elevate
        </h6>
        <div className="w-full h-min flex justify-center items-center">
          <h1
            className="text-[6.5vw] tablet:text-[8vw] 
      desktop:text-[3vw] desktop:w-[50vw] font-bold mb-4 opacity-90 text-center"
          >
            Discover Our <span className="text-primary-red">Handcrafted</span>{" "}
            Hornware Collection
          </h1>
        </div>
        <p className="mb-8 text-sm mobile:text-xs mobile:leading-relaxed tracking-wide 
            desktop:hidden tablet:hidden text-center opacity-80">
          At Artwork Maestro, we curate a collection of exquisite hornware
          handcrafted by skilled artisans. Each piece is a unique masterpiece,
          meticulously crafted from ethically sourced horn. We invite you to
          explore the rich heritage and captivating designs that define
          hornware.
        </p>
        <p className="mobile:hidden desktop:block tablet:block text-center
        desktop:leading-relaxed desktop:tracking-wide desktop:text-sm desktop:mt-7 desktop:px-14
        desktop:mb-20">
        At Artwork Maestro, we curate a collection of exquisite hornware
          handcrafted by skilled artisans. Each piece is a unique masterpiece,
          meticulously crafted from ethically sourced horn. We invite you to
          explore the rich heritage and captivating designs that define
          hornware.
          At Artwork Maestro, we curate a collection of exquisite hornware
          handcrafted by skilled artisans. Each piece is a unique masterpiece,
          meticulously crafted from ethically sourced horn. We invite you to
          explore the rich heritage and captivating designs that define
          hornware.
          At Artwork Maestro, we curate a collection of exquisite hornware
          handcrafted by skilled artisans. Each piece is a unique masterpiece,
          meticulously crafted from ethically sourced horn. We invite you to
          explore the rich heritage and captivating designs that define
          hornware.
          At Artwork Maestro, we curate a collection of exquisite hornware
          handcrafted by skilled artisans. Each piece is a unique masterpiece,
          meticulously crafted from ethically sourced horn. We invite you to
          explore the rich heritage and captivating designs that define
          hornware.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-800 text-center p-4 rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-3 rounded opacity-80"
              />
              <h2 className="text-xl font-normal opacity-90 tracking-tight mb-4">{product.title}</h2>
              <p className="text-[2.5vw] opacity-80 tracking-wide px-5">{product.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <button className="bg-yellow-500 text-black px-6 py-2 rounded">
            Inquire
          </button>
          <button className="bg-transparent border border-yellow-500 text-yellow-500 px-6 py-2 rounded">
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default CollectionSection;
