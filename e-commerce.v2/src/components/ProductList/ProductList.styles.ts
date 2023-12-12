import styled from "styled-components";
import { media } from "../../styles/responsive";
import Link from "next/link";

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  gap: 20px;
  margin: 20px 0;

  ${media.medium`
    grid-template-columns: 3fr;
  `}

  ${media.small`
    grid-template-columns: 1fr;
    
  `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4c6432;
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #4c6432;
  }
`;

export const ProductCard = styled.div`
  border: 2px solid #4c6432;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  justify-self: center;
  text-align: center;

  &:hover {
    border: 2px solid #4c6432;
    box-shadow: 0 0 10px #4c6432;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
