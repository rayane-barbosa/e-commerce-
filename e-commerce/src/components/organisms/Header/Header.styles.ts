import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #21211d;
  color: #fff;
  padding: 30px 30px 30px 30px;
  display: flex;

  li {
    list-style: none;
    display: inline-block;
  }
  button {
    background-color: #21211d;
    border: none;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    margin: 0 20px 0 20px;
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
