import styled from "styled-components";

export const StyledBlogCard = styled.article`
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
  }
  .item-tags {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;

    a {
      font-size: 12px;
      display: inline-block;
      margin: 7px 7px 0 0;
      padding: 2px 8px;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: border-color, background-color, color;
      color: #fff;
      border: 1px solid #888d93;
      border-radius: 100px;
      background: #2a343e;
      opacity: 0.8;

      &:hover {
        color: #1e2631;
        border-color: #fff;
        background-color: #fff;
      }
    }
  }
  .global-members-label {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    margin: 15px 7px 0 0;
    border: 1px solid #fff;
    border-radius: 100px;
    background-color: #fff;

    svg {
      height: 12px;
      fill: var(--color-font-one);
    }
  }
`;
