import React from 'react';
import propTypes from 'prop-types';

import { CarouselControl, CarouselControlBtn } from './styled';

const CarouselNav = (props) => {
  const { images, activeSlideIndex, handleBtnClick } = props;

  return (
    <CarouselControl>
      {images.map((_slide, i) => {
        const isActive = i === activeSlideIndex;

        return (
          <CarouselControlBtn
            key={i}
            isActive={isActive}
            onClick={() => handleBtnClick(i)}
          />
        )
      })}
    </CarouselControl>
  );
}

CarouselNav.propTypes = {
  images: propTypes.array.isRequired,
  activeSlideIndex: propTypes.number.isRequired,
  handleBtnClick: propTypes.func.isRequired,
}

export default CarouselNav;
