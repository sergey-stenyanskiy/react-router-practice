import React, { useEffect } from 'react'

import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import useViewModel from '../useViewModel'

import Home from './Home'
import ImageInfo from './ImageInfo'
import NotFound from './NotFound'

export default () => {
  const viewModel = useViewModel();
  const { fetchImages } = viewModel;

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <Routes>
      <Route path="/" element={<Home viewModel={viewModel} />} />
      <Route path="/images/:id" element={<ImageInfo viewModel={viewModel} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}