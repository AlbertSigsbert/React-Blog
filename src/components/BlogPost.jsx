import { StyledBlogBody } from "../styled/BlogBody.styled";
import { Container } from "../styled/Container.styled";

function BlogPost({ blog }) {
  return (
    <Container>
      <StyledBlogBody>{blog.body}</StyledBlogBody>
    </Container>
  );
}

export default BlogPost;
