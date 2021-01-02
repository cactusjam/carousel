import React from "react";
import propTypes from 'prop-types';
// import { Li } from './styled';
import { Slides, Slide } from './styled';

const CarouselContainer = (props) => {
  const {images} = props;
  return (
    <Slides>
      {/* <Li><img src="../public/img/1.jpg"/></Li> */}
      {images.map((slide, key) => {
        const {alt, src} = slide;
        return (
          <Slide key={key}><img src={src} alt={alt} width='500px'/></Slide>
        )
      })}
    </Slides>
  );
}

CarouselContainer.propTypes = {
  images: propTypes.array.isRequired
}

export default CarouselContainer;
