import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Posts as posts } from "../Posts";
import BlogHeader from "../components/BlogHeader";
import BlogPost from "../components/BlogPost";
import BlogSocials from "../components/BlogSocials";
import NextPrevCards from "../components/NextPrevCards";
import Disqux from "../components/Disqux";
import SectionTitleTwo from "../components/SectionTitleTwo";
import SectionTitleThree from "../components/SectionTitleThree";
import OtherPosts from "../components/OtherPosts";
import Footer from "../components/Common/Footer";
import SubscribeCTA from "../components/SubscribeCTA";

function Blog(props) {
  const { blogSlug } = useParams();
  const [blog] = posts.filter((post) => post.slug === blogSlug);
  const [currentBlogID, setCurrentBlogID] = useState(blog.id);

  useEffect(() => {
    setCurrentBlogID(blog.id);
  }, [blog.id]);

  return (
    <>
      <BlogHeader blog={blog} />
      <BlogPost blog={blog} />
      {blog.visibility === "private" && <SubscribeCTA />}
      <BlogSocials />
      <NextPrevCards blog={blog} currentBlogID={currentBlogID} />
      {blog.visibility === "public" && <Disqux blog={blog} />}
      <SectionTitleTwo blog={blog} />
      <OtherPosts />
      <SectionTitleThree />
      <Footer />
    </>
  );
}

export default Blog;
