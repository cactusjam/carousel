import React, { useState, useEffect } from "react";
import propTypes from 'prop-types';

import { Container, Slides, Slide } from './styled';

const Gallery = ({ children, slidesIndexLength, activeSlideIndex, setActiveSlideIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(activeSlideIndex);
  const [canTransition, setCanTransition] = useState(true);
  const [isSwiping, setIsSwiping] = useState(false);
  const [firstPosition, setFirstPosition] = useState(0);
  const [lastPosition, setLastPosition] = useState(0);

  const positionDelta = lastPosition - firstPosition;

  const handleSlideTouchStart = evt => {
    if (slidesIndexLength > 0) {
      setFirstPosition(evt.nativeEvent.touches[0].pageX);
    }
  };

  const handleSlideSwipeStart = evt => {
    evt.preventDefault();
    if (slidesIndexLength > 0) {
      setIsSwiping(true);
      setFirstPosition(evt.nativeEvent.pageX);
    }
  };

  const handleSlideTouchMove = evt => {
    if (slidesIndexLength > 0) {
      setLastPosition(evt.nativeEvent.touches[0].pageX);
    }
  };

  const handleSlideSwipeMove = evt => {
    evt.preventDefault();
    if (slidesIndexLength > 0 && isSwiping) {
      setLastPosition(evt.nativeEvent.pageX);
    }
  };

  const handleSlideSwipeEnd = (evt) => {
    evt.preventDefault();
    if (lastPosition > 0) {
      if (positionDelta >= 40) {
        const newIndex = activeSlideIndex === 0 ? slidesIndexLength : activeSlideIndex - 1;
        setActiveSlideIndex(newIndex)
      }

      if (positionDelta <= -40) {
        const newIndex = activeSlideIndex < slidesIndexLength ? activeSlideIndex + 1 : 0;
        setActiveSlideIndex(newIndex)
      }
    }

    if (evt.type === 'mouseup') {
      setIsSwiping(false);
    }

    setFirstPosition(0);
    setLastPosition(0);
  }

  useEffect(() => {
    setCanTransition(true);

    if (currentIndex === slidesIndexLength && activeSlideIndex === 0) {
      setCurrentIndex(slidesIndexLength + 1);

      setTimeout(() => {
        setCanTransition(false);
        setCurrentIndex(0);
      }, 500);

    } else if (currentIndex === 0 && activeSlideIndex === slidesIndexLength) {
      setCurrentIndex(-1);

      setTimeout(() => {
        setCanTransition(false);
        setCurrentIndex(slidesIndexLength);
      }, 500);

    } else {
      setCurrentIndex(activeSlideIndex);
    }

  }, [activeSlideIndex]);

  const containerShiftStyles = () => {
    const containerShift = lastPosition != 0 && slidesIndexLength > 0
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
              onTouchEnd={handleSlideSwipeEnd}
              onMouseDown={handleSlideSwipeStart}
              onMouseMove={handleSlideSwipeMove}
              onMouseUp={handleSlideSwipeEnd}
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
  slidesIndexLength: 0,
  activeSlideIndex: 0,
}

Gallery.propTypes = {
  children: propTypes.arrayOf(propTypes.node).isRequired,
  slidesIndexLength: propTypes.number.isRequired,
  activeSlideIndex: propTypes.number.isRequired,
}

export default Gallery;
