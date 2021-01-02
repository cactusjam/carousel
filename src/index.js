import React from "react";
import ReactDOM from "react-dom";
import CarouselContainer from "./components/carousel-list/carousel-list";
import slides from './mocks/slides';

ReactDOM.render(
  <CarouselContainer images={slides}/>,
  document.getElementById(`root`)
);
