import React, { useEffect } from 'react'

import {
  Route,
  Routes,
} from 'react-router-dom'

import useViewModel from '../useViewModel'

import Home from './Home'
import ImageInfo from './ImageInfo'
import PrivatePage from './PrivatePage'
import NotFound from './NotFound'

import Navigation from '../component/Navigation'

export default () => {
  const viewModel = useViewModel();

  const { fetchImages } = viewModel;

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home viewModel={viewModel} />} />
        <Route path="/images/:id" element={<ImageInfo viewModel={viewModel} />} />
        <Route path="/sensitive-content" element={<PrivatePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}