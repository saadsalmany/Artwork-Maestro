import React from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import PrimaryBtn from "./PrimaryBtn";

function Navbar() {
  return (
    <nav className="w-full bg-white h-20 flex items-center justify-between px-8 py-4 border-b-[1px] border-charcoal lg:px-36 ">
      <Link href="/">
        <Logo />
      </Link>

    </nav>
  );
}

export default Navbar;
