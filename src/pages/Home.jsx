import Header from "../components/Header";
import FeaturedPosts from "../components/FeaturedPosts";
import SectionTitleOne from "../components/SectionTitleOne";
import LatestPosts from "../components/LatestPosts";
import SectionTitleTwo from "../components/SectionTitleTwo";
import OtherPosts from "../components/OtherPosts";
import SectionTitleThree from "../components/SectionTitleThree";
import Footer from "../components/Common/Footer";

function Home(props) {
  return (
    <>
      <Header />
      <FeaturedPosts />
      <SectionTitleOne />
      <LatestPosts />
      <SectionTitleTwo />
      <OtherPosts />
      <SectionTitleThree/>
      <Footer/>
    </>
  );
}

export default Home;
