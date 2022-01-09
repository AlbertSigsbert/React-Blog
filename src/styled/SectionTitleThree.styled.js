import styled from "styled-components";

export const StyledSectionTitleThree = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  margin: 3vh 1vw;
  margin-top: 4rem;
  padding-bottom: 8vh;
  border-bottom: 1px solid #3f4851;


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

  form {
    display: flex;
    flex: 0 0 auto;
    padding: 10px;
    border-radius: 100px;
    background-color: #2a343e;
    border: 1px solid #3f4851;

    input {
      font-size: 20px;
      font-weight: 400;
      display: block;
      flex: 1 1 auto;
      width: 180px;
      margin-right: 12px;
      padding-right: 20px;
      padding-left: 30px;
      transition: width 0.3s ease 0.2s;
      word-break: normal;
      border-radius: 100px;
    }

    input[type="email" i] {
      padding: 1px 8px;
      
    }
    input::placeholder {
      font-size: 16px;
      color: #fff;
    }
  }


  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    h3{
      flex: 0 0 auto;
      margin-bottom: 4rem;
      font-size: 60px;
    }
  }
  @media (max-width: 576px) {
    h3 {
      font-size: 48px;
    }
  }
  @media (max-width: 400px) {
    h3{font-size: 38px;}
    form {
  
    input {
      font-size: 18px;
      width: 140px;
    }
    input::placeholder {
      font-size: 14px;
    }
  }
  }
`;
