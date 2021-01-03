import styled from 'styled-components';

export const CarouselControl = styled.div`
position: absolute;
bottom: 3%;
left: 0;
width: 100%;
z-index: 3;
padding: 0;
display: flex;
justify-content: center;
`;

export const CarouselControlBtn = styled.button`
background-color: ${props => props.isActive ? '#949494' : '#FFFFFF'};
// border: 1px solid #fff;
border: none;
border-radius: 50%;
cursor: pointer;
margin: 0 5px;
width: 20px;
height: 20px;
`;
