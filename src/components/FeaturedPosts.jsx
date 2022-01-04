import { Posts } from "../Posts";
import { Container } from "../styled/Container.styled";
import { Grid } from "../styled/Grid.styled";
import Card from "./Common/Card";

function FeaturedPosts(props) {
  const filterFeatured = () => {
    return Posts.filter((post) => post.isFeatured);
  };

  const featured = filterFeatured();
  return (
    <Container>
      <Grid>
        {featured.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Grid>
    </Container>
  );
}

export default FeaturedPosts;
