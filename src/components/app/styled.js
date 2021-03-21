import styled from 'styled-components';

export const SlideContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;

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

