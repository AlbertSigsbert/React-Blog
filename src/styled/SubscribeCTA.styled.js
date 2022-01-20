import styled from "styled-components";

export const StyledSubscribeCTA = styled.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 16vh;
  padding: 8vh 50px;
  text-align: center;
  border-top: 1px solid #3f4851;
  border-bottom: 1px solid #3f4851;
  background-color: #1e2631;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;

  ::before{
    position: absolute;
    z-index: 1;
    right: 50%;
    top: -20vh;
    left: 50%;
    width: calc(100vw - 40px);
    height: 100%;
    max-height: 150px;
    margin: 0 calc(-50vw + 20px);
    content: '';
    pointer-events: none;
    opacity: .5;
    background-color: #1e2631;
  }

  h2 {
    line-height: 1.25;
    margin: 0 auto 3vh;
    font-family: 'EB Garamond', serif;
    font-weight: 400;
    font-size: 62px;
    span{
        font-style: italic;
    }
  }
  p {
    font-size: 26px;
    max-width: 680px;
    margin-bottom: 40px;
    line-height: 1.65;
    position: relative;
  }

  small {
    font-size: 14px;
    display: block;
    margin-top: 3vh;
    text-align: center;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 50px;
      margin-top: 60px;
      margin-bottom: 20px;
    }
    p {
      font-size: 24px;
      max-width: 540px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 44px;
      margin-top: 45px;
    }
    p{
        font-size: 22px;
    }
    small{
        margin-top: 25px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 10vh;
    padding: 6vh 0;
    border-bottom: none;

    h2 {
      font-size: 40px;
      margin-bottom: 15px;
    }
    p{
        font-size: 18px;
    }
    small{
        font-size: 12px;
    }
  }
`;
