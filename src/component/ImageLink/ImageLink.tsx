import React from 'react'

import { ImageType } from '../../types/types';

import { ImageLink, Image, ButtonMore } from './ImageLink.styles'

type ImageProps = {
  image: ImageType
}

export default ({
  image
}: ImageProps) => (
  <ImageLink to={`/images/${image.id}`}>
    <Image url={image.url} />
    <ButtonMore type="button">
      More
    </ButtonMore>
  </ImageLink>
)