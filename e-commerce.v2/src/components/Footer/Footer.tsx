import React from "react";
import {
  Column,
  Contacts,
  FooterWrapper,
  Info,
  Links,
  Logo,
  Slogan,
} from "./Footer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Column>
        <Logo>ArtTeaBox.com</Logo>
        <Slogan>"Descubra o mundo em cada xícara."</Slogan>
        <Info>Endereço, etc.</Info>
      </Column>
      <Column>
        <Links>
          <a href="/">Home</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
          {/* Add more links as needed */}
        </Links>
      </Column>
      <Column>
        <Contacts>
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </Contacts>
      </Column>
    </FooterWrapper>
  );
};

export default Footer;
