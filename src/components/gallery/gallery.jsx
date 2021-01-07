import React, { Fragment, useState } from "react";
import propTypes from 'prop-types';

import SnapperButton from "../snapper-button/snapper-button";
import CarouselNav from "../carousel-nav/carousel-nav";
import { Slides, Slide, Img } from './styled';

const Gallery = ({ images, defaultSlideIndex }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(defaultSlideIndex);
  const imagesIndexLength = images.length === 0 ? 0 : images.length - 1;
  // const IMG_WIDTH = 800;

  const handleBtnClick = (newSlideIndex) => setActiveSlideIndex(newSlideIndex);

  return (
    <Fragment>
      <SnapperButton isPrev={true} activeSlideIndex={activeSlideIndex} imagesIndexLength={imagesIndexLength} handleBtnClick={handleBtnClick} />

        <Slides>
          {images.map((slide, index) => {
            const { alt, src} = slide;
            const isActive = index === activeSlideIndex;
            // const leftIndent = IMG_WIDTH * (index - activeSlideIndex);
            const leftIndent = index - activeSlideIndex;

            return (
              <Slide
                key={index}
                isActive={isActive}
                leftIndent={leftIndent}
              >
                <Img src={src} alt={alt} />
              </Slide>
            )
          })}
        </Slides>

      <SnapperButton isPrev={false} activeSlideIndex={activeSlideIndex} imagesIndexLength={imagesIndexLength} handleBtnClick={handleBtnClick} />
      <CarouselNav images={images} activeSlideIndex={activeSlideIndex} handleBtnClick={handleBtnClick} />
    </Fragment>
  );
}

Gallery.defaultProps = {
  images: [],
  defaultSlideIndex: 0,
}

Gallery.propTypes = {
  images: propTypes.array.isRequired,
  defaultSlideIndex: propTypes.number.isRequired,
}

export default Gallery;
