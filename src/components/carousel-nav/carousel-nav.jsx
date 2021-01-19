import React from 'react';
import propTypes from 'prop-types';

import { CarouselControl, CarouselControlBtn } from './styled';

const CarouselNav = (props) => {
  const {
    activeSlideIndex,
    imagesLength,
    handleBtnClick }
     = props;

  const indexes = [...Array(imagesLength).keys()];

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
  imagesLength: propTypes.number.isRequired,
  activeSlideIndex: propTypes.number.isRequired,
  handleBtnClick: propTypes.func.isRequired,
}

export default CarouselNav;
