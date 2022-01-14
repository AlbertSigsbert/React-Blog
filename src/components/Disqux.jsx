import Disqus from "disqus-react";
import { Container } from "../styled/Container.styled";

function Disqux({ blog }) {
  const disqusShortname = "am-blog-1";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: blog.slug,
    title: blog.title,
  };

  const style ={
    margin: "5rem auto",
    width: "75%"
  };
  return (
    <Container>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} style={style} />
    </Container>
  
  );
}

export default Disqux;
