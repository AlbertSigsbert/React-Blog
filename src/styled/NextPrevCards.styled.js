import styled from "styled-components";

export const StyledNextPrevCards = styled.aside`
  width: 100%;
  margin: 0 auto 8vh;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .prev-card,
  .next-card {
    position: relative;
    flex: 1 0 calc(50% - 1vw * 2);
    box-sizing: border-box;
    width: 100%;
    min-width: 350px;
    margin: 1vw;
    padding: 35px;
    transition: background-color 0.2s ease;
    border: 1px solid #3f4851;
    border-radius: calc(50px / 1.5);
    background-color: #2a343e;

    &:hover {
      background-color: #141b23;
    }
  }
  .wrapper .prev-card:hover svg {
    transform: translateX(-4px);
  }
  .wrapper .next-card:hover svg {
    transform: translateX(4px);
  }
  .next-card {
    text-align: right;

    .card-content {
      flex-direction: row-reverse;
      justify-content: flex-end;
      .card-image {
        margin-right: 0;
        margin-left: 24px;
      }
    }
    small {
      justify-content: flex-end;
      svg {
        margin-right: 0;
        margin-left: 10px;
      }
    }
  }

  small {
    display: flex;
    font-size: 16px;
    align-items: center;
    margin-bottom: 20px;

    svg {
      width: 22px;
      height: 22px;
      transition: transform 0.2s ease;
      fill: #fff;
      margin-right: 10px;
    }
  }

  .card-content {
    display: flex;
    h3 {
      font-family: "EB Garamond", serif;
      font-size: 36px;
      font-weight: 400;
      align-self: center;
      margin: 5px 0;
    }
  }

  .card-image {
    position: relative;
    z-index: 1;
    overflow: hidden;
    flex: 0 0 110px;
    min-height: 110px;
    border-radius: calc(50px / 3);
    margin-right: 24px;
  }

  @media (max-width: 1280px) {
    .next-card,.prev-card {
      padding: 30px 25px;
    }
    .card-image{margin-right: 16px;}
    .card-content h3{font-size: 32px;}
  }

  @media (max-width: 1024px) {
    .next-card,.prev-card {
      padding: 20px;
      border-radius: calc(50px / 2);

      small {
        margin-bottom: 15px;
      }
    }

    .card-image {
      flex-basis: 85px;
      min-height: 85px;
      border-radius: calc(50px / 4);
    }
    .card-content h3{font-size: 20px;}
  }
  @media (max-width: 768px) {
    .next-card small svg,.prev-card small svg {
      width: 18px;
      height: 18px;
    }

    .card-image{
      flex-basis: 70px;
    min-height: 70px;
    }
   
  }

  @media (max-width: 468px) {
    .next-card,.prev-card{
      min-width: 200px;
      margin-bottom: 10px;

      small {
        font-size: 14px;
        margin-bottom: 10px;
      }
    }

    .card-content h3{font-size: 24px;}
  }
`;
