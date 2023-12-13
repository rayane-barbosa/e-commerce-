import styled from "styled-components";
import { media } from "../../styles/responsive";

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10rem;
  border: 10px solid #ccc;
  width: 75rem;
  height: 75rem;

  img {
    width: 50rem;
    height: 50rem;
    padding: 5rem;
  }

  ${media.medium`
    padding: 0 5rem;
    width: 50rem;
    height: 50rem;
    margin: 0 5rem;

  `}

  ${media.small`
    padding: 0 2rem;
    width: 25rem;
    height: 25rem;
    margin: 0 2rem;
  `}
`;

export const ProductDetailsText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  margin: 5rem 0;
  width: 50%;
  height: 50%;
  font-size: 2rem;
  color: #544581;
  font-weight: bold;

  ${media.medium`
    font-size: 1.5rem;
  `}

  ${media.small`
    font-size: 1rem;
  `}
`;

export const ProductDetailsButton = styled.button`
  border-radius: 1.5rem;
  width: 50%;
  height: 5rem;
  background-color: #544581;
  color: #fff;
  font-size: 2rem;
  margin-top: 2rem;
  cursor: pointer;
  font-size: 2rem;

  &:hover {
    background-color: #70465a;
  }
`;
