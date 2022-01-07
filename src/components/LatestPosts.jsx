import { Posts as posts } from "../Posts";
import { Container } from "../styled/Container.styled";
import { StyledLatestPost } from "../styled/LatestPost";
import BlogCard from "./Common/BlogCard";


function LatestPosts(props) {
  const filterLatest = (a, b) => {
    const d1 = new Date(a.published_at);
    const d2 = new Date(b.published_at);

    if (d1.getUTCMonth() > d2.getUTCMonth()) {
      return 1;
    } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
      return -1;
    } else {
      return d1.getUTCDate() - d2.getUTCDate();
    }
  };

  const latest = posts.sort(filterLatest)
  
  return (
    <Container>
      <StyledLatestPost>
        {latest.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </StyledLatestPost>
    </Container>
  );
}

export default LatestPosts;
