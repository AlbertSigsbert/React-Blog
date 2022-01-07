import { Link } from "react-router-dom";
import { StyledTitle } from "../../styled/Title.styled";
import { Container } from "../../styled/Container.styled";

function Title(props) {
  return (
    <Container>
      <StyledTitle>
        <h3>
          In case you <span>missed it</span>
        </h3>
        <Link to={"/tag/lifestyle/"} aria-label="Link to the collection">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.185 6.08c1.485 1.585 2.733 2.8 3.813 3.643 1.045.843 2.057 1.45 3.002 1.855v.743c-1.08.506-2.16 1.18-3.171 2.024-1.012.81-2.227 1.99-3.644 3.576h-1.282c1.046-2.193 2.26-4.217 3.374-5.432H.014v-.978h19.263a31.274 31.274 0 01-1.855-2.699c-.338-.506-.844-1.417-1.485-2.733h1.248z"></path>
          </svg>
        </Link>
      </StyledTitle>
    </Container>
  );
}

export default Title;
