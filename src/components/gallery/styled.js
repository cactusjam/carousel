import styled from 'styled-components';

export const Slides = styled.ul`
  display: flex;
  flex-direction: row;
  width: 700px;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const Slide = styled.li`
  list-style: none;
  display: ${props => props.isActive ? 'block': 'none'};
`;
