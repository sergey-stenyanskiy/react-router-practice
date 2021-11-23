import React from 'react'

import { ImageType } from '../types/types'

import ImageLink from './ImageLink'

import styled from 'styled-components'

const ImageList = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

type ImageListProps = {
  images: ImageType[]
}

export default ({
  images
}: ImageListProps) => (
  <ImageList>
    {images.map((image) => <ImageLink image={image} />)}
  </ImageList>
)