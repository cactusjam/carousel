import React from 'react';
import propTypes from 'prop-types';
import { CarouselPrev, CarouselNext, CarouselSnapper } from './styled';

const SnapperButton = (props) => {
  const {
    activeSlideIndex,
    imagesIndexLength,
    isPrev,
    handleBtnClick }
    = props;

  const goPrevImageIndex = () => {
    const newIndex = activeSlideIndex === 0 ? imagesIndexLength : activeSlideIndex - 1;
    handleBtnClick(newIndex);
  };

  const goNextImageIndex = () => {
    const newIndex = activeSlideIndex === imagesIndexLength ? 0 : activeSlideIndex + 1;
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
  imagesIndexLength: propTypes.number.isRequired,
  handleBtnClick: propTypes.func.isRequired,
}

export default SnapperButton;
