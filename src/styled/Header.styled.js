import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #1e2631;
  background: rgb(255, 255, 255);
  background: linear-gradient(rgb(72, 0, 72, 0.8), rgba(2, 0, 36, 1)),
    url("https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg");
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-size: 78px;
    font-style: italic;
    font-weight: 500;
    font-family: "EB Garamond", serif;
    line-height: 1.2;
    padding: 3rem 0;
  }

  p {
    font-size: 28px;
    
    line-height: 1.65;
    margin-bottom: 3rem;
  }
  @media (max-width: 768px) {
    h1,p {
      width: 90%;
    }
  }
  @media (max-width: 576px) {
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
