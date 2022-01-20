import { StyledBlogBody } from "../styled/BlogBody.styled";
import { Container } from "../styled/Container.styled";

function BlogPost({ blog }) {
  return (
    <Container>
      <StyledBlogBody>{blog.visibility === 'private' ? blog.body.substr(0,1000) : blog.body}</StyledBlogBody>
    </Container>
  );
}

export default BlogPost;
