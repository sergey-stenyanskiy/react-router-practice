import React from 'react'

import { ReactComponent as Key } from '../assets/icons/key.svg'

import { primary } from '../appTheme'

import FilledButton from './FilledButton'
import Navigation from './Navigation'

import styled from 'styled-components'

const Header = styled.header`
display: flex;
flex-direction: row;

justify-content: space-between;
align-items: center;
`;

const StyledKey = styled(Key)`
fill: currentColor;
width: 20px;
height: 20px;
`;

type HorizontalSpacingProps = {
  spacing?: number;
}

const HorizontalSpacing = styled.div`
margin-right: ${({ spacing = 1 } : HorizontalSpacingProps) => `${spacing * 8}px`};
`;

export default () => {
  return (
    <Header>
      <Navigation />
      <FilledButton type="button" theme={primary}>
        <StyledKey />
        <HorizontalSpacing />
        Log in
      </FilledButton>
    </Header>
  )
}