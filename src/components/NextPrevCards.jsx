import { Link } from "react-router-dom";
import { Posts as posts } from "../Posts";
import { Container } from "../styled/Container.styled";
import { StyledNextPrevCards } from "../styled/NextPrevCards.styled";

function NextPrevCards({ blog, currentBlogID }) {
  const getPrevPost = () => {
    const prevBlogID = currentBlogID === 1 ? posts.length : currentBlogID - 1;
    return posts.filter((post) => post.id === prevBlogID);
  };
  const getNextPost = () => {
    const nextBlogID = currentBlogID === posts.length ? 1 : currentBlogID + 1;
    return posts.filter((post) => post.id === nextBlogID);
  };

  const [prevPost] = getPrevPost();
  const [nextPost] = getNextPost();


  return (
    <Container>
      <StyledNextPrevCards>
        <div className="wrapper">
          <section className="prev-card">
            <Link to={"/" + prevPost.slug} className="global-link"></Link>
            <small>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.819 6.08c-1.486 1.585-2.735 2.8-3.815 3.643-1.046.843-2.058 1.45-3.004 1.855v.743a14.71 14.71 0 013.173 2.024c1.013.81 2.228 1.99 3.646 3.576h1.283c-1.047-2.193-2.262-4.217-3.376-5.432H24v-.978H4.726a31.46 31.46 0 001.856-2.699c.338-.506.844-1.417 1.486-2.733H6.819v.001z"></path>
              </svg>
              Newer post
            </small>
            <div className="card-content">
              <div className="card-image">
                <img
                  src={prevPost.image}
                  alt={prevPost.title}
                  loading="lazy"
                  className="global-image"
                />
              </div>
              <h3>
                <Link to={"/" + prevPost.slug}>{prevPost.title}</Link>
              </h3>
            </div>
          </section>
          <section className="next-card">
            <Link to={"/" + nextPost.slug} className="global-link"></Link>
            <small>
              Older post
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.185 6.08c1.485 1.585 2.733 2.8 3.813 3.643 1.045.843 2.057 1.45 3.002 1.855v.743c-1.08.506-2.16 1.18-3.171 2.024-1.012.81-2.227 1.99-3.644 3.576h-1.282c1.046-2.193 2.26-4.217 3.374-5.432H.014v-.978h19.263a31.274 31.274 0 01-1.855-2.699c-.338-.506-.844-1.417-1.485-2.733h1.248z"></path>
              </svg>
            </small>
            <div className="card-content">
              <div className="card-image">
                <img
                  src={nextPost.image}
                  alt={nextPost.title}
                  loading="lazy"
                  className="global-image"
                />
              </div>
              <h3>
                <Link to={"/" + nextPost.slug}>{nextPost.title}</Link>
              </h3>
            </div>
          </section>
        </div>
      </StyledNextPrevCards>
    </Container>
  );
}

export default NextPrevCards;
