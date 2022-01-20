import { Link } from "react-router-dom";
import { StyledRoundedCard } from "../styled/RoundedCard.styled";

function RoundedCard({ author, tag }) {
  return (
    <>
      {author && (
        <StyledRoundedCard>
          <Link to={"/author/" + author.name}>
            <img
              src={author.image}
              loading="lazy"
              alt={author.name}
              className="global-image"
            />{" "}
          </Link>
          <h2>
            <Link to={"/author/" + author.name}>{author.name}</Link>
          </h2>
          <span>{author.postCount} posts</span>
          <p>{author.bio}</p>
        </StyledRoundedCard>
      )}
      {tag && (
        <StyledRoundedCard>
          <Link to={"/tag/" + tag.name}>
            <img
              src={tag.image}
              loading="lazy"
              alt={tag.name}
              className="global-image"
            />{" "}
          </Link>
          <h2>
            <Link to={"/tag/" + tag.name}>{tag.name}</Link>
          </h2>
           <span>{tag.postCount} posts</span>
        </StyledRoundedCard>
      )}
    </>
  );
}

export default RoundedCard;
