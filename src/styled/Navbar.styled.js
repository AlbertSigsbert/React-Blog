import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 40px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: 600;

  ul {
    display: flex;
    align-items: center;

    li {
      padding-left: 24px;
      svg {
        margin-top: 4px;
      }
      a {
        color: #fff;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .logo {
      font-size: 40px;
      font-style: italic;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;
