import React from 'react'

import {
  useParams,
} from 'react-router-dom'

import { ViewModel } from '../types/types';

import NotFound from './NotFound';

type ImageInfoProps = {
  viewModel: ViewModel
}

export default ({
  viewModel
}: ImageInfoProps) => {
  const params = useParams();

  const { getImage } = viewModel;
  const image = getImage(+params.id!);

  if (!image) {
    return (
      <NotFound />
    );
  }

  return (
    <>{image.url}</>
  );
}