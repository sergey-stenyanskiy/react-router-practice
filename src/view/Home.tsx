import React from 'react'

import { ViewModel } from '../types/types'

import ImageList from '../component/ImageList/ImageList'

type HomeProps = {
  viewModel: ViewModel
}

const NUM_DISPLAYED_ITEMS = 10;

export default ({
  viewModel
}: HomeProps) => {
  const { images, loaded } = viewModel;

  const content = loaded ? images.slice(0, NUM_DISPLAYED_ITEMS) : [];

  return (
    <ImageList images={content} />
  );
}