import React from 'react'

import { ReactComponent as Key } from '../assets/icons/key.svg'

import { primary } from '../appTheme'

import IconButton from './IconButton'
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
width: 28px;
height: 28px;
`;

export default () => {
  return (
    <Header>
      <Navigation />
      <IconButton type="button" theme={primary} icon={<StyledKey />} />
    </Header>
  )
}