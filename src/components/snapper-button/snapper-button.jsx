import React from 'react';
import propTypes from 'prop-types';
import { CarouselPrev, CarouselNext, CarouselSnapper } from './styled';

const SnapperButton = ({ activeSlideIndex, slidesIndexLength, isPrev, handleBtnClick }) => {
  const goPrevImageIndex = () => {
    const newIndex = activeSlideIndex === 0 ? slidesIndexLength : activeSlideIndex - 1;
    handleBtnClick(newIndex);
  };

  const goNextImageIndex = () => {
    const newIndex = activeSlideIndex === slidesIndexLength ? 0 : activeSlideIndex + 1;
    handleBtnClick(newIndex);
  }

  return (
    <CarouselSnapper isPrev={isPrev}>
      {isPrev ? <CarouselPrev onClick={goPrevImageIndex} /> : <CarouselNext onClick={goNextImageIndex} />}
    </CarouselSnapper>
  );
}

SnapperButton.propTypes = {
  isPrev: propTypes.bool.isRequired,
  activeSlideIndex: propTypes.number.isRequired,
  slidesIndexLength: propTypes.number.isRequired,
  handleBtnClick: propTypes.func.isRequired,
}

export default SnapperButton;
