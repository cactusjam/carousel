import styled from 'styled-components';

export const CarouselControl = styled.div `
  left: 0;
  width: 100%;
  z-index: 3;
  padding: 0;
  display: flex;
  justify-content: center;

@media (min-width: 320px) {
  position: relative;
  bottom: 6px;
}

@media (min-width: 768px) {
  position: absolute;
  bottom: 10px;
}
`;

export const CarouselControlBtn = styled.a `
  background-color: ${props => props.isActive ? '#949494' : '#FFFFFF'};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 5px;
  width: 20px;
  height: 20px;

&:focus {
  outline: none;
}

@media (max-width: 768px) {
  background-color: ${props => props.isActive ? '#87BAE5' : '#949494'};
  width: 5px;
  height: 5px;
  margin: 0 2px;
}
`;
