import {
  NavLink
} from 'react-router-dom'

import styled from 'styled-components'

export const Navigation = styled.nav`
color: black;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

font-family: arial;
font-size: 1.05em;
line-height: 1.8em;
`;

export const StyledLink = styled(NavLink)`
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

export type HorizontalSpacingProps = {
  spacing?: number;
}

export const HorizontalSpacing = styled.div`
margin-right: ${({ spacing = 1 } : HorizontalSpacingProps) => `${spacing * 8}px`};
`;