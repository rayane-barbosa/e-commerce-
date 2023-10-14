import React from "react";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { GrHomeRounded } from "react-icons/gr";


const Navbar = () => {
  return (
    <>      
        <div style={{ width: '100%', height: '30%', padding: 10, background: '#fff', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div style={{justifyContent: 'center',  alignItems: 'flex-start', gap: 24 , display: 'inline-flex' }}  >
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/home">
                  <p> <GrHomeRounded /> Home </p>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <p> <VscAccount /> My Account</p>
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
      
    </>
  );
};

export default Navbar;