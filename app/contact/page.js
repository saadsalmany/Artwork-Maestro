import React from "react";
import Navbar from "../Components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen pt-56 text-3xl bg-slate-100" >
        <h1 className="text-center text-secondary-blue">
          This is the Contact page
        </h1>
      </div>
    </>
  );
}

export default Contact;
