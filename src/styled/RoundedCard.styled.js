import styled from "styled-components";

export const StyledRoundedCard = styled.div`
  flex: 1 0 33.333%;
  box-sizing: border-box;
  max-width: 460px;
  padding: 0 1vw 5vh;

  a {
    display: inline-flex;
    transition: transform 0.2s ease;

    img {
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 100%;
      border-style: none;
    }
  }

  h2 {
    font-family: "EB Garamond", serif;
    font-weight: 400;
    font-size: 48px;
    line-height: 1.1;
    max-width: 400px;
    margin: 2vh auto 5px;
  }

  span {
    font-family: "EB Garamond", serif;
    font-weight: 400;
    font-size: 28px;
    font-style: italic;
    display: block;
  }

  p {
    font-size: 18px;
    max-width: 360px;
    margin: 20px auto 0;
    padding: 0 25px;
  }

  @media (max-width: 1280px) {
    h2 {
      font-size: 42px;
    }

    p {
      font-size: 16px;
    }
  }
  @media (max-width: 1024px) {
    max-width: 300px;

    a {
      img {
        width: 170px;
        height: 170px;
      }
    }

    h2 {
      font-size: 34px;
    }
    p {
      display: none;
    }
  }

  @media (max-width: 768px) {
    min-width: 180px;
    max-width: 200px;
    a {
      img {
        width: 130px;
        height: 130px;
      }
    }
    h2 {
     
      font-size: 26px;
      margin-top: 10px;
    }
    span {
      font-size: 22px;
    }
  }
  @media (max-width: 480px) {
    min-width: 100px;
    max-width: 140px;
    a {
      img {
        width: 85px;
        height: 85px;
      }
    }
    h2 {
     
      font-size: 20px;
      margin-top: 5px;
    }
    span {
      font-size: 18px;
    }
  }
`;
