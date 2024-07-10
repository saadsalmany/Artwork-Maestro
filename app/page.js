import React from "react";
import Navbar from "./Components/Navbar";
import LocomotiveWrapper from "./Components/LocomotiveWrapper";

function page() {
  return (
    <main className="w-full h-screen">
      <LocomotiveWrapper>

      <Navbar />
      <div className="w-full h-screen bg-secondary-blue"></div>
      <div className="w-full h-screen bg-primary-red"></div>
      </LocomotiveWrapper>
    </main>
  );
}

export default page;
