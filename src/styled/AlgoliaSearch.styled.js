import styled from "styled-components";

export const StyledAlgoliaSearch = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 998;
  padding: 0 30px;

  .search-content {
    position: relative;
    z-index: 999;
    top: 12vh;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1vw 1px;
    box-sizing: border-box;
  }
  .ais-SearchBox {
    button {
      display: none;
    }
  }
  .search-close {
    position: fixed;
    z-index: 9999;
    top: 20px;
    right: 20px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    svg {
      width: 24px;
      height: 24px;
      fill: #fff;
    }
  }
  .ais-SearchBox-input {
    font-style: italic;
    display: block;
    padding: 0 0 3vh;
    transform: translateX(-20px);
    text-indent: 20px;
    word-break: normal;
    font-size: 90px;
    font-family: "EB Garamond", serif;
    font-weight: 400;
    color: white;
  }
  .ais-Hits {
    width: 100%;
    height: 100%;

    .ais-Hits-item {
      display: flex;
      margin: 0 0 20px -2px;

      div:first-of-type {
        flex: 0 0 110px;
        margin-right: 2rem;
      }

      img {
        position: relative;
        z-index: 1;
        overflow: hidden;
        min-height: 110px;
        border-radius: calc(50px / 3);
      }
      small:first-of-type {
        margin-top: 26px;
      }
      small {
        font-size: 14px;
        display: block;
        width: 100%;
      }

      h5 {
        font-weight: 700;
        a {
          font-size: 30px;
          font-weight: 700;
          line-height: 1.3;
          display: inline-block;
        }
      }
    }
  }

  .search-meta {
    font-size: 10px;
    font-weight: 700;
    display: block;
    width: 100%;
    margin: 0;
    padding: 2vh 0;
    text-align: left;
    letter-spacing: 3px;
    text-transform: uppercase;
    border-top: 1px solid #3f4851;
  }

  @media (max-width: 1280px) {
    .ais-SearchBox-input {
      font-size: 74px;
    }
  }
  @media (max-width: 1024px) {
    .ais-SearchBox-input {
      font-size: 68px;
    }
    .search-content {
      max-width: 700px;
    }
    .search-meta {
      padding-top: 1vh;
      letter-spacing: 2px;
    }
  }

  @media (max-width: 768px) {
    .ais-SearchBox-input {
      font-size: 62px;
    }
  }
  @media (max-width: 480px) {
    padding-right: 6%;
    padding-left: 6%;
    

    .ais-SearchBox-input {
      font-size: 38px;
    }

    .ais-Hits {
      .ais-Hits-item {
       
        div:first-of-type {
          flex: 0 0 70px;
          margin-right: 1rem;
        }

        img {
          min-height: 70px;
        }
        h5 {
          a {
            font-size: 18px;
          }
        }
      }
    }
  }
`;
