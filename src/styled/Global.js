import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  ul{
      list-style: none;
  }

  a{
      text-decoration: none;
      cursor: pointer;
      color: #fff;
  }
  
  body{
      font-family: "Nunito Sans", sans-serif;
      background-color: #1e2631;
      color:#fff;
  }

  input, textarea {
    color: #fff;
    border: 0;
    border-radius: 0;
    outline: 0;
    background-color: transparent;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    overflow: visible;
}



button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
  
  .global-link {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .global-image{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

 
  
`;
