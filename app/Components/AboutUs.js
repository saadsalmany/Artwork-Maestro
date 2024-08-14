import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Archive, Diamond, BadgeCheck, User } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const chooseUsSectionRef = React.useRef(null);
  const sections = [
    {
      title: "Unique Charm",
      content:
        "We capture the essence of handcrafted items, offering pieces that are both vibrant and captivating.",
      icon: <Heart />, // Use the imported Heart component
    },
    {
      title: "Modern Appeal",
      content:
        "Our designs reflect the spirit of the times, complementing contemporary living spaces.",
      icon: <Archive />, // Use the imported Archive component
    },
    {
      title: "Unmatched Distinction",
      content:
        "Each Artwork Maestro piece is one-of-a-kind, standing out from the crowd.",
      icon: <Diamond />, // Use the imported Diamond component
    },
    {
      title: "Quality Uncompromised",
      content:
        "We prioritize consistent, exceptional quality in every product we create.",
      icon: <BadgeCheck />, // Use the imported Checkmark component
    },
    {
      title: "Customer-Centric",
      content:
        "Our commitment to your satisfaction drives everything we do, ensuring a seamless and positive experience.",
      icon: <User />, // Use the imported User component
    },
  ];

  const hoverAnimation = (target) => {
    gsap.to(target, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const leaveAnimation = (target) => {
    gsap.to(target, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-8 tablet:px-16 desktop:px-26 my-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-outfit font-semibold text-secondary-blue text-4xl sm:text-6xl lg:text-7xl mb-4 flex items-center justify-center">
          Artw
          <span className="inline-block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%" // Set width to 100%
              height="100%" // Set height to 100%
              viewBox="0 0 40 40"
              fill="none"
              className=" justify-center items-center  w-9 h-9 tablet:w-14 tablet:h-14 desktop:w-16 desktop:h-16 desktop:mt-2 animate-spin-slow"
            >
              {/* SVG content */}
              <path
                d="M34.2397 16.6796L34.2855 16.625C34.3063 16.7083 34.325 16.7916 34.3449 16.875L34.2397 16.6796ZM15.4532 12.8844L15.5855 12.7448L15.8094 12.8844L15.6302 13.0329L15.4532 12.8844ZM15.8819 13.276V13.5598H15.4146L15.2876 13.375V13.1104H15.324L15.8819 13.276ZM13.897 12.7906H14.3818L13.7589 13.6599L13.5032 13.5224L13.5585 13.1562L13.897 12.7906ZM15.0593 13.375V13.6599L14.8489 13.8704H14.3817L14.4546 13.55L14.6754 13.5307L14.7203 13.4208L15.0593 13.375ZM14.9219 12.6714V12.3224L15.2234 12.5973L14.9219 12.6714ZM15.1693 12.7906V13.0828L14.9485 13.2245L14.6757 13.276V12.7905H15.1693V12.7906ZM14.7651 12.3693V12.6714H13.888L13.5572 12.5792L13.6395 12.3693L14.061 12.1954H14.6381V12.3693H14.7651V12.3693ZM12.7255 11.2703L13.1083 11.087L13.4563 11.1703L13.3376 11.6375L12.9626 11.7557L12.7255 11.2703ZM34.0022 15.938H32.8313L32.1167 15.4072L31.3667 15.4797V15.938H31.1293L30.874 15.7557L29.5729 15.4266V14.5839L27.9251 14.7115L27.4136 14.986H26.7604L26.4386 14.9537L25.6448 15.3954V16.225L24.0223 17.3963L24.1568 17.8969H24.4864L24.4 18.3734L24.1687 18.4589L24.1568 19.7036L25.5584 21.3015H26.1697L26.2062 21.2046H27.3041L27.6207 20.9119H28.2436L28.5853 21.2536L29.5113 21.3494L29.3895 22.5828L30.4208 24.4009L29.8771 25.4384L29.9136 25.926L30.3416 26.352V27.526L30.902 28.2802V29.2571H31.3854C28.6916 32.5666 24.5875 34.6843 19.9969 34.6843C11.9 34.6843 5.31296 28.0988 5.31296 20.001C5.31296 17.9629 5.73121 16.0203 6.48534 14.2551V13.7974L7.01035 13.1599C7.1926 12.8151 7.3879 12.4802 7.5968 12.1527L7.61923 12.4192L7.01035 13.1599C6.8213 13.5172 6.64426 13.8818 6.4855 14.2552V15.0901L7.0943 15.3838V16.5453L7.68023 17.5436L8.15684 17.6161L8.21776 17.2739L7.65788 16.4077L7.54698 15.5661H7.87667L8.01626 16.4333L8.8277 17.6161L8.6188 17.9989L9.13285 18.7874L10.4142 19.104V18.8973L10.9262 18.9697L10.8783 19.3354L11.2803 19.4094L11.9032 19.5786L12.7818 20.5801L13.9032 20.6645L14.0141 21.5796L13.2448 22.1161L13.2098 22.9333L13.099 23.4343L14.2094 24.8239L14.2943 25.3009C14.2943 25.3009 14.6969 25.4093 14.7469 25.4093C14.7949 25.4093 15.649 26.0572 15.649 26.0572V28.5697L15.9532 28.6561L15.7475 29.8145L16.2595 30.4989L16.1637 31.6489L16.8418 32.8385L17.7111 33.5979L18.5835 33.6155L18.6688 33.3333L18.0266 32.7928L18.0641 32.5251L18.1782 32.1948L18.2026 31.8594L17.7688 31.8468L17.55 31.5719L17.9105 31.224L17.9595 30.9626L17.5564 30.8469L17.5798 30.6032L18.1538 30.5157L19.0261 30.0968L19.3188 29.5583L20.2329 28.3874L20.0257 27.4718L20.3064 26.9843L21.149 27.0092L21.7163 26.5591L21.9002 24.7935L22.5314 23.9977L22.6423 23.4863L22.0693 23.3029L21.6906 22.6806L20.3979 22.6675L19.3719 22.2775L19.324 21.5457L18.9823 20.9473L18.0558 20.9343L17.5183 20.0931L17.0433 19.8614L17.0188 20.1176L16.1517 20.1686L15.8351 19.727L14.9314 19.5437L14.1871 20.4046L13.0157 20.2047L12.9303 18.8844L12.0762 18.738L12.4173 18.0906L12.3194 17.7188L11.1959 18.4692L10.4897 18.3828L10.2371 17.8307L10.3929 17.261L10.7819 16.5433L11.6783 16.0886H13.4106L13.4048 16.6167L14.0277 16.9067L13.9778 16.0046L14.4267 15.553L15.3324 14.9577L15.3954 14.54L16.2981 13.5999L17.258 13.0676L17.1737 12.9984L17.8242 12.3863L18.0622 12.4494L18.1711 12.5859L18.4185 12.3113L18.4795 12.2848L18.2087 12.2462L17.9321 12.1577V11.8921L18.0784 11.7729H18.3994L18.5477 11.8379L18.6748 12.0942L18.8306 12.0702V12.0483L18.8754 12.063L19.3255 11.9938L19.3895 11.7729L19.6452 11.838V12.0772L19.4062 12.2402H19.4078L19.4416 12.5027L20.2588 12.7532C20.2588 12.7532 20.2588 12.7563 20.2608 12.763L20.4472 12.7469L20.4603 12.3937L19.814 12.0994L19.7785 11.9297L20.3139 11.7474L20.3384 11.2344L19.7785 10.8932L19.7415 10.0266L18.9722 10.4047H18.6905L18.7655 9.74533L17.7176 9.49898L17.2858 9.82656V10.8234L16.5083 11.0704L16.1957 11.7198L15.8588 11.7739V10.9422L15.127 10.8406L14.7598 10.6015L14.6128 10.0629L15.9228 9.29734L16.5629 9.10195L16.6275 9.53265L16.9853 9.51341L17.0129 9.29726L17.3864 9.24351L17.3927 9.16801L17.2327 9.10187L17.1963 8.8738L17.6551 8.83522L17.9323 8.5472L17.9483 8.52584L17.9515 8.5269L18.0358 8.4394L18.9999 8.318L19.4254 8.67955L18.3077 9.27483L19.7306 9.61072L19.914 9.13472H20.5369L20.7556 8.72001L20.3161 8.61009V8.08509L18.9391 7.47516L17.9869 7.58508L17.4489 7.86525L17.4854 8.54917L16.9244 8.46371L16.838 8.08608L17.3765 7.59754L16.3995 7.5496L16.1193 7.63506L15.9975 7.96468L16.3636 8.0262L16.2907 8.39236L15.6689 8.42875L15.571 8.67306L14.6677 8.6979C14.6677 8.6979 14.6433 8.18588 14.6047 8.18588C14.5698 8.18588 15.3131 8.1729 15.3131 8.1729L15.8505 7.64842L15.5573 7.50211L15.1683 7.88073L14.5208 7.84426L14.126 7.30469H13.2963L12.4302 7.95109H13.2235L13.2948 8.18392L13.088 8.37862L13.9673 8.40361L14.1006 8.72032L13.1115 8.68385L13.0625 8.43955L12.4417 8.30509L12.111 8.12284L11.3709 8.12903C13.7954 6.36295 16.7756 5.31763 19.998 5.31763C23.7099 5.31763 27.1043 6.70517 29.6918 8.98584L29.5189 9.29734L28.8407 9.56285L28.5544 9.87329L28.621 10.2336L28.97 10.2826L29.1814 10.8086L29.7825 10.5654L29.8835 11.27H29.7001L29.2053 11.1967L28.6574 11.2882L28.1262 12.0393L27.3679 12.1576L27.2584 12.8075L27.5793 12.883L27.4855 13.3013L26.7313 13.1497L26.0407 13.3013L25.8937 13.6861L26.0126 14.494L26.4187 14.6836L27.1011 14.6795L27.5603 14.6378L27.702 14.2721L28.4208 13.3378L28.8928 13.4347L29.3583 13.0133L29.4458 13.3431L30.5917 14.1159L30.4521 14.305L29.9354 14.2774L30.1354 14.5586L30.4541 14.6294L30.827 14.4737L30.8187 14.0253L30.9854 13.9425L30.852 13.8013L30.0874 13.3747L29.8854 12.8087H30.5218L30.7229 13.0102L31.2729 13.4815L31.2948 14.0523L31.8624 14.656L32.073 13.8284L32.4667 13.6137L32.5386 14.2908L32.923 14.7122L33.6886 14.6997C33.8376 15.0805 33.9709 15.4674 34.0856 15.8632L34.0022 15.938ZM11.8829 9.58754C11.8829 9.58754 12.2037 9.53288 12.2318 9.53288C12.2583 9.53288 12.2318 9.85321 12.2318 9.85321L11.5073 9.89896L11.3697 9.7334L11.8829 9.58754ZM11.3709 8.87395V8.84693H11.6907L11.7198 8.737H12.2432V8.9656L12.0916 9.16605H11.3697V8.87388L11.3709 8.87395ZM30.6709 10.6484L30.6729 9.93377C30.925 10.2005 31.1667 10.4749 31.398 10.7598L31.1104 11.1885L30.1021 11.1785L30.0396 10.9687L30.6709 10.6484ZM32.9834 13.4412L33.075 13.337C33.1969 13.5734 33.3126 13.8125 33.4198 14.0567L33.2667 14.0504L32.9823 14.0895V13.4411L32.9834 13.4412ZM35.9949 19.8359C35.9907 19.3677 35.9669 18.9037 35.923 18.4458C35.774 16.9208 35.4104 15.4593 34.8626 14.0896C34.823 13.9886 34.7856 13.8849 34.7428 13.7839C34.0147 12.064 32.9917 10.4984 31.7417 9.14687C31.6605 9.05839 31.5772 8.97187 31.4938 8.88543C31.2563 8.64014 31.0156 8.39999 30.7626 8.17078C27.9188 5.58074 24.1402 4 20 4C15.8251 4 12.0193 5.60995 9.1672 8.23805C8.50261 8.85055 7.89222 9.52035 7.33755 10.236C5.24788 12.9401 4 16.3265 4 20C4 28.8218 11.1777 36 20 36C26.2064 36 31.5938 32.4458 34.2459 27.2677C34.8125 26.1626 35.2542 24.9823 35.5521 23.7449C35.6271 23.4323 35.6937 23.1157 35.75 22.7959C35.9115 21.8871 36 20.9526 36 19.999C35.998 19.9458 35.9949 19.8912 35.9949 19.8359Z"
                fill="#272C6E"
              />
              <circle
                cx="20"
                cy="20"
                r="18.5"
                stroke="#EF4344"
                stroke-width="2"
              />
            </svg>
          </span>
          rk
          <span>
            <h1 className="ml-3 desktop:ml-6">Maestro</h1>
          </span>
        </h1>
        <p className="font-openSans text-charcoal text-md desktop:text-xl">
          Crafting Excellence, Inspiring Homes
        </p>
      </div>

      {/* Hornware Magic Section */}
      <div className="mb-16">
        <h2 className="font-outfit text-secondary-blue text-2xl mb-6">
          Hornware Magic: A Glimpse from Our Expo
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <Image
            src={"/expo.jpeg"}
            objectFit="contain"
            width={1000}
            height={1000}
            className="rounded-2xl desktop:w-1/2 shadow-md"
            onMouseEnter={(e) => hoverAnimation(e.currentTarget)}
            onMouseLeave={(e) => leaveAnimation(e.currentTarget)}
          />
          <div className="md:w-1/2">
            <p className="font-openSans leading-loose tracking-wide text-charcoal">
              We showcased our latest collection of handcrafted homeware at Expo
              Mart, featuring a stunning blend of contemporary design and
              timeless elegance. This event wasn't just about products - it was
              a chance to connect with design enthusiasts and share the passion
              behind each meticulously crafted piece. As we continue to inspire
              at these prestigious events, we remain committed to enriching
              homes with exceptional decor and signature style.
            </p>
          </div>
        </div>
      </div>

      {/* Our Skilled Artisans Section */}
      <div className="mb-16">
        <h2 className="font-outfit text-secondary-blue text-2xl mb-6">
          Our Skilled Artisans
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/artisans/1.jpg",
            "/artisans/2.jpg",
            "/artisans/3.jpeg",
            "/artisans/4.jpeg",
          ].map((src, index) => (
            <Image
              key={index}
              src={src}
              objectFit="fit"
              width={1000}
              height={1000}
              className="bg-white aspect-square shadow-md rounded-lg"
              onMouseEnter={(e) => hoverAnimation(e.currentTarget)}
              onMouseLeave={(e) => leaveAnimation(e.currentTarget)}
            />
          ))}
        </div>
      </div>

      {/* Why Choose Artwork Maestro Section */}
      <div className="mb-16">
        <h2 className="font-outfit text-secondary-blue text-3xl mb-6">
          Why Choose Artwork Maestro?
        </h2>
        <div
          ref={chooseUsSectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6"
              onMouseEnter={(e) => {
                gsap.to(e.target, { scale: 1.05, duration: 0.3 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, { scale: 1, duration: 0.3 });
              }}
              onClick={(e) => {
                gsap.to(e.target, { scale: 0.95, duration: 0.2 });
                gsap.to(e.target, { scale: 1, duration: 0.2, delay: 0.2 });
              }}
            >
              <h3 className="font-outfit flex items-center gap-3 tracking-wide text-secondary-blue text-xl mb-2">
                <span className="text-primary-red">{section.icon}</span>
                <span>{section.title}</span>
              </h3>
              <p className="font-openSans px-10 leading-snug text-xs tracking-wide text-charcoal">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Handcrafted Home Decor Section */}
      <div className="mb-16">
        <h2 className="font-outfit text-secondary-blue text-3xl mb-4">
          Handcrafted Home Decor - Your Way
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <p className="font-openSans leading-loose tracking-wide text-charcoal">
              We offer a vast selection of the latest home decor, with endless
              possibilities for customization. Whether you prefer a specific
              size or a design tailored to your vision, we can create unique
              pieces that perfectly complement your space. Simply choose from
              our catalog or share your ideas - we'll provide a quick quote and
              bring your dream decor to life.
            </p>
          </div>
          <div className="md:w-1/3">
            <div
              className="bg-white shadow-md w-full h-48 rounded-lg"
              onMouseEnter={(e) => hoverAnimation(e.currentTarget)}
              onMouseLeave={(e) => leaveAnimation(e.currentTarget)}
            ></div>
          </div>
        </div>
      </div>

      {/* Your Vision, Our Craftsmanship Section */}
      <div>
        <h2 className="font-outfit text-secondary-blue text-3xl mb-4">
          Your Vision, Our Craftsmanship
        </h2>
        <p className="font-openSans leading-loose tracking-wide text-charcoal mb-6">
          We specialize in tailor-made handcrafted products. Tell us your ideas
          and specifications, and we'll develop unique pieces that meet your
          exact needs. No matter the market you cater to, we can create
          something special, just for you.
        </p>
        <div
          className="bg-white shadow-md w-full h-64 rounded-lg"
          onMouseEnter={(e) => hoverAnimation(e.currentTarget)}
          onMouseLeave={(e) => leaveAnimation(e.currentTarget)}
        ></div>
      </div>
    </div>
  );
};

export default AboutUs;
