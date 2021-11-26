import React, { ReactChild, ReactChildren } from 'react'

import { FilledButtonTheme } from '../../types/types';

import { defaultTheme } from '../../appTheme'

import { FilledButton } from './FilledButton.styles'

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