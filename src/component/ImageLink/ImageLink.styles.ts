import { Link } from 'react-router-dom'

import styled from 'styled-components'

type ImageStyleProps = {
  url: string
}

export const ButtonMore = styled.button`
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

export const ImageLink = styled(Link)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex: 0 0 33.33%;

padding: 8px;

&:hover ${ButtonMore} {
  opacity: 1;
}

${ButtonMore} {
  opacity: 0;
  transition: opacity, 0.1s linear;
}
`;

export const Image = styled.div`
width: 100%;
height: 200px;
background: url(${(props: ImageStyleProps) => props.url});
`;