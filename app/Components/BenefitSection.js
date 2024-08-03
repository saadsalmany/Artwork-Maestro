import React from 'react'
import Image from 'next/image'

function BenefitSection() {
  return (
    <div className="bg-gray-800 text-white py-16 px-4 tablet:px-8 desktop:px-16">
      <div className="max-w-6xl mx-auto mobile:p-5 mobile:pt-0">
        <div className="desktop:flex desktop:gap-8">
          <div className="desktop:w-2/3">
            <h2 className="text-[7.5vw] font-outfit tracking-wide leading-snug tablet:text-4xl font-bold mb-6  desktop:mt-10
            desktop:leading-tight desktop:text-4xl desktop:mb-8">
              Discover the Benefits of Handmade Products for 
              <span className="text-yellow-300"> Lasting Durability</span> and
              <span className="text-white"> Unique Craftsmanship</span>
            </h2>
            <p className="mb-10 text-white font-normal text-sm desktop:text-base desktop:mb-12 opacity-80">
              Owning a handmade product means owning a piece of history - a 
              unique creation that tells a story and becomes a cherished part of your 
              home for generations to come.
            </p>
          <div className=" desktop:hidden mobile:block tablet:block w-[81vw] mb-10">
            <Image
              src="/BenefitImage.png"
              alt="Handmade crafts"
              width={500}
              height={400}
              className="rounded-desktop shadow-desktop object-cover w-full h-full mt-10 desktop:mt-0"
            />
          </div>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Durability</h3>
                <ul className="list-disc list-inside text-white opacity-80">
                  <li>Naturally Strong Material</li>
                  <li>Lasts for Generations</li>
                  <li>Easy Maintenance</li>
                  <li>Resistant to Temperature Changes</li>
                  <li>Naturally Antibacterial</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Benefits</h3>
                <ul className="list-disc list-inside text-white opacity-80">
                  <li>Natural Insulation</li>
                  <li>Enhanced Taste</li>
                  <li>Elegant Appeal</li>
                  <li>Sustainable Choice</li>
                  <li>Conversation Starter</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" mobile:hidden desktop:flex tablet:hidden mt-9 desktop:w-1/3">
            <Image
              src="/BenefitImage.png"
              alt="Handmade crafts"
              width={500}
              height={400}
              className="rounded-desktop shadow-desktop object-cover w-full h-full mt-10 desktop:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitSection