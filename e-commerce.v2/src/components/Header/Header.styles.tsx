import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #f569d6;
  padding: 10px 0;
  text-decoration: none;
`;

export const Nav = styled.nav`
  width: 80%;
  margin: 0 auto;
  text-decoration: none;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #333;

  &:hover {
    color: #0070f3;
  }
`;
