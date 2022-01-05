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

 
  
`