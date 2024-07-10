import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav
      className="sm: bg-white w-full h-20 flex items-center justify-between px-8 py-4 border-b-[1px] border-charcoal lg:  ">
      <Link href="/">
        <Image src="/Logo.svg" alt="Logo" width={110} height={0}></Image>
      </Link>
    </nav>
  );
}

export default Navbar;
