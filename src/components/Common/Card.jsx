import { Link } from "react-router-dom";
import { StyledCard } from "../../styled/Card.styled";

function Card({ item }) {
  return (
    <StyledCard>
      <Link to={item.slug} className="global-link"></Link>
      <img src={item.image} alt={item.title} />
      <div className="item-content">
        <small>Featured</small>
        <h2>
          <Link to={item.slug}>{item.title}</Link>
        </h2>
        <div>
          <Link to={"/authors/" + item.author}>{item.author}</Link>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
