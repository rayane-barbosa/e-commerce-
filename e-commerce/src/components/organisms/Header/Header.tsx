import React from "react";
import Navbar from "../../molecules/Nav_Bar/navigationBar";
import * as Styled from "./Header.styles";
import { Image_Logo } from "@/components/atoms/Image_Logo/Image_Logo";

export const Header = () => {
  return (
    <Styled.HeaderContainer>
      <header>
        <Styled.HeaderNavigation>
          <Image_Logo />
          <nav>
            <Navbar />
          </nav>
        </Styled.HeaderNavigation>
      </header>
    </Styled.HeaderContainer>
  );
};
//
