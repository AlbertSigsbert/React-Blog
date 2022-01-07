import Title from "../components/Common/Title";
import FeaturedPosts from "../components/FeaturedPosts";
import GlobalTitle from "../components/GlobalTitle";
import Header from "../components/Header";
import LatestPosts from "../components/LatestPosts";
import OtherPosts from "../components/OtherPosts";

function Home(props) {
  return (
    <>
      <Header />
      <FeaturedPosts />
      <GlobalTitle/>
      <LatestPosts/>
      <Title/>
      <OtherPosts/>
    </>
  );
}

export default Home;
