import { Link } from "react-router-dom";
import { Authors  } from "../Authors";
import { Container } from "../styled/Container.styled";
import { StyledSectionTitleOne } from "../styled/SectionTitleOne.styled";

function SectionTitleOne(props) {
  const authors = Authors.sort((a, b) => b.postCount - a.postCount).slice(0, 4);
  return (
    <Container>
      <StyledSectionTitleOne>
        <h3>
          See what we’ve <span>written lately</span>
        </h3>

        <div className="authors">
          {authors.map((author) => (
            <div className="author" key={author.id}>
              <Link
                to={"/author/" + author.name}
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
      </StyledSectionTitleOne>
    </Container>
  );
}

export default SectionTitleOne;
