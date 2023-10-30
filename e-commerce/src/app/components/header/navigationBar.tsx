import React from "react";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { HeaderNavigation } from "./header-styles";

const Navbar = () => {
  return (
    <HeaderNavigation>
      <nav>
        <ul>
          <li>
            <Link href="/home">
              <button> Home </button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <button> About </button>
            </Link>
          </li>
          <li>
            <Link href="/myAccount">
              <button>
                {" "}
                <VscAccount /> My Account{" "}
              </button>
            </Link>
          </li>

          <li>
            <Link href="/cart">
              <button>
                {" "}
                <BsCart4 /> Cart{" "}
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderNavigation>
  );
};

export default Navbar;
