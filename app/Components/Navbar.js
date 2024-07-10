import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className=" bg-slate-300 w-full h-20 flex items-center justify-between px-8 py-4 border-b-1 border-charcoal">
      <Link href="/">
        <Image src="/Logo.svg" alt="Logo" width={75} height={25}></Image>
      </Link>
    </nav>
  );
}

export default Navbar;
