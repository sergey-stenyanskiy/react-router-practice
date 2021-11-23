import React from 'react'

import {
  NavLink
} from 'react-router-dom'

import styled from 'styled-components'

const Navigation = styled.nav`
color: black;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

font-family: arial;
font-size: 1.05em;
line-height: 1.8em;
`;

const StyledLink = styled(NavLink)`
display: block;
color: black;
text-decoration: none;
padding: 4px 16px;
width: 164px;

border-radius: 4px;
text-align: center;

transition: box-shadow, 0.1s linear;

&:active {
  color: black;
}

&:visited {
  color: black;
}

&.active {
  transition: box-shadow, 0.1s linear;
  box-shadow: 0 0 4px 2px rgba(0,0,0,0.2);
}
`;

type HorizontalSpacingProps = {
  spacing?: number;
}

const HorizontalSpacing = styled.div`
margin-right: ${({ spacing = 1 } : HorizontalSpacingProps) => `${spacing * 8}px`};
`;

export default () => {
  return (
    <Navigation>
      <StyledLink to="/">Home</StyledLink>
      <HorizontalSpacing />
      <StyledLink to="/images/1">Image Info Page</StyledLink>
      <HorizontalSpacing />
      <StyledLink to="/sensitive-content">Private Page</StyledLink>
      <HorizontalSpacing />
      <StyledLink to="/not-found">404</StyledLink>
    </Navigation>
  )
}