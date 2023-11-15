import React, { useState } from "react";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { HeaderNavigation } from "../../organisms/Header/Header.styles";

const Navbar = () => {
  let [user, setUser] = useState("not logged in");

  const handleLogin = () => {
    setUser("logged in");
  };

  const handleLogout = () => {
    setUser("not logged in");
  };

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
            {user === "not logged in" ? (
              <button onClick={handleLogin}> Login </button>
            ) : (
              <button onClick={handleLogout}> Logout </button>
            )}
            <li>
              {user !== "not logged in" ? (
                <Link href="/myAccount">
                  <button>
                    {" "}
                    <VscAccount /> My Account{" "}
                  </button>
                </Link>
              ) : (
                <></>
              )}
            </li>
          </li>
          <li></li>

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
