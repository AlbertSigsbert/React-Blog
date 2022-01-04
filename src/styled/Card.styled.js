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
  opacity: .8;
  
  &:hover{
    transform: translateY(-4px);
  }

  .global-link {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  img {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .item-content {
    z-index: 1;
    width: 100%;
    max-width: 440px;
    align-self: flex-end;
  }
`;
