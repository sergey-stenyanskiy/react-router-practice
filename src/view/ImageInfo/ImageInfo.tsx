import React, { useCallback } from 'react'

import {
  useParams,
  useNavigate
} from 'react-router-dom'

import { ViewModel } from '../../types/types';

import NotFound from '../NotFound';

import ImageInfoCard from '../../component/ImageInfoCard/ImageInfoCard'

import { BackButton } from './ImageInfo.styles'

type ImageInfoProps = {
  viewModel: ViewModel
}

export default ({
  viewModel
}: ImageInfoProps) => {
  const params = useParams();
  const navigate = useNavigate();

  const handleGoBackClicked = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const { getImage } = viewModel;
  const image = getImage(+params.id!);

  if (!image) {
    return (
      <NotFound />
    );
  }

  return (
    <>
      <ImageInfoCard image={image} />
      <BackButton type="button" onClick={handleGoBackClicked}>Go back</BackButton>
    </>
  );
}