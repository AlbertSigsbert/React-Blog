import styled from "styled-components";

export const StyledAuthorsHeader = styled.section`
  max-width: 1360px;
  margin: 3vh auto 10vh;
  text-align: center;

  h1 {
    margin: 0 auto 10vh;
    font-size: 98px;
    font-family: "EB Garamond", serif;
    font-weight: 400;
    width: 100%;

    span {
      font-style: italic;
    }
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    h3 {
      font-size: 42px;
      display: block;
      width: 100%;
      margin-top: 8vh;
      margin-bottom: 3vh;
      text-align: center;

      span {
        font-style: italic;
        font-family: "EB Garamond", serif;
        font-weight: 400;
      }
    }
  }
  @media (max-width: 1280px) {
    h1 {
      margin-bottom: 6vh;
      font-size: 74px;
    }
    .flex-container {
      h3 {
        margin-top: 4vh;
      }
    }
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 68px;
    }
    .flex-container {
      h3 {
        font-size: 34px;
      }
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 62px;
    }
    .flex-container {
      h3 {
        display: none;
      }
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 48px;
    }
   
  }
`;
