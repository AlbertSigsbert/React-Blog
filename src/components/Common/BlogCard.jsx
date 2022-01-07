import { Link } from "react-router-dom";
import { StyledBlogCard } from "../../styled/BlogCard.styled";


function BlogCard({ item }) {
  return (
    <StyledBlogCard>
      <Link to={item.slug} className="global-link"></Link>
      <img src={item.image} alt={item.title} className="global-image" />
      <div className="item-content">
        <h2>
          <Link to={item.slug}>{item.title}</Link>
        </h2>
        <div>
          <Link to={"/authors/" + item.author}>{item.author}</Link>
        </div>
        <div className="item-tags">
          <span className="global-members-label">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.445 9.333V6.667C5.445 2.985 8.38 0 12 0c3.62 0 6.554 2.985 6.554 6.667v2.666s2.622 1.214 2.622 6c0 4.787-3.815 8.667-8.52 8.667h-1.312c-4.706 0-8.52-3.88-8.52-8.667 0-4.786 2.621-6 2.621-6zm10.487 0V6.667c0-2.21-1.76-4-3.932-4-2.172 0-3.933 1.79-3.933 4v2.666h7.865z"></path>
            </svg>
          </span>
          <Link to={"/tag/" + item.tag}>{item.tag}</Link>
        </div>
      </div>
    </StyledBlogCard>
  );
}

export default BlogCard;
