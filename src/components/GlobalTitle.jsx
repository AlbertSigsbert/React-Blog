import { Link } from "react-router-dom";
import { Authors as authors } from "../Authors";
import { Container } from "../styled/Container.styled";
import { StyledGlobalTitle } from "../styled/GlobalTitle.styled";
function GlobalTitle(props) {
  return (
    <Container>
      <StyledGlobalTitle>
        <h3>
          See what we’ve <span>written lately</span>
        </h3>

        <div className="authors">
          {authors.map((author) => (
            <div className="author" key={author.id}>
              <Link
                to={"/authors/" + author.name}
                className="global-link"
              ></Link>
              <img
                src={author.image}
                alt={author.name}
                loading="lazy"
                className="global-image"
              />
            </div>
          ))}
          <span>Meet our top authors</span>
        </div>
      </StyledGlobalTitle>
    </Container>
  );
}

export default GlobalTitle;
