import React from 'react'
import ProductShowcase from '../Components/ProductsShowcase'
import Marquee from '../Components/Marquee'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function page() {
  return (
    <div className='bg-zinc-100'>
      <Marquee/>
      <Navbar/>
      <ProductShowcase/>
      <Footer/>
    </div>
  )
}

export default page