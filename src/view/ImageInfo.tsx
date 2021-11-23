import React, { useCallback } from 'react'

import {
  useParams,
  useNavigate
} from 'react-router-dom'

import { ViewModel } from '../types/types';

import NotFound from './NotFound';

import ImageInfoCard from '../component/ImageInfoCard'

import styled from 'styled-components'

const BackButton = styled.button`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;

font-family: arial;
font-size: 1.1em;

padding: 16px 24px;

border: none;
outline: none;
border-radius: 4px;
color: white;
background-color: #5C6BC0;

margin-top: 16px;

cursor: pointer;
`;

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