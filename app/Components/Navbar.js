import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav
      className="w-full bg-white h-20 flex items-center justify-between px-8 py-4 border-b-[1px] border-charcoal lg:px-36 ">
      <Link href="/">
        <Image src="/Logo.svg" alt="Logo" width={120} height={0}></Image> 
      </Link>
    </nav>
  );
}

export default Navbar;
