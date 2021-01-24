import React, { useState, useEffect } from "react";
import propTypes from 'prop-types';

import { Container, Slides, Slide } from './styled';

const Gallery = ({ children, imagesIndexLength, activeSlideIndex, setActiveSlideIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(activeSlideIndex);
  const [canTransition, setCanTransition] = useState(true);
  const [firstPosition, setFirstPosition] = useState(0);
  const [lastPosition, setLastPosition] = useState(0);

  const positionDelta = lastPosition - firstPosition;

  const handleSlideTouchStart = evt => {
    if (imagesIndexLength > 0) {
      setFirstPosition(evt.nativeEvent.touches[0].pageX);
    }
  };

  const handleSlideTouchMove = evt => {
    if (imagesIndexLength > 0) {
      setLastPosition(evt.nativeEvent.touches[0].pageX);
    }
  };

  const handleSlideTouchEnd = () => {
    if (lastPosition > 0) {
      if (positionDelta >= 40) {
        const newIndex = activeSlideIndex === 0 ? imagesIndexLength : activeSlideIndex - 1;
        setActiveSlideIndex(newIndex)
      }

      if (positionDelta <= -40) {
        const newIndex = activeSlideIndex < imagesIndexLength ? activeSlideIndex + 1 : 0;
        setActiveSlideIndex(newIndex)
      }
    }

    setFirstPosition(0);
    setLastPosition(0);
  }

  useEffect(() => {
    setCanTransition(true);

    if (currentIndex === imagesIndexLength && activeSlideIndex === 0) {
      setCurrentIndex(imagesIndexLength + 1);

      setTimeout(() => {
        setCanTransition(false);
        setCurrentIndex(0);
      }, 500);

    } else if (currentIndex === 0 && activeSlideIndex === imagesIndexLength) {
      setCurrentIndex(-1);

      setTimeout(() => {
        setCanTransition(false);
        setCurrentIndex(imagesIndexLength);
      }, 500);

    } else {
      setCurrentIndex(activeSlideIndex);
    }

  }, [activeSlideIndex]);

  const containerShiftStyles = () => {
    const containerShift = lastPosition != 0 && imagesIndexLength > 0
      ? Math.round(positionDelta)
      : 0;

    if (containerShift) {
      return {
        willChange: 'transform',
        transform: `translateX(${containerShift}px)`,
      }
    } else {
      return {
        transition: 'transform 0.5s ease-in 0s',
      }
    }
  }

  const slidesShift = -100 - currentIndex * 100;

  return (
    <Container style={containerShiftStyles()}>
      <Slides shift={slidesShift} canTransition={canTransition}>
        {React.Children.map(children, (child, index) => {
          return (
            <Slide
              key={index}
              onTouchStart={handleSlideTouchStart}
              onTouchMove={handleSlideTouchMove}
              onTouchEnd={handleSlideTouchEnd}
              positionDelta={positionDelta}
            >
              {child}
            </Slide>
          )
        })}
      </Slides>
    </Container>
  );
}

Gallery.defaultProps = {
  imagesIndexLength: 0,
  activeSlideIndex: 0,
}

Gallery.propTypes = {
  children: propTypes.arrayOf(propTypes.node).isRequired,
  imagesIndexLength: propTypes.number.isRequired,
  activeSlideIndex: propTypes.number.isRequired,
}

export default Gallery;
