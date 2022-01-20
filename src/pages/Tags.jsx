import TagsHeader from "../components/TagsHeader";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import { Container } from "../styled/Container.styled";

function Tags(props) {
  return (
    <>
      <Navbar />
      <Container>
        <TagsHeader />
        <Footer />
      </Container>
    </>
  );
}

export default Tags;
