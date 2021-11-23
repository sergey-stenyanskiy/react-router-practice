import React, { ReactElement } from 'react'

import { IconButtonTheme } from '../types/types';

import { iconButtonVariantColors, defaultTheme } from '../appTheme'

import styled from 'styled-components'

type IcoButtonStyleProps = {
  theme: IconButtonTheme
}

const IconButton = styled.button`
border: none;
outline: none;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

cursor: pointer;
color: ${({ theme = defaultTheme }: IcoButtonStyleProps) => iconButtonVariantColors[theme.color]};
background: transparent;
`;

type IconButtonProps = {
  icon: ReactElement
  theme?: IconButtonTheme
  onClick?: (e: React.MouseEvent) => void
  type: 'button'
}

export default ({
  icon,
  theme = defaultTheme,
  onClick,
  type
}: IconButtonProps) => {
  return (
    <IconButton type={type} theme={theme} onClick={onClick}>
      {icon}
    </IconButton>
  )
}