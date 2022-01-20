import RoundedCard from "./RoundedCard";
import { Tags } from "../Tags";
import { StyledAuthorsHeader } from "../styled/AuthorsHeader.styled";
import RoundedCardTwo from "./RoundedCardTwo";


function TagsHeader(props) {
    const tags = Tags.sort((a, b) => b.postCount - a.postCount).slice(0, 3);
    const otherTags = Tags.sort((a, b) => b.postCount - a.postCount).slice(3, Tags.length);
    return (
      <StyledAuthorsHeader>
        <h1>
          Explore our <span>tags</span>
        </h1>
        <div className="flex-container">
          {tags.map((tag) => (
            <RoundedCard key={tag.id} tag={tag} />
          ))}
          <h3>
            <span>See also</span>
          </h3>
  
          {otherTags.map((tag) => (
            <RoundedCardTwo key={tag.id} tag={tag}/>
          ))}
        </div>
      </StyledAuthorsHeader>
    );
}

export default TagsHeader;