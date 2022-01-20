import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tags as tags, getTagPosts } from "../Tags";
import TagHeader from "../components/TagHeader";
import BlogCard from "../components/Common/BlogCard";
import LoadMoreBtn from "../components/LoadMoreBtn";
import SectionTitleThree from "../components/SectionTitleThree";
import Footer from "../components/Common/Footer";
import { Container } from "../styled/Container.styled";
import { StyledLatestPost } from "../styled/LatestPost";

function TagPage(props) {
  const [noOfPosts, setNoOfPosts] = useState(5);
  const { tagName } = useParams();
  const [tag] = tags.filter((tag) => tag.name === tagName);
  const posts = getTagPosts(tag.id);

  const loadMore = () => {
    setNoOfPosts(noOfPosts + noOfPosts)
}

const sliced = posts.slice(0,noOfPosts)
  return (
    <>
      <TagHeader tag={tag} />
      <Container>
        <StyledLatestPost>
          {sliced.map((post) => (
            <BlogCard key={post.id} item={post} />
          ))}
        </StyledLatestPost>
        {noOfPosts < posts.length && <LoadMoreBtn loadMore={loadMore}/>}
      </Container>
      <SectionTitleThree />
      <Footer />
    </>
  );
}

export default TagPage;
