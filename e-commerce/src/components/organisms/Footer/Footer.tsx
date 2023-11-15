import React from "react";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram, LuFacebook } from "react-icons/lu";
import * as Styled from "./Fotter.styles";
import { Image_Logo } from "@/components/atoms/Image_Logo/Image_Logo";

export const FooterPage = () => {
  return (
    <footer>
      <Styled.FooterContainer>
        <Styled.FooterAbout>
          <div>
            <Image_Logo />
            <p>We love cats as much as you do.</p>
            <p>Address Lorem ipsum dolor sit</p>
            <p>Phone 123 456 789</p>
            <p>About Us</p>
          </div>
        </Styled.FooterAbout>
        <Styled.FooterLinks>
          <div>
            <div>
              <h2> Links</h2>
              <ul>
                <li>
                  <p> Home</p>
                </li>
                <li>
                  <p> About</p>
                </li>
                <li>
                  <p> Contact</p>
                </li>
                <li>
                  <p> Blog</p>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </Styled.FooterLinks>
        <Styled.FooterSocial>
          <div>
            <div>
              <h2> Social</h2>
              <ul>
                <li>
                  <p>
                    {" "}
                    <FaTwitter /> Twitter
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <LuInstagram /> Instagram
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <LuFacebook /> Facebook
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </Styled.FooterSocial>
        <Styled.FooterCredits>
          <p> © 2023 Cat's Meow </p>
        </Styled.FooterCredits>
      </Styled.FooterContainer>
    </footer>
  );
};
