import styled from "styled-components";

export const StyledBlogBody = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  font-weight: 400;
  max-width: 700px;
  margin: 4rem auto 8vh ;

 

  @media (max-width: 1024px) {
    font-size: 18px;
    max-width: 600px;
  }


  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 5vh;
}
`;
