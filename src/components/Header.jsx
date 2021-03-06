import { Link } from "react-router-dom";
import Navbar from "./Common/Navbar";
import { StyledButton } from "../styled/Button.styled";
import { Container } from "../styled/Container.styled";
import { StyledHeader } from "../styled/Header.styled";

function Header(props) {
  return (
    <StyledHeader>
      <Navbar />
      <Container>
        <h1>Lorem, ipsum dolor sit ametionem earum numquam.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui
          tenetur architecto pariatur?
        </p>
        <StyledButton>
          <Link to="/membership">Become a Subscriber</Link>
        </StyledButton>
      </Container>
    </StyledHeader>
  );
}

export default Header;
