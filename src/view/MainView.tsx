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
  const { logged, login, logout } = useLogin(false);

  const { fetchImages } = viewModel;

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleLoginClicked = useCallback(() => {
    if (!logged) {
      login();
    } else {
      logout();
    }
  }, [logged, login, logout]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home viewModel={viewModel} />} />
        <Route path="/images/:id" element={<ImageInfo viewModel={viewModel} />} />
        <Route
          path="/sensitive-content"
          element={(
            <LoginGuard logged={logged}>
              <PrivatePage />
            </LoginGuard>
          )}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <button type="button" onClick={handleLoginClicked}>{logged ? 'Log out' : 'Log in'}</button>
    </>
  )
}