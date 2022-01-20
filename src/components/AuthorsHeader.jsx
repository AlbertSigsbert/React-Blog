import RoundedCard from "./RoundedCard";
import { Authors } from "../Authors";
import { StyledAuthorsHeader } from "../styled/AuthorsHeader.styled";
import RoundedCardTwo from "./RoundedCardTwo";

function AuthorsHeader(props) {
  const authors = Authors.sort((a, b) => b.postCount - a.postCount).slice(0, 3);
  const otherAuthors = Authors.sort((a, b) => b.postCount - a.postCount).slice(3, Authors.length);
  return (
    <StyledAuthorsHeader>
      <h1>
        Meet our <span>authors</span>
      </h1>
      <div className="flex-container">
        {authors.map((author) => (
          <RoundedCard key={author.id} author={author} />
        ))}
        <h3>
          <span>See also</span>
        </h3>

        {otherAuthors.map((author) => (
          <RoundedCardTwo key={author.id} author={author}/>
        ))}
      </div>
    </StyledAuthorsHeader>
  );
}

export default AuthorsHeader;
