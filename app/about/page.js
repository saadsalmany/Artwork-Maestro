import React from "react";
import Marquee from "../Components/Marquee";
import Navbar from "../Components/Navbar";
import About from "../Components/AboutUs";
import Footer from "../Components/Footer";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Artwork Maestro - About Us</title>
        <meta
          name="description"
          content="Learn about Artwork Maestro's story, mission, and values. Discover how we're revolutionizing the art world."
        />
        <link rel="canonical" href="https://www.artworkmaestro.com/about" />
        <meta name="keywords" content="artwork maestro, about us, our story, mission, values" />
      </Head>
      <div className="bg-white">
        <Marquee />
        <Navbar />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;