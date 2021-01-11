import styled from 'styled-components';

export const CarouselPrev = styled.a`
  background-color: #AAA8A8;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  width: 40px;
  height: 40px;
  left: 2%;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
  }

  &:before {
    left: 43%;
    transform: rotate(135deg);
    background: linear-gradient(to top, #fff 0%, #fff 10%, rgba(51, 51, 51, 0) 10%), linear-gradient(to left, #fff 0%, #fff 10%, rgba(51, 51, 51, 0) 10%);
    width: 20%;
    height: 20%;
    top: 40%;
  }

  @media (max-width: 1199px) {
    width: 30px;
    height: 30px;
  }
`;

export const CarouselNext = styled(CarouselPrev)`
  left: auto;
  right: 2%;
  &:before {
    right: 43%;
    left: auto;
    transform: rotate(-45deg);
  }
`;

export const CarouselSnapper = styled.div`
  position: absolute;
  top: 50%;
  right: ${props => props.isPrev ? 'auto' : '0'};
  transform: translateY(-50%);
  padding: 10px;
  z-index: 3;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
