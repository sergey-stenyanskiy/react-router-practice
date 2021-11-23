import React, { useCallback } from 'react'

import { ReactComponent as Key } from '../assets/icons/key.svg'

import { primary, danger } from '../appTheme'

import FilledButton from './FilledButton'
import Navigation from './Navigation'

import styled from 'styled-components'
import { UseLoginController } from '../types/types'

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

type HeaderProps = {
  auth: UseLoginController
}

export default ({
  auth
}: HeaderProps) => {
  const theme = auth.logged ? danger : primary;

  const handleLoginClicked = useCallback(() => {
    if (!auth.logged) {
      auth.login();
    } else {
      auth.logout();
    }
  }, [auth]);

  return (
    <Header>
      <Navigation />
      <FilledButton type="button" theme={theme} onClick={handleLoginClicked}>
        <StyledKey />
        <HorizontalSpacing />
        {auth.logged ? 'Log out' : 'Log in'}
      </FilledButton>
    </Header>
  )
}