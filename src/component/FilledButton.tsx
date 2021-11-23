import React, { ReactChild, ReactChildren } from 'react'

import { FilledButtonTheme } from '../types/types';

import { filledButtonVariantColors, defaultTheme } from '../appTheme'

import styled from 'styled-components'

type FilledButtonStyleProps = {
  theme: FilledButtonTheme
}

const FilledButton = styled.button`
border: none;
outline: none;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

cursor: pointer;
background: ${({ theme = defaultTheme }: FilledButtonStyleProps) => filledButtonVariantColors[theme.color]};
color: white;

border-radius: 4px;
font-size: 1em;
padding: 8px 16px;
`;

type FilledButtonProps = {
  theme?: FilledButtonTheme
  onClick?: (e: React.MouseEvent) => void
  type: 'button'
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[]
}

export default ({
  theme = defaultTheme,
  onClick,
  type,
  children
}: FilledButtonProps) => {
  return (
    <FilledButton type={type} theme={theme} onClick={onClick}>
      {children}
    </FilledButton>
  )
}