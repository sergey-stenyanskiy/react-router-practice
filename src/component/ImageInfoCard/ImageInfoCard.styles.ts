import styled from 'styled-components'

export const ImageInfoCard = styled.div`
border-radius: 4px;
padding: 16px;

font-family: arial;

display: flex;
flex-direction: row;

box-shadow: 0 0 8px 1px rgba(0,0,0,0.2);
`;

export const ImageInfoBlock = styled.div`
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

export const HorizontalSpacing = styled.div`
margin-right: ${({ spacing = 1 } : HorizontalSpacingProps) => `${spacing * 8}px`};
`;

type ImageStyleProps = {
  url: string
}

export const Image = styled.div`
width: 150px;
height: 150px;
background: url(${(props: ImageStyleProps) => props.url});
`;
