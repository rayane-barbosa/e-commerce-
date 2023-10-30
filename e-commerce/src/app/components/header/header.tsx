import React from "react";
import Navbar from "./navigationBar";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";
import * as Styled from "./header-styles";

const altLogo = "Logo";

export const Header = () => {
  return (
    <Styled.HeaderContainer>
      <header>
        <Image src={logo} alt={altLogo} width={100} height={100} />
        <Styled.HeaderNavigation>
          <nav>
            <Navbar />
          </nav>
        </Styled.HeaderNavigation>
      </header>
    </Styled.HeaderContainer>
  );
};
