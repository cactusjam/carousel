import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/gallery/gallery";
import slides from './mocks/slides';


// let sliderControl = document.querySelectorAll(`CarouselSnapper`);

// sliderControl.forEach(function (component) {
// 	component.addEventListener('click', function () {
//     let dataSlider = component.getAttribute('data-slide');

// 		slider.forEach(function (component) {
// 			if (dataSlider === component.getAttribute('data-slide')) {
// 				component.classList.remove('covered');
// 			} else {
// 				component.classList.add('covered');
// 			}
// 		});
// 	});
// });


ReactDOM.render(
  <Gallery images={slides}/>,
  document.getElementById(`carousel`)
);
