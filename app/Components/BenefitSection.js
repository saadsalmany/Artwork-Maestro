import React from "react";
import Image from "next/image";

function BenefitSection() {
  return (
    <div className="bg-zinc-100 py-16 px-4 tablet:px-8 desktop:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl leading-snug desktop:text-4xl font-outfit font-medium text-secondary-blue text-center mb-6">
          Where Nature Meets Artistry
        </h2>
        <p className="text-center desktop:text-lg tracking-wider font-outfit mb-12">
          <span className="text-green-600">Sustainable.</span>{" "}
          <span className="text-red-600">Durable.</span>{" "}
          <span className="text-yellow-600">Flavor-Enhancing.</span>
        </p>
        <div className="grid grid-cols-1 tablet:grid-cols-1 desktop:grid-cols-4 gap-2 desktop:gap-0 desktop:pt-10 desktop:pb-12">
          <BenefitItem
            icon="/durable.svg"
            title="Durability"
            altText="durable-icon 1.svg"
          />
          <BenefitItem
            icon="/taste.svg"
            title="Enhanced Taste"
            altText="enhancedTaste.svg"
          />
          <BenefitItem
            icon="/historyViking.svg"
            title="Historical Connection"
            altText="Historical connection icon"
          />
          <BenefitItem
            icon="/sustainable.svg"
            title="Sustainable Choice"
            altText="Sustainable choice icon"
          />
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ icon, title, altText }) {
  return (
    <div className="flex flex-col items-center mb-8 desktop:mb-0">
      <div className="w-32 h-32 bg-white rounded-full flex items-center  shadow-md justify-center mb-3 hover:scale-110 transition-transform duration-300 ease-in-out">
        <Image src={icon} alt={altText} width={70} height={70} />
      </div>
      <p className="text-center text-charcoal font-outfit text-sm">{title}</p>
    </div>
  );
}

export default BenefitSection;
