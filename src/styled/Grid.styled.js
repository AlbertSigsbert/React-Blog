import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 4fr));
  column-gap: 2vw;

  @media (max-width: 576px) {
    row-gap: 2rem;
  }
`;
