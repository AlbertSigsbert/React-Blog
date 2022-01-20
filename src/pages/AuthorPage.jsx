import { useParams } from "react-router-dom";
import { Authors as authors, getAuthorPosts } from "../Authors";
import AuthorHeader from "../components/AuthorHeader";
import BlogCard from "../components/Common/BlogCard";
import SectionTitleThree from "../components/SectionTitleThree";
import { Container } from "../styled/Container.styled";
import { StyledLatestPost } from "../styled/LatestPost";
import Footer from "../components/Common/Footer";

function AuthorPage(props) {
  const { authorName } = useParams();
  const [author] = authors.filter((author) => author.name === authorName);
  const posts = getAuthorPosts(author.id);

  return (
    <>
      <AuthorHeader author={author} />
      <Container>
        <StyledLatestPost>
          {posts.map((post) => (
            <BlogCard key={post.id} item={post} />
          ))}
        </StyledLatestPost>
      </Container>
      <SectionTitleThree />
      <Footer />
    </>
  );
}

export default AuthorPage;
