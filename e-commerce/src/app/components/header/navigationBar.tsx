import React from "react";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";



const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <img src="" alt="" />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/home">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <p>Login</p>
                </Link>
              </li>
              <li>
                <Link href="/registration">
                  <p>Registration</p>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                 <p> <BsCart4/> </p>
                </Link>
              </li>
            </ul>
            <button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;