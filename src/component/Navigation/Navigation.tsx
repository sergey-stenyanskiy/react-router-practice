import React from 'react'

import { Navigation, StyledLink, HorizontalSpacing } from './Navigation.styles'

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