import React from 'react'

import {
  BrowserRouter as Router
} from 'react-router-dom'

import MainView from './view/MainView'

export default () => (
  <Router>
    <MainView />
  </Router>
)