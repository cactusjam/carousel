import React from 'react';
import propTypes from 'prop-types';
import Carousel from '../carousel/carousel';
import { Img } from './styled';

const App = ({ slides }) => {
  const orderedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  return (
    <Carousel slidesLength={slides.length}>
      {orderedSlides.map((slideData) => {
        switch (slideData.type) {
          case 'image':
            const { alt, src, id } = slideData;
            return <Img src={src} alt={alt} key={id} />

          default:
            console.log('Sorry, we do not support this kind of type -', slideData.type);
        }
      })}
    </Carousel>
  );
}

App.defaultProps = {
  slides: [],
};

App.propTypes = {
  slides: propTypes.array.isRequired,
};

export default App;
