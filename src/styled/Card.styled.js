import styled from "styled-components";

export const StyledCard = styled.article`
  display: flex;
  flex-basis: calc(25% - 2vw);
  min-width: 180px;
  min-height: 400px;
  padding: 40px 25px 30px;
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: transform 0.2s ease;
  border-radius: 34px;
  background: #2a343e;
  opacity: 0.8;

  &:hover {
    transform: translateY(-4px);
  }

  .item-content {
    z-index: 1;
    width: 100%;
    max-width: 440px;
    align-self: flex-end;
   

    h2 {
      font-size: 28px;
      color: #808080;
    }
    small {
      font-size: 12px;
      font-weight: 700;
      display: block;
      margin-bottom: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

  }
`;
