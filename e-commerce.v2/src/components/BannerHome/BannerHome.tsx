import React from "react";
import { BannerWrapper } from "./BannerHome.styles";
import tea from "../../../public/tea.avif";
import Image from "next/image";

const BannerHome: React.FC = () => {
  return (
    <BannerWrapper>
      <Image
        src={tea}
        alt="Banner"
        layout="responsive"
        width={1200}
        height={800}
      />
    </BannerWrapper>
  );
};

export default BannerHome;
