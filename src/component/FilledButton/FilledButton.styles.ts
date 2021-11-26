import { FilledButtonTheme } from '../../types/types';

import { filledButtonVariantColors, defaultTheme } from '../../appTheme'

import styled from 'styled-components'

type FilledButtonStyleProps = {
  theme: FilledButtonTheme
}

export const FilledButton = styled.button`
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
