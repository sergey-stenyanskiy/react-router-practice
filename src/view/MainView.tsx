import React from 'react'

import {
  Route,
  Routes
} from 'react-router-dom'

import { ViewModel } from '../types/types'

import Home from './Home'

type MainViewProps = {
  viewModel: ViewModel
}

export default ({
  viewModel
}: MainViewProps) => (
  <Routes>
    <Route path="/" element={<Home viewModel={viewModel} />} />
  </Routes>
)