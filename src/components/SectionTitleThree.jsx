import { StyledButton } from "../styled/Button.styled";
import { Container } from "../styled/Container.styled";
import { StyledSectionTitleThree } from "../styled/SectionTitleThree.styled";
function SectionTitleThree(props) {
  return (
    <Container>
      <StyledSectionTitleThree>
        <h3>
          Subscribe to <span>new posts</span>
        </h3>
        <form>
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Your email address"
          />
           <StyledButton type="submit">Subscribe</StyledButton>
           
         
          {/* <button
            className="global-button"
            type="submit"
            // style="display:none"
            disabled=""
          >
            Subscribe
          </button> */}
        </form>
      </StyledSectionTitleThree>
    </Container>
  );
}

export default SectionTitleThree;
