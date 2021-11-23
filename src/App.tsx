import React from 'react'

import {
  BrowserRouter as Router
} from 'react-router-dom'

import MainView from './view/MainView'

import styled from 'styled-components'

const App = styled.div`
width: 960px;
margin: auto;
font-family: arial;
`;

export default () => {
  return (
    <App>
      <Router>
        <MainView />
      </Router>
    </App>
  )
}