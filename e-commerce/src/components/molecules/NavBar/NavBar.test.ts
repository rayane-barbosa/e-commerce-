import styled from "styled-components";
import px2vw from "@/utils/px2vw";

export const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${px2vw(500)};
  min-height: ${px2vw(20)};
  padding: ${px2vw(10)};
  margin: ${px2vw(5)};
  background-color: #1f221d;
  font-size: 1rem;

  &:hover {
    background-color: #a9a9a9;
    color: white;
  }

  li {
    list-style-type: none;
  }
`;
