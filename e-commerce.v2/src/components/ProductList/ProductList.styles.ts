import styled from "styled-components";
import { media } from "../../styles/responsive";

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px 0;

  ${media.medium`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.small`
    grid-template-columns: 1fr;
  `}
`;

export const ProductCard = styled.div`
  border: 1px solid #f8f9fa;
  padding: 20px;
`;
