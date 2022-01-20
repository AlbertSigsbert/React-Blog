import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from '../styled/Button.styled';
import { Container } from '../styled/Container.styled';
import { StyledSubscribeCTA } from '../styled/SubscribeCTA.styled';

function SubscribeCTA(props) {
    return (
        <Container>
            <div className="opaque"></div>
        <StyledSubscribeCTA>
        <h2>This post is for <span>subscribers</span> only</h2>
        <p>Sign up now to read the post and get access to the full library of posts for subscribers only.</p>
        <StyledButton>
        <Link to="/signup">Sign up now</Link>
        </StyledButton>
        <small>Already have an account? <Link to="/signin">Sign in</Link></small>
    </StyledSubscribeCTA>
    </Container>
    );
}

export default SubscribeCTA;