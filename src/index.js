import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/gallery/gallery";
import slides from './mocks/slides';

ReactDOM.render(
  <Gallery images={slides}/>,
  document.getElementById(`carousel`)
);
