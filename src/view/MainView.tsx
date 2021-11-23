import React, {
  useEffect,
  useCallback
} from 'react'

import {
  Route,
  Routes,
} from 'react-router-dom'

import useViewModel from '../useViewModel'

import LoginGuard from '../component/LoginGuard'
import Navigation from '../component/Navigation'
import Header from '../component/Header'

import Home from './Home'
import ImageInfo from './ImageInfo'
import PrivatePage from './PrivatePage'
import NotFound from './NotFound'

import useLogin from '../hook/useLogin'

export default () => {
  const viewModel = useViewModel();
  const login = useLogin(false);

  const { fetchImages } = viewModel;

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <>
      <Header auth={login} />
      <Routes>
        <Route path="/" element={<Home viewModel={viewModel} />} />
        <Route path="/images/:id" element={<ImageInfo viewModel={viewModel} />} />
        <Route
          path="/sensitive-content"
          element={(
            <LoginGuard logged={login.logged}>
              <PrivatePage />
            </LoginGuard>
          )}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}