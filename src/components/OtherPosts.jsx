import { Container } from "../styled/Container.styled";
import { Grid } from "../styled/Grid.styled";
import BlogCard from "./Common/BlogCard";
import { Posts as posts } from "../Posts";
import _ from "lodash";

function OtherPosts(props) {

 const randomPost = () => {
   return  _.sampleSize(posts, 4);
 }

 const random = randomPost()

  return (
    <Container>
      <Grid>
      {random.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </Grid>
    </Container>
  );
}

export default OtherPosts;
