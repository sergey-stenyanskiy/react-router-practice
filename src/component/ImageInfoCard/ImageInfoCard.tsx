import React from 'react'
import { ImageType } from '../../types/types'

import { ImageInfoCard, HorizontalSpacing, ImageInfoBlock, Image } from './ImageInfoCard.styles'

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