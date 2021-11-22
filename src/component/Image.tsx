import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { ImageType } from '../types/types';

type ImageProps = {
  image: ImageType
}

type ImageStyleProps = {
  url: string
}

const Image = styled.div`
width: 150px;
height: 150px;
background: url(${(props: ImageStyleProps) => props.url})
`;

const ImageLink = styled(Link)`
display: block;
`;

export default ({
  image
}: ImageProps) => (
  <ImageLink to={`/images/${image.id}`}>
    <Image url={image.url} />
  </ImageLink>
)