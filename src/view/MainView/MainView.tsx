import React, {
  useEffect,
  useCallback
} from 'react'

import {
  Route,
  Routes,
} from 'react-router-dom'

import useViewModel from '../../useViewModel'
import useLogin from '../../hook/useLogin'

import LoginGuard from '../../component/LoginGuard'
import Header from '../../component/Header/Header'

import Home from '../Home'
import ImageInfo from '../ImageInfo/ImageInfo'
import PrivatePage from '../PrivatePage'
import NotFound from '../NotFound'

import { Main } from './MainView.styles'

export default () => {
  const viewModel = useViewModel({
    initialState: [],
    url: 'https://jsonplaceholder.typicode.com/photos'
  });

  const login = useLogin(false);

  const { fetchImages } = viewModel;

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <>
      <Header auth={login} />
      <Main>
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
      </Main>
    </>
  )
}