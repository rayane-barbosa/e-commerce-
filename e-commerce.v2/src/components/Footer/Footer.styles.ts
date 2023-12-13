import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  background-color: #f569d6;
  padding: 10px 0;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  gap: 10px;
`;

export const Column = styled.div`
  flex: 1;
  border: 1px solid #fff;
  padding: 10px;
`;
export const Logo = styled.h1`
  font-size: 2rem;
  color: #200208;
`;

export const Slogan = styled.p`
  font-size: 1.5rem;
`;

export const Info = styled.p`
  font-size: 1.2rem;

  margin: 10px 0;
`;

export const Links = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
  font-size: 1.2rem;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const Contacts = styled.div`
  padding: 10px;
`;
