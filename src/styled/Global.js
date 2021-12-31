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
  }
  
  body{
      background-color: #1e2631;
      color:#fff;
  }
 
  
`