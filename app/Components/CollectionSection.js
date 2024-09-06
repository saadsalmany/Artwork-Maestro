"use client";
import Link from "next/link";
import { RxDownload } from "react-icons/rx";
import React, { useState, useRef, useEffect } from "react";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";
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
  const [ripple, setRipple] = useState({
    x: 0,
    y: 0,
    active: false,
    index: null,
  });

  const handleRipple = (event, index) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRipple({ x, y, active: true, index });

    setTimeout(() => {
      setRipple({ x: 0, y: 0, active: false, index: null });
    }, 1000);
  };

  return (
    <>
      <div className="w-full h-auto bg-white max-w-6xl px-8 mx-auto tablet:px-16 desktop:px-0 mobile:pb-16  flex-col ">
        <p
          className="text-center section text-xs opacity-70 text-charcoal  mb-8 pt-5
    desktop:mb-12"
        >
          Elevate
        </p>
        <div className="w-full h-min section flex justify-center items-center">
          <h1
            className="text-charcoal section font-outfit text-[6.5vw] tablet:text-[4vw] 
      desktop:text-[3vw] desktop:w-[50vw] tablet:w-[70vw] font-bold mb-4 tablet:mb-10 opacity-90 text-center"
          >
            Discover Our <span className="text-primary-red">Handcrafted</span>{" "}
            Hornware Collection
          </h1>
        </div>
        <p
          className="mb-10 section text-cha text-xs text-charcoal font-openSans mobile:leading-relaxed tracking-wide 
            desktop:hidden tablet:block text-center opacity-80 tablet:text-lg tablet:mb-20 tablet:leading-relaxed "
        >
          At Artwork Maestro, we curate a collection of exquisite hornware
          handcrafted by skilled artisans. Each piece is a unique masterpiece,
          meticulously crafted from ethically sourced horn. We invite you to
          explore the rich heritage and captivating designs that define
          hornware.
        </p>
        <p
          className="mobile:hidden section text-charcoal font-openSans tablet:hidden desktop:block text-center
        desktop:leading-loose desktop:tracking-wider  desktop:text-sm desktop:font-medium desktop:mt-2 desktop:px-14
        desktop:mb-20 "
        >
          At Artwork Maestro, we curate a collection of exquisite hornware
          handcrafted by skilled artisans. Each piece is a unique masterpiece,
          meticulously crafted from ethically sourced horn. We invite you to
          explore the rich heritage and captivating designs that define
          hornware. With a passion for preserving traditional craftsmanship, we
          bring you a selection of exceptional hornware pieces that embody the
          perfect blend of artistry and functionality. From statement-making
          decorative items to functional everyday essentials, our hornware
          collection has something for everyone. Join us on a journey to
          discover the beauty and elegance of hornware, and experience the
          Artwork Maestro difference.
        </p>
        <div className="grid grid-cols-1 section md:grid-cols-3 gap-10 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white desktop:hover:shadow-md transition-all duration-300 ease-in-out desktop:hover:scale-[102%] rounded-xl border-[1px] border-zinc-300 tablet:w-72 desktop:w-auto section  flex cursor-pointer 
              flex-col gap-2 justify-center items-center text-center h-[28rem] p-4 relative overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-auto rounded-lg h-48 desktop:h-48 tablet:h-auto object-cover mb-3 opacity-80"
              />
              <h2
                className="text-xl text-charcoal desktop:w-80 mobile:w-64 font-outfit font-normal  pt-0 tablet:pt-5 desktop:-mt-6 desktop:text-2xl
         desktop:font-normal tracking-tight mobile:mb-0 desktop:mb-3"
              >
                {product.title}
                <div className="w-full bg-white bg-gradient-to-r from-white via-black to-white h-[1px] opacity-50 mt-4 mb-2 "></div>
              </h2>

              <p className="text-[2.5vw] text-charcoal desktop:text-xs w-64 desktop:w-80 font-openSans tablet:text-[.7rem] desktop:leading-relaxed tracking-wider">
                {product.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 desktop:mt-16 flex section justify-center items-center md:flex-row mobile:gap-6 ">
          <Link
            href=""
            onClick={(event) => {
              event.preventDefault();
              const form = document.getElementById("form");
              const viewportHeight = window.innerHeight;
              const formTop = form.getBoundingClientRect().top;
              const formHeight = form.offsetHeight;
              const adjustment =
                window.innerWidth < 768
                  ? 30
                  : window.innerWidth < 1024
                  ? 100
                  : 50;
              window.scrollBy({
                top: formTop - (viewportHeight - formHeight) / 2 - adjustment,
                behavior: "smooth",
              });
            }}
          >
            <SecondaryBtn>Give Feedback</SecondaryBtn>
          </Link>
          <Link
            linkProps={{
              target: "_blank",
              rel: "noopener noreferrer",
            }}
            href="/contact"
          >
            <PrimaryBtn>
              <div className="flex flex-row items-center">
                <span>Custom Order</span>
              </div>
            </PrimaryBtn>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CollectionSection;
