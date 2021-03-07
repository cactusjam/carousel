import styled from 'styled-components';

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

