import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 50px;
  border: none;
  cursor: pointer;
  padding: 15px 60px;
  font-size: 20px;
  font-weight: 600;
  font-family: "Nunito Sans", sans-serif;
  
  background-color: #14ae9c;

  &:hover{
      opacity:.9;
      transform: scale(0.98);
  }
  @media (max-width: 576px) {
    padding: 12px 34px;
  font-size: 16px;
  }
`