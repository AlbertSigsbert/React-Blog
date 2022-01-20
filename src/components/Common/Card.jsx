import { Link } from "react-router-dom";
import { StyledCard } from "../../styled/Card.styled";
import { getAuthors } from "../../Authors";

function Card({ item }) {
  const authors = getAuthors(item.authors);
  return (
    <StyledCard>
      <Link to={item.slug} className="global-link"></Link>
      <img src={item.image} alt={item.title} className="global-image" />
      <div className="item-content">
        <small>Featured</small>
        <h2>
          <Link to={item.slug}>{item.title}</Link>
        </h2>
        <div>
          {authors.map((author, i) => (
            <Link key={author.id} to={"/author/" + author.name}>
              {author.name} {i < authors.length - 1 ? " & " : ""}
            </Link>
          ))}
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
