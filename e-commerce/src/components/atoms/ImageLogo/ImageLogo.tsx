import React from "react";
import logo from "../../../../public/logo.jpg";
import * as Styled from "./ImageLogo.styles";
import Image from "next/image";

const altLogo = "Logo";

export const ImageLogo: React.FC = () => {
  return (
    <>
      <Styled.ImageLogo>
        <Image src={logo} alt="logo" width={100} height={100} />
      </Styled.ImageLogo>
    </>
  );
};
