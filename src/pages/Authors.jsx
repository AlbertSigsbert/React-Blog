import AuthorsHeader from "../components/AuthorsHeader";
import Navbar from "../components/Common/Navbar";
import { Container } from "../styled/Container.styled";
import  Footer from "../components/Common/Footer";

function Authors(props) {
    return (
        <>
         <Navbar/>
        <Container>
            <AuthorsHeader/>
            <Footer/>
        </Container>
        </>
       
    );
}

export default Authors;