import FeaturedPosts from "../components/FeaturedPosts";
import GlobalTitle from "../components/GlobalTitle";
import Header from "../components/Header";

function Home(props) {
  return (
    <>
      <Header />
      <FeaturedPosts />
      <GlobalTitle/>
    </>
  );
}

export default Home;
