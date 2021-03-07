import React from 'react';
import propTypes from 'prop-types';

import { CarouselControl, CarouselControlBtn } from './styled';

const CarouselNav = ({ activeSlideIndex, slidesLength, handleBtnClick }) => {
  const indexes = [...Array(slidesLength).keys()];

  return (
    <CarouselControl>
      {indexes.map((i) => {
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
  slidesLength: propTypes.number.isRequired,
  activeSlideIndex: propTypes.number.isRequired,
  handleBtnClick: propTypes.func.isRequired,
}

export default CarouselNav;
