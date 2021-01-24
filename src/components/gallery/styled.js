import styled from "styled-components";

export const Container = styled.div`
  display: block;
  width: 100%;
`;

export const Slides = styled.ul`
  padding: 0;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin: 0;
  height: 100%;

  transform: translateX(${props => props.shift}%);
  transition: ${props => props.canTransition ? 'transform 0.5s cubic-bezier(0.70,1,1,1)' : 'unset'};
`;

export const Slide = styled.li`
  display: block;
  width: 100%;
  flex-shrink: 0;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;

  @media (min-width: 320px) {
    height: 206px;
  }

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1200px) {
    height: 533px;
  }
`;
