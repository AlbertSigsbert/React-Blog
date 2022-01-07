import styled from "styled-components";

export const StyledTitle = styled.div`
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

  a {
    display: flex;
    align-items: center;
    transition: transform 0.2s ease;
    transform: translateY(-2px);

    &:hover{
        transform: translate(4px,-2px);
    }

    svg {
      width: 56px;
      margin-left: 40px;
      fill: #fff;
    }
  }
`;
