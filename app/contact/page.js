import React from "react";
import Navbar from "../Components/Navbar";
import Marquee from "../Components/Marquee";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Head from "next/head";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Artwork Maestro - Get in Touch</title>
        <meta
          name="description"
          content="Contact Artwork Maestro for inquiries, collaborations, or feedback. We'd love to hear from you!"
        />
        <link rel="canonical" href="https://www.artworkmaestro.com/contact" />
        <meta name="keywords" content="contact artwork maestro, get in touch, inquiries, collaborations, feedback" />
      </Head>
      <Marquee />
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;