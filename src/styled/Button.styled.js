import styled from "styled-components";

export const StyledButton = styled.button`
display: inline-block;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  padding: 15px 60px;
  font-size: 20px;
  font-weight: 600;
  font-family: "Nunito Sans", sans-serif;
  text-align: center;
  position: relative;
  z-index: 0;
  transition: all .15s ease;
  background-color: #14ae9c;
  outline: 0;
  color:#fff;

  &:hover{
      opacity:.9;
      transform: scale(0.98);
  }
  @media (max-width: 576px) {
    padding: 12px 34px;
  font-size: 16px;
  }
`