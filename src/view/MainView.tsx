import React from 'react'

import Home from './Home'

import {
  Route,
  Routes
} from 'react-router-dom'

export default () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)