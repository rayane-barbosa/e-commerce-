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
  max-width: 500px;
  height: 15rem;
  align-items: center;
  padding: 3.5rem;
  background-color: #c1a891;
  border-radius: 8px;

  ${media.medium`
    width: 100%;
  `}

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
  margin: 0.5rem 0;
`;

export const Button = styled.button`
  border-radius: 4px;
  width: 50%;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #544581;
  color: white;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  align-self: center;

  &:hover {
    background-color: #70465a;
  }
`;
