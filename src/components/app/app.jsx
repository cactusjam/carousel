import React, { Fragment, useState } from 'react';
import propTypes from 'prop-types';
import SnapperButton from '../snapper-button/snapper-button';
import CarouselNav from '../carousel-nav/carousel-nav';
import Gallery from '../gallery/gallery';

// import SliderWrapper from '../gallery/gallery';

import { Img } from './styled';

const App = ({ images }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const imagesIndexLength = images.length === 0 ? 0 : images.length - 1;

  const handleBtnClick = (newSlideIndex) => setActiveSlideIndex(newSlideIndex);

  // return (
  //   <SliderWrapper images={images} />
  // );

  return (
    <Fragment>
      <SnapperButton
        isPrev
        activeSlideIndex={activeSlideIndex}
        imagesIndexLength={imagesIndexLength}
        handleBtnClick={handleBtnClick} />

      <Gallery images={images} activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex}>
        {images.map(({ alt, id, src }) => (
          <Img src={src} alt={alt} key={id} />
        ))}
      </Gallery>

      <SnapperButton
        isPrev={false}
        activeSlideIndex={activeSlideIndex}
        imagesIndexLength={imagesIndexLength}
        handleBtnClick={handleBtnClick} />

      <CarouselNav
        activeSlideIndex={activeSlideIndex}
        handleBtnClick={handleBtnClick}
        imagesLength={images.length} />
    </Fragment>
  );
};

App.defaultProps = {
  images: [],
};

App.propTypes = {
  images: propTypes.array.isRequired,
};

export default App;
