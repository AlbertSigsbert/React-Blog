
import { StyledButton } from "../styled/Button.styled";
import { Centre } from "../styled/Center.styled";

function LoadMoreBtn({loadMore}) {
 
  return (
    <Centre>
      <StyledButton onClick={loadMore}>Load More</StyledButton>
    </Centre>
  );
}

export default LoadMoreBtn;
