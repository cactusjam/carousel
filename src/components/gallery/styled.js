import styled from 'styled-components';

export const Slides = styled.ul`
  padding: 0;
  position: relative;
  display: flex;
	flex-wrap: nowrap;
  flex-direction: row;
  margin: 0;
  height: 100%;
`;

export const Slide = styled.li`
  position: absolute;
  transform: translateX(
    calc(100% * ${props => props.leftIndent})
  );
  transition: transform 0.7s ease-in-out;
  flex-shrink: 0;
  display: block;
  width: 100%;
`;


export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
