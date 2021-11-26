import React, { useCallback } from 'react'

import { primary, danger } from '../../appTheme'

import FilledButton from '../FilledButton/FilledButton'
import Navigation from '../Navigation/Navigation'

import { UseLoginController } from '../../types/types'

import { Header, StyledKey, HorizontalSpacing } from './Header.styles'

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