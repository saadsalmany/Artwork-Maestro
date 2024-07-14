import React from 'react'
import Image from 'next/image'

function BenefitSection() {
  return (
    <div className="bg-gray-800 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto mobile:p-5">
        <h2 className="text-3xl  tablet:text-4xl font-bold mb-8">
          Discover the Benefits of Handmade Products for 
          <span className="text-yellow-300"> Lasting Durability</span> and 
          <span className="text-white"> Unique Craftsmanship</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <p className="mb-6 text-blue-100 tracking-wide">
              Owning a handmade product means owning a piece of history - a 
              unique creation that tells a story and becomes a cherished part of your 
              home for generations to come.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Durability</h3>
                <ul className="list-disc list-inside text-white">
                  <li>Superior build quality</li>
                  <li>Timeless designs</li>
                  <li>Easy maintenance</li>
                  <li>Resistant to wear and tear</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Benefits</h3>
                <ul className="list-disc list-inside text-white">
                  <li>Unique aesthetics</li>
                  <li>Supports artisans</li>
                  <li>Eco-friendly choices</li>
                  <li>Personalized touch</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <Image 
              src="/BenefitImage.png" 
              alt="Handmade crafts" 
              width={500} 
              height={400} 
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitSection