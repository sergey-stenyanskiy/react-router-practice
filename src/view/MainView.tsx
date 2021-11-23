import React from 'react'

import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import { ViewModel } from '../types/types'

import Home from './Home'
import ImageInfo from './ImageInfo'
import NotFound from './NotFound'

type MainViewProps = {
  viewModel: ViewModel
}

export default ({
  viewModel
}: MainViewProps) => (
  <Routes>
    <Route path="/" element={<Home viewModel={viewModel} />} />
    <Route path="/images" element={<Navigate replace to="/" />} />
    <Route path="/images/:id" element={<ImageInfo />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)