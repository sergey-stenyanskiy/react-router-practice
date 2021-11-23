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

const ButtonMore = styled.button`
position: absolute;
z-index: 100;
cursor: pointer;

border: none;
outline: none;
border-radius: 4px;
background-color: white;

font-family: arial;

padding: 6px 18px;
`;

const ImageLink = styled(Link)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

padding: 8px;

&:hover ${ButtonMore} {
  opacity: 1;
}

${ButtonMore} {
  opacity: 0;
  transition: opacity, 0.1s linear;
}
`;

const Image = styled.div`
width: 150px;
height: 150px;
background: url(${(props: ImageStyleProps) => props.url});
`;

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