import React, { useEffect } from 'react'

import {
  BrowserRouter as Router
} from 'react-router-dom'

import useViewModel from './useViewModel'

import MainView from './view/MainView'

export default () => {
  const viewModel = useViewModel();

  useEffect(() => {
    viewModel.actions.fetchImages();
  }, []);

  return (
    <Router>
      <MainView viewModel={viewModel} />
    </Router>
  )
}