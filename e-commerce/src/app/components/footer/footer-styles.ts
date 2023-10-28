import styled from "styled-components";

export const FooterContainer = styled.footer`
  justify-content: space-around 10px;
  height: 280px;
  background-color: #21211d;
  color: #fff;
  padding: 30px 30px 30px 30px;

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
  }
  li {
    list-style: none;
    justify-content: space-between;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . ."
    ". . ."
    ". Footer .";
`;

export const FooterAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    padding-top: 5px;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding-top: 10px;
  }
  p {
    padding-top: 10px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding-top: 10px;
  }
  p {
    padding-top: 10px;
  }
`;

export const FooterCredits = styled.div`
  grid-template-areas:
    ". . ."
    ". . ."
    ". Creditos .";
  grid-area: Footer;
`;
