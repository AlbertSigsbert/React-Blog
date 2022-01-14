import styled from "styled-components";

export const StyledBlogHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin-top: 3.5rem;
  h1 {
    font-size: 78px;
    font-style: italic;
    font-weight: 500;
    font-family: "EB Garamond", serif;
    line-height: 1.2;
    padding: 3rem 0;
    width: 85%;
  }

  p {
    font-size: 24px;
    line-height: 1.65;
    width: 100%;
    max-width: 700px;
    margin: 1vh 0 5vh;
    margin-bottom: 3rem;
  }

  .tag {
    display: inline-block;
    font-size: 12px;
    border: 1px solid rgb(87, 80, 80);
    border-radius: 14px;
    padding: 4px 14px;
    text-decoration: none;
    margin: 0 7px 7px 0;
    text-align: center;

    &:hover {
      text-decoration: none;
      color: #000;
      background-color: #fff;
    }
  }

  .authors-wrapper {
    margin-right: 2rem;
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

  .post-image img {
    width: 100%;
    height: 80vh;
    aspect-ratio: 2/1;
    border-radius: 50px;
    object-fit: cover;
  }

  .post-description {
    display: flex;
    p {
      font-size: inherit;
      width: 100%;
    }
  }

  .post-details {
    margin-top: 1rem;
  }

  /* ----------- iPad Pro ----------- */
  /* Portrait and Landscape */
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
    height: auto;

    .post-image img {
      height: 50vh;
    }

    p {
      max-width: 500px;
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    height: auto;
    h1,
    p {
      width: 90%;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 42px;
      line-height: 1;
      padding: 2rem 0;
    }
    p {
      font-size: 18px;
      width: 100%;
    }
    .authors-wrapper {
      margin-right: 1.5rem;
    }
    .author {
      height: 50px;
      width: 50px;
    }
    .post-description {
      p {
        font-size: 13px;
        line-height: 1;
      }
    }
    .post-details {
      margin-top: 0.5rem;
    }
  }
`;
