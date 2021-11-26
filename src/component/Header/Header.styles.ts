import { ReactComponent as Key } from '../../assets/icons/key.svg'

import styled from 'styled-components'

export const Header = styled.header`
display: flex;
flex-direction: row;

justify-content: space-between;
align-items: center;
`;

export const StyledKey = styled(Key)`
fill: currentColor;
width: 20px;
height: 20px;
`;

type HorizontalSpacingProps = {
  spacing?: number;
}

export const HorizontalSpacing = styled.div`
margin-right: ${({ spacing = 1 } : HorizontalSpacingProps) => `${spacing * 8}px`};
`;
