import React from 'react'

import {
  BrowserRouter as Router
} from 'react-router-dom'

import MainView from './view/MainView/MainView'

import { App } from './App.styles'

export default () => {
  return (
    <App>
      <Router>
        <MainView />
      </Router>
    </App>
  )
}