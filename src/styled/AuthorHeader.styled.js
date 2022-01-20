import styled from "styled-components";

export const StyledAuthorHeader = styled.div`
  width: 100%;
  margin: 6vh auto 8vh;
  text-align: center;

  .author-img {
    width: 200px;
    height: 200px;
    margin: 0 auto 20px;

    img {
      position: relative;
      border-radius: 100%;
    }
  }

  h1 {
    line-height: 1.1;
    flex: 1 1 240px;
    margin: 0;
    font-size: 82px;
    font-family: "EB Garamond", serif;
    font-weight: 400;
    width: 100%;
  }

  span {
    font-family: "EB Garamond", serif;
    font-size: 36px;
    font-weight: 400;
    font-style: italic;
    display: block;
    margin: 0.6vh auto 0;
  }

  .socials {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    margin: 5vh auto 0;
    padding: 10px;
    border: 1px solid #3f4851;
    border-radius: 100px;
    background-color: #1e2631;

    span,
    a {
      font-size: 18px;
      line-height: 2;
      display: flex;
      align-items: center;
      margin-right: 20px;
      margin-left: 20px;

      svg {
        width: 18px;
        height: 18px;
        margin-right: 10px;
        transform: translateY(-1px);
        fill: #fff;
      }
    }
  }

  p {
    font-size: 26px;
    max-width: 680px;
    margin: 5vh auto 0;
  }

  @media (max-width: 1280px) {
    h1 {
      font-size: 74px;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 68px;
    }
    span {
      font-style: 32px;
    }

    .socials {
      span,
      a {
        font-size: 16px;
      }
    }

    p {
      margin-top: 3vh;
      font-size: 24px;
      max-width: 540px;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 62px;
    }
    span {
      font-style: 28px;
    }
    p {
      font-size: 22px;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 48px;
    }
    p {
      font-size: 18px;
    }
  }
`;
