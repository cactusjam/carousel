import React, { Fragment, useState } from 'react';
import propTypes from 'prop-types';
import SnapperButton from '../snapper-button/snapper-button';
import CarouselNav from '../carousel-nav/carousel-nav';
import Gallery from '../gallery/gallery';

const Carousel = ({ slidesLength, children }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slidesIndexLength = slidesLength === 0 ? 0 : slidesLength - 1;

  const handleBtnClick = (newSlideIndex) => setActiveSlideIndex(newSlideIndex);

  return (
    <Fragment>
      <SnapperButton
        isPrev
        activeSlideIndex={activeSlideIndex}
        slidesIndexLength={slidesIndexLength}
        handleBtnClick={handleBtnClick}
      />

      <Gallery
        slidesIndexLength={slidesIndexLength}
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
      >
        {children}
      </Gallery>

      <SnapperButton
        isPrev={false}
        activeSlideIndex={activeSlideIndex}
        slidesIndexLength={slidesIndexLength}
        handleBtnClick={handleBtnClick}
      />

      <CarouselNav
        activeSlideIndex={activeSlideIndex}
        handleBtnClick={handleBtnClick}
        slidesLength={slidesLength}
      />
    </Fragment>
  );
};

Carousel.defaultProps = {
  slidesLength: 0,
};

Carousel.propTypes = {
  slidesLength: propTypes.number.isRequired,
};

export default Carousel;
