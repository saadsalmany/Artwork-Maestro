"use client";
import Image from "next/image";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const HeroSection = () => {
  const heroImages = [
    "/productsImages/p1.png",
    "/productsImages/p2.png",
    "/productsImages/p3.png",
    "/productsImages/p4.png",
    "/productsImages/p5.png",
    "/productsImages/p6.png",
  ];

  return (
    <>
      <section className="hero-section bg-white desktop:mt-12 mb-12 desktop:mb-0 flex flex-col tablet:items-center desktop:flex-row items-stretch justify-between px-6 desktop:px-16 tablet:pb-6 desktop:pb-24 max-w-7xl mx-auto relative">
        <div className="content-wrapper desktop:gap- tablet:gap-7 gap-2 flex-1 pt-16 h-auto tablet:pt-28 desktop:pt-20 flex flex-col tablet:items-center desktop:items-start desktop:mt-9">
          <h1 className="text-4xl tablet:text-[6vw] desktop:text-[3vw] font-bold font-outfit mb-0  text-secondary-blue tablet:text-center desktop:text-left">
            Simplify Sourcing With Us:
          </h1>
          <h2 className="text-2xl desktop:w-[45rem] tablet:text-3xl tablet:w-[40rem] font-outfit leading-tight font-normal desktop:mt-0 desktop:text-4xl text-secondary-blue tablet:text-center desktop:text-left">
            We're one-stop trusted source
          </h2>
          <p className="text-xs tablet:text-2xl tablet:w-[45rem] tablet:text-center font-openSans font-medium text-charcoal desktop:mb-0 mb-2 tablet:mb-8
          desktop:text-base desktop:w-[35rem] desktop:text-left ">
            Exquisite home decors, handcrafted Indian jewelry & sustainable
            products made from natural materials like horn, bone, resin, mother
            of pearl, wood & marble.
          </p>

          {/* HeroImage Swiper */}
          <div
            className="w-[21rem] mx-auto  tablet:w-[50vw] tablet:block mb-4 desktop:mb-0 desktop:absolute desktop:w-[28rem]
            desktop:top-16 desktop:left-[48rem] rounded-2xl shadow-md overflow-hidden"
          >
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-full"
            >
              {heroImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={`Product Collection Images ${index + 1}`}
                    width={500}
                    height={500}
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-auto object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="cta-buttons mb-6 desktop:mb-0 flex justify-center desktop:justify-start gap-2 tablet:gap-7">
            <SecondaryBtn href="/about">KNOW MORE</SecondaryBtn>
            <PrimaryBtn href="/products">EXPLORE PRODUCTS</PrimaryBtn>
          </div>

          <div className="flex items-center text-xs tablet:text-sm justify-center desktop:justify-start font-openSans text-charcoal">
            <Image
              src="/plane.gif"
              alt="Globe Plane icon"
              width={20}
              height={20}
            />
            <p className="mx-1 mt-1 desktop:text-sm tablet:text-lg ">
              Initiated more than 10000+ Shipment Successfully
            </p>
            <Image
              src="/successIcon.svg"
              alt="Success Icon"
              width={20}
              height={20}
              className="mt-1"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;