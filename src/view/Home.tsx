import React from 'react'

import { ViewModel } from '../types/types'

import ImageList from '../component/ImageList'

type HomeProps = {
  viewModel: ViewModel
}

export default ({
  viewModel
}: HomeProps) => {
  const { images, loaded } = viewModel;

  const content = loaded ? images.slice(0, 10) : [];

  return (
    <ImageList images={content} />
  );
}