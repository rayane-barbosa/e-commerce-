import React from "react";
import Navbar from "./navigationBar";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";

const altLogo = "Logo";

export const Header = () => {
  return (
    <header className="header">
      <Image src={logo} alt={altLogo} width={100} height={100} />
      <Navbar />
      <hr />
    </header>
  );
};
