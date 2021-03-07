import React, { Fragment, useState } from 'react';
import propTypes from 'prop-types';
import SnapperButton from '../snapper-button/snapper-button';
import CarouselNav from '../carousel-nav/carousel-nav';
import Gallery from '../gallery/gallery';
import { Img } from './styled';

const Carousel = ({ slides, slidesLength }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slidesIndexLength = slides.length === 0 ? 0 : slides.length - 1;

  const handleBtnClick = (newSlideIndex) => setActiveSlideIndex(newSlideIndex);
  const orderedSlides = [slides[slides.length - 1], ...slides, slides[0]];

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
        {orderedSlides.map((slideData) => {
          switch (slideData.type) {
            case 'image':
              const { alt, src, id } = slideData;
              return <Img src={src} alt={alt} key={id} />

            default:
              console.log('Sorry, we dont support this kind of type');
          }
        })}
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
        slidesLength={slides.length}
      />
    </Fragment>
  );
};

Carousel.defaultProps = {
  slides: [],
};

Carousel.propTypes = {
  slides: propTypes.array.isRequired,
};

export default Carousel;
