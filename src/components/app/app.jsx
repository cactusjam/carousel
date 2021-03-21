import React from 'react';
import propTypes from 'prop-types';
import Carousel from '../carousel/carousel';
import { SlideContainer } from './styled';

const App = ({ slides }) => {
  const orderedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  return (
    <Carousel slidesLength={slides.length}>
      {orderedSlides.map((slideData) => {
        const { id, content } = slideData;
        return <SlideContainer key={id} dangerouslySetInnerHTML={{__html: content}} />;
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
