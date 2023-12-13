import React from "react";
import NavBar from "../../molecules/NavBar/NavBar";
import * as Styled from "./Header.styles";
import { ImageLogo } from "@/components/atoms/ImageLogo/ImageLogo";

export const Header = () => {
  return (
    <Styled.HeaderContainer>
      <header>
        <Styled.HeaderNavigation>
          <ImageLogo />
          <nav>
            <NavBar />
          </nav>
        </Styled.HeaderNavigation>
      </header>
    </Styled.HeaderContainer>
  );
};
//
