'use client'
import React from "react";
import Image from "next/image";


function Logo() {
  return (
    <div>
      <Image src="/Logo.svg" alt="Logo" width={120} height={0}></Image>
    </div>
  );
}

export default Logo;
