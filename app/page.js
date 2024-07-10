import React from "react";
import Navbar from "./Components/Navbar";
import LocomotiveWrapper from "./Components/LocomotiveWrapper";

function page() {
  return (
    <main className="w-full h-screen">

      <Navbar />
      <div className="w-full h-screen bg-secondary-blue"></div>
      <div className="w-full h-screen bg-primary-red"></div>
    </main>
  );
}

export default page;
