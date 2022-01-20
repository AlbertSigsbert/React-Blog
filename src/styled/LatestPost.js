import styled from "styled-components";

export const StyledLatestPost = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 3fr));
  grid-gap: 2vw;
  
  article:nth-of-type(5n+1){
   grid-column:1/3;
  }
 
  
  /* Ipad Only */
  @media all and (device-width: 768px) and (device-height: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 2fr));
}

  @media (max-width: 576px) {
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

    article:nth-of-type(5n+1){
   grid-column:1;
  }
  }
`;
