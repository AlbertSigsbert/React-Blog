import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 4fr));
  column-gap: 2vw;
  
  /* Ipad Only */
  @media all and (device-width: 768px) and (device-height: 1024px) {
  
}

  @media (max-width: 576px) {
    row-gap: 2rem;
  }
`;
