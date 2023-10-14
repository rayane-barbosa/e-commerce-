import React from "react";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { GrHomeRounded } from "react-icons/gr";


const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0 flex items-center justify-center">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/home">
                  <p> <GrHomeRounded/> Home </p>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <p> <VscAccount/> My Account</p>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <p> <BsCart4 /> Cart </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;