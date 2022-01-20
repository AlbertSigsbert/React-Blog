import Navbar from "./Common/Navbar";
import { Container } from "../styled/Container.styled";
import { StyledAuthorHeader } from "../styled/AuthorHeader.styled";

function TagHeader({ tag }) {
  return (
    <>
      <Navbar />
      <Container>
        <StyledAuthorHeader>
          <div className="author-img">
            <img
              src={tag.image}
              loading="lazy"
              alt={tag.name}
              className="global-image"
            />{" "}
          </div>
          <h1>{tag.name}</h1>
          <span>{tag.postCount} posts</span>
          <p>{tag.description}</p>
        </StyledAuthorHeader>
      </Container>
    </>
  );
}

export default TagHeader;
