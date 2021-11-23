import React from 'react'

import {
  NavLink
} from 'react-router-dom'

export default () => {
  return (
    <nav className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/images/1">Image Info Page</NavLink>
      <NavLink to="/sensitive-content">Private Page</NavLink>
      <NavLink to="/not-found">404</NavLink>
    </nav>
  )
}