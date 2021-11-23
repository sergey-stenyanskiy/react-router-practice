import React from 'react'

import Navigation from './Navigation'

import styled from 'styled-components'

const Header = styled.header`
display: flex;
flex-direction: row;

justify-content: space-between;
align-items: center;
`;

export default () => {
  return (
    <Header>
      <Navigation />
    </Header>
  )
}