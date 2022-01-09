import { Link } from "react-router-dom";
import { Container } from "../../styled/Container.styled";
import { StyledFooter } from "../../styled/Footer.styled";

function Footer(props) {
  return (
    <StyledFooter>
      <Container>
        {/* <div className="footer-logo">
          <a href="#">AM</a>
        </div> */}
        <div className="footer-nav">
          <div className="footer-nav-column">
            <small>Socials</small>
            <ul>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">Youtube</a>
              </li>
              <li>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <small>Links</small>
            <ul>
              <li>
                <Link to="/authors">Authors</Link>
              </li>
              <li>
                <Link to="/tags">Tags</Link>
              </li>
              <li>
                <Link to="/membership">Membership</Link>
              </li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <small>About</small>
            <ul>
              <li>
                <Link to="/about">About Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/more">More</Link>
              </li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <small>Membership</small>
            <ul>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <Link to="/sign In">Sign In</Link>
              </li>
              <li>
                <Link to="/sign Up">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          AM &copy; 2021 - All Rights Reserved.
        </div>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
