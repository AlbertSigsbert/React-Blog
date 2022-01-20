import { Link } from "react-router-dom";
import { StyledRoundedCardTwo } from "../styled/RoundedCardTwo.styled";
function RoundedCardTwo({ author, tag }) {
  return (
    <>
      {author && (
        <StyledRoundedCardTwo>
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
        </StyledRoundedCardTwo>
      )}
      {tag && (
        <StyledRoundedCardTwo>
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
        </StyledRoundedCardTwo>
      )}
    </>
  );
}

export default RoundedCardTwo;
