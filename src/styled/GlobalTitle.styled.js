import styled from "styled-components";

export const StyledGlobalTitle = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  margin: 3vh 1vw;
  margin-top: 4rem;

  h3 {
    font-size: 68px;
    font-weight: 400;
    font-family: "EB Garamond", serif;
    line-height: 1.1;
    width: 100%;
    flex: 1 1 240px;

    span {
      font-style: italic;
    }
  }

  .authors {
    line-height: 0;
    flex: 1 0 auto;
    padding-left: 20px;
    transform: translateY(5px);
    text-align: right;

    span {
      font-size: 14px;
      line-height: 1;
      display: block;
      width: 100%;
      margin-top: 10px;
    }
  }

  .author {
    position: relative;
    display: inline-block;
    overflow: hidden;
    width: 70px;
    height: 70px;
    border-radius: 100px;
    margin-right: -15px;
    transition: transform 0.2s ease;
    z-index: 4;

    &:hover {
    transform: translateY(-4px);
  }

    a {
      border-radius: 100px;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 60px;
    }

    .authors {
      display: none;
    }
  }
  @media (max-width: 576px) {
    h3 {
      font-size: 48px;
    }
  }
`;
