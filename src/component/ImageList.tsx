import React from 'react'

import { ImageType } from '../types/types'

import Image from './Image'

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
    {images.map((image) => <Image image={image} />)}
  </ImageList>
)