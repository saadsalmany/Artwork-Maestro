import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Marquee from "../Components/Marquee";
import Footer from "../Components/Footer";
import AnimatedLogo from "../Components/AnimatedLogo";

function About() {
  return (
    <>
      <Marquee/>
      <Navbar />
      <div className="w-full py-40 text-lg bg-slate-100">
      <AnimatedLogo/>
        <h1 className="text-center text-secondary-blue text-3xl mb-10">
          About Us
        </h1>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-secondary-blue text-2xl mb-4">
                Who we are?
              </h2>
              <p>
                Award-winning Artwork Maestro crafts and exports all types of
                handcrafted items. From home decor like boxes and trays to
                handmade jewelry and hornware like mugs and spoons, we use
                high-quality materials to create beautiful and functional
                pieces. Our commitment to quality has earned us recognition
                from the Indian Government and a loyal worldwide customer
                base.
              </p>
              <Image
                src="/images/hornware-magic.jpg"
                alt="Hornware Magic"
                width={500}
                height={300}
              />
            </div>
            <div>
              <h2 className="text-secondary-blue text-2xl mb-4">
                Hornware Magic: A Glimpse from Our Expo
              </h2>
              <p>
                We showcased our latest collection of handcrafted homeware at
                Expo Mart, featuring a stunning blend of contemporary design
                and timeless elegance. This event wasn't just about products -
                it was a chance to connect with design enthusiasts and share the
                passion behind each meticulously crafted piece. As we continue
                to inspire at these prestigious events, we remain committed to
                enriching homes with exceptional decor and signature style.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-secondary-blue text-2xl mb-4">
              Our skilled artisans
            </h2>
            <p>
              We offer a vast selection of the latest home decor, with endless
              possibilities for customization. Whether you prefer a specific
              size or a design tailored to your vision, we can create unique
              pieces that perfectly complement your space. Simply choose from
              our catalog or share your ideas - we'll provide a quick quote and
              bring your dream decor to life.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-secondary-blue text-2xl mb-4">
              Why Choose Artwork Maestro?
            </h2>
            <ul>
              <li>Unique Charm</li>
              <li>Modern Appeal</li>
              <li>Unmatched Distinction</li>
              <li>Quality Uncompromised</li>
              <li>Customer-Centric</li>
            </ul>
          </div>
          <div className="mt-10">
            <h2 className="text-secondary-blue text-2xl mb-4">
              Get in Touch
            </h2>
            <p>
              Thank You and Best Regards From <br />
              Owner - Shahzaib Alam <br />
              Manager - Altmash Alam <br />
              Location: Area Mangal Pura Takhiya Colony, Sarai Tarin District
              Sambhal 244303 Moradabad, Uttar Pradesh, India <br />
              Email:{" "}
              <a href="mailto:artworkmaestro@gmail.com">
                artworkmaestro@gmail.com
              </a>
              ,{" "}
              <a href="mailto:artworkmaestro@yahoo.com">
                artworkmaestro@yahoo.com
              </a>
              <br />
              Phone: +91 752861066, +91 9045067866, +91 8791526817
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;