import { useState } from "react";
import { Posts as posts } from "../Posts";
import { Container } from "../styled/Container.styled";
import { StyledLatestPost } from "../styled/LatestPost";
import BlogCard from "./Common/BlogCard";
import LoadMoreBtn from "./LoadMoreBtn";


function LatestPosts(props) {
  const [noOfPosts, setNoOfPosts] = useState(5);

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
  

  const loadMore = () => {
      setNoOfPosts(noOfPosts + noOfPosts)
  }
  const latest = posts.sort(filterLatest)
  const sliced = latest.slice(0,noOfPosts)
  
  return (
    <Container>
      <StyledLatestPost>
        {sliced.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </StyledLatestPost>
      {noOfPosts < posts.length && <LoadMoreBtn loadMore={loadMore}/>}
      
    </Container>
  );
}

export default LatestPosts;
