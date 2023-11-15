import styled from "styled-components";

export const ImageLogo = styled.image`
  object-fit: contain;
  object-position: center;
  border-radius: 30%;
  border: 10px solid #fff;
  display: block;

  @media (max-width: 240px) {
    width: 25%;
    height: 25%;
    border: 10px solid red;
  }
  @media (max-width: 320px) {
    width: 25%;
    height: 25%;
    border: 10px solid red;
  }
  @media (max-width: 480px) {
    width: 25%;
    height: 25%;
    border: 10px solid red;
  }
  @media (max-width: 768px) {
    width: 25%;
    height: 25%;
    border: 10px solid red;
  }

  @max-width (max-1024) {
    width: 25%;
    height: 25%;
    border: 10px solid red;
  }
`;
