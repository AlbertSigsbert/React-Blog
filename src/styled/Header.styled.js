import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin-bottom: 4rem;
  h1 {
    font-size: 78px;
    font-style: italic;
    font-weight: 500;
    font-family: "EB Garamond", serif;
    line-height: 1.2;
    padding: 3rem 0;
    width: 85%;
  }

  p {
    width: 80%;
    font-size: 28px;
    line-height: 1.65;
    margin-bottom: 3rem;
  }

  
/* ----------- iPad Pro ----------- */
/* Portrait and Landscape */
@media only screen 
  and (min-width: 1024px) 
  and (max-height: 1366px) 
  and (-webkit-min-device-pixel-ratio: 1.5) {
    height: auto;
}
  @media (max-width: 992px) {
    height: auto;
    h1,p {
      width: 90%;
    }
  }

  @media (max-width: 576px) {
    height: auto;
   

    h1 {
      font-size: 42px;
      line-height: 1;
      padding: 2rem 0;
    }
    p {
      font-size: 22px;
      width: 100%;
    }
  }
`;
