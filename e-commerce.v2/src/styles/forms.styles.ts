import styled from "styled-components";
import { media } from "./responsive";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 2.5rem;
  background-color: #c1a891;
  border-radius: 8px;

  ${media.small`
    width: 100%;
  `}

  p {
    color: red;
    font-size: 0.8rem;
    margin: 0.3rem 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #544581;
  color: white;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
