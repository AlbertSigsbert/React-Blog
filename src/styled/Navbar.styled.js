import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 40px;
  font-size: 24px;
  font-weight: 600;
 
  

  .active {
    color: #c0c0c0;
  }

  .logo {
    color: #fff;
    font-size: 40px;

    &:hover {
      text-decoration: none;
    }
  }

  .nav {
    display: flex;
    align-items: center;

    li {
      padding-left: 24px;
      svg {
        margin-top: 4px;
      }
      a {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  div {
    display: none;
  }



  @media (max-width: 992px) {
    display: block;
   
  

    .logo {
      font-size: 30px;
    }

    .nav {
      display: none;
    }

    .nav-active {
      margin: 2rem 0;
      text-align: center;
      padding: 2rem 0;
      li {
        margin-bottom: 1em;
      }
    }

    ul:first-of-type {
      margin-top: 20vh;
    }
    ul:last-of-type {
      li:first-child {
        display: none;
      }
    }

    div {
      display: block;
      position: absolute;
      top: 3vh;
      right: 3vw;

      a:last-child {
        margin: 0 1em;
      }
    }
  }
`;
