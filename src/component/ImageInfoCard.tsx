import React from 'react'
import { ImageType } from '../types/types'

import styled from 'styled-components'

const ImageInfoCard = styled.div`
border-radius: 4px;
padding: 16px;

font-family: arial;

display: flex;
flex-direction: row;

box-shadow: 0 0 8px 1px rgba(0,0,0,0.2);
`;

const ImageInfoBlock = styled.div`
display: flex;
flex-direction: column;

& ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

& ul li {
  margin-bottom: 8px;
}

& ul li:last-child {
  margin-bottom: 0;
}
`;

type HorizontalSpacingProps = {
  spacing?: number;
}

const HorizontalSpacing = styled.div`
margin-right: ${({ spacing = 1 } : HorizontalSpacingProps) => `${spacing * 8}px`};
`;

type ImageStyleProps = {
  url: string
}

const Image = styled.div`
width: 150px;
height: 150px;
background: url(${(props: ImageStyleProps) => props.url});
`;

type ImageInfoCardProps = {
  image: ImageType
}

export default ({
  image
}: ImageInfoCardProps) => {
  return (
    <ImageInfoCard className="image-info-card">
      <Image url={image.url} />
      <HorizontalSpacing spacing={2} />
      <ImageInfoBlock>
        <ul>
          <li>
            <strong>id:</strong>
            {' '}
            {image.id}
          </li>
          <li>
            <strong>title:</strong>
            {' '}
            {image.title}
          </li>
          <li>
            <strong>albumId:</strong>
            {' '}
            {image.albumId}
          </li>
          <li>
            <strong>url:</strong>
            {' '}
            {image.thumbnailUrl}
          </li>
          <li>
            <strong>thumbnailUrl:</strong>
            {' '}
            {image.thumbnailUrl}
          </li>
        </ul>
      </ImageInfoBlock>
    </ImageInfoCard>
  )
}