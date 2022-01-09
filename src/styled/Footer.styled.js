import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin: 16vh auto 0;

  
  .footer-nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 4fr)); 
  }

  .footer-nav-column {
    width: 100%;
    margin-bottom: 4vh;
  }

  .footer-nav-column > small {
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .footer-nav-column li {
    font-weight: 600;
    margin-bottom: 24px;
  }

  .footer-nav-column li:first-child {
    margin-top: 24px;
  }
  .footer-copyright {
    font-size: 12px;
    text-align: center;
    margin: 0 1vw 30px;
  }
`;
