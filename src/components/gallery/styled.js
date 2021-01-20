import styled from 'styled-components';

export const Slides = styled.ul`
  padding: 0;
  position: relative;
  display: flex;
	flex-wrap: nowrap;
  flex-direction: row;
  margin: 0;
  height: 100%;

  ${props =>
    props.containerShift
    ? `
      will-change: transform;
      transform: translateX(${props.containerShift}px);
    `
    : 'transition: transform 0.5s ease-in 0s;'
  }
`;

export const Slide = styled.li`
  position: absolute;
  transform: translateX(${props => props.leftIndent}%);
  );

  transition: transform 0.7s ease-in-out;
  display: block;
  width: 100%;
`;

// export const Img = styled.img`
//   width: 100%;
//   object-fit: cover;

//   @media (min-width: 320px) {
//     height: 206px;
//   }

//   @media (min-width: 768px) {
//     height: 300px;
//   }

//   @media (min-width: 1200px) {
//     height: 533px;
//   }
// `;
