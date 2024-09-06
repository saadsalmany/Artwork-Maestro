import React from "react";
import Navbar from "../Components/Navbar";
import Marquee from "../Components/Marquee";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

// export const Metadata = {
//   title: 'Artwork Maestro | Contact Us',
//   description: 'Have any query about your order? Send a message',
//   alternates: {
//     canonical: 'https://artworkmaestro.com/contact',
//   },
// };

function page() {
  return (
    <>
      <Marquee/>
      <Navbar />
      <Contact/>
      <Footer/>
    </>
  );
}

export default page;
