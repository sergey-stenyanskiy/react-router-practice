import React from 'react'

import { ImageType } from '../../types/types'

import ImageLink from '../ImageLink/ImageLink'

import { ImageList } from './ImageList.styles'

type ImageListProps = {
  images: ImageType[]
}

export default ({
  images
}: ImageListProps) => (
  <ImageList>
    {images.map((image) => <ImageLink image={image} key={image.id} />)}
  </ImageList>
)