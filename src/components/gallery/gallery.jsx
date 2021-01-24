
// import React, { useState } from 'react';
// import propTypes from 'prop-types';

// import { Slides, Slide } from './styled';

// const Gallery = (props) => {
//   const {
//     children,
//     images,
//     activeSlideIndex,
//     setActiveSlideIndex }
//     = props;

//   const [firstPosition, setFirstPosition] = useState(0);
//   const [lastPosition, setLastPosition] = useState(0);

//   const imagesIndexLength = images.length === 0 ? 0 : images.length - 1;
//   const positionDelta = lastPosition - firstPosition;

//   const containerShift = lastPosition != 0 && images.length > 1
//     ? Math.round(positionDelta)
//     : 0;

//   const handleSlideTouchStart = evt => {
//     if (images.length > 1) {
//       setFirstPosition(evt.nativeEvent.touches[0].pageX);
//     }
//   };

//   const handleSlideTouchMove = evt => {
//     if (images.length > 1) {
//       setLastPosition(evt.nativeEvent.touches[0].pageX);
//     }
//   };

//   const handleSlideTouchEnd = () => {
//     if (lastPosition > 0) {
//       if (positionDelta >= 40) {
//         const newIndex = activeSlideIndex === 0 ? imagesIndexLength : activeSlideIndex - 1;
//         setActiveSlideIndex(newIndex)
//       }

//       if (positionDelta <= -40) {
//         const newIndex = activeSlideIndex < imagesIndexLength ? activeSlideIndex + 1 : 0;
//         setActiveSlideIndex(newIndex)
//       }
//     }

//     setFirstPosition(0);
//     setLastPosition(0);
//   };

//   return (
//     <Slides containerShift={containerShift}>

//       {React.Children.map(children, (child, index) => {
//         const isActive = index === activeSlideIndex;
//         const leftIndent = 100 * (index - activeSlideIndex);

//         return (
//           <Slide
//             key={index}
//             isActive={isActive}
//             leftIndent={leftIndent}
//             onTouchStart={handleSlideTouchStart}
//             onTouchMove={handleSlideTouchMove}
//             onTouchEnd={handleSlideTouchEnd}
//             positionDelta={positionDelta}
//           >
//             {child}
//           </Slide>
//         )
//       })}

//     </Slides>
//   );
// }

// Gallery.defaultProps = {
//   images: [],
//   activeSlideIndex: 0,
// }

// Gallery.propTypes = {
//   children: propTypes.arrayOf(propTypes.node).isRequired,
//   images: propTypes.array.isRequired,
//   activeSlideIndex: propTypes.number.isRequired,
//   setActiveSlideIndex: propTypes.func.isRequired,
// }

// export default Gallery;

import React, { useState, useEffect } from "react";
import propTypes from 'prop-types';

import { Slides, Slide } from './styled';

const Gallery = ({ children, images, activeSlideIndex, setActiveSlideIndex }) => {

  const [currentIndex, setCurrentIndex] = useState(activeSlideIndex);
  const [canTransition, setCanTransition] = useState(true);
  const [firstPosition, setFirstPosition] = useState(0);
  const [lastPosition, setLastPosition] = useState(0);

  // const lastSlideIndex = images.length - 1;
  const imagesIndexLength = images.length === 0 ? 0 : images.length - 1;
  const positionDelta = lastPosition - firstPosition;

  const handleSlideTouchStart = evt => {
    if (images.length > 1) {
      setFirstPosition(evt.nativeEvent.touches[0].pageX);
    }
  };

  const handleSlideTouchMove = evt => {
    if (images.length > 1) {
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

  const shift = -100 - currentIndex * 100;

  return (
    <Slides shift={shift} canTransition={canTransition}>
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
  );
}

Gallery.defaultProps = {
  images: [],
  activeSlideIndex: 0,
}

Gallery.propTypes = {
  children: propTypes.arrayOf(propTypes.node).isRequired,
  images: propTypes.array.isRequired,
  activeSlideIndex: propTypes.number.isRequired,
}

export default Gallery;
