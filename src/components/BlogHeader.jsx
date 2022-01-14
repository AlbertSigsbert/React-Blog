import { Link } from "react-router-dom";
import Navbar from "./Common/Navbar";
import { Container } from "../styled/Container.styled";
import { StyledBlogHeader } from "../styled/BlogHeader.styled";
import { getTags } from "../Tags";
import { getAuthors } from "../Authors";
import moment from "moment";


function BlogHeader({ blog }) {
   
  const tags =  getTags(blog.tags);
  const authors =  getAuthors(blog.authors);
  return (
    <>
     <Navbar />
      <Container>
      
        { blog && <StyledBlogHeader>
          <div>
            {tags && tags.map((tag, i) => (
              <Link key={tag.id} to={"/tag/" + tag.name} className="tag">
                {tag.name}
              </Link>
            ))}
            <h1>{blog.title}</h1>
            {blog.description && <p>{blog.description}</p>}
            <div className="post-description">
              <div className="authors-wrapper">
                {authors.map((author) => (
                  <div className="author" key={author.id}>
                    <Link
                      to={"/authors/" + author.name}
                      className="global-link"
                    ></Link>
                    <img
                      src={author.image}
                      alt={author.name}
                      loading="lazy"
                      className="global-image"
                    />
                  </div>
                ))}
              </div>

              <div className="post-details">
                {authors.map((author, i) => (
                  <Link key={author.id} to={"/authors/" + author.name}>
                    {author.name} {i < authors.length - 1 ? " & " : ""}
                  </Link>
                ))}

                <p>
                  {moment(blog.published_at).format("MMM DD,YYYY")} .{" "}
                  {blog.reading_time}minutes read
                </p>
              </div>
            </div>
          </div>
          <div className="post-image">
            <img src={blog.image} alt={blog.title} loading="lazy" />
          </div>
        </StyledBlogHeader> }
      </Container>
    </>
  );
}

export default BlogHeader;
