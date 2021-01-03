import React from "react";
import propTypes from 'prop-types';
import { CarouselPrev, CarouselNext, CarouselSnapper } from './styled';

const SnapperButton = (props) => {
  const {isPrev} = props;
  return (
    <CarouselSnapper isPrev={isPrev}>
      {isPrev? <CarouselPrev /> : <CarouselNext />}
    </CarouselSnapper>
  );
}

SnapperButton.propTypes = {
  isPrev: propTypes.bool.isRequired
}

export default SnapperButton;
