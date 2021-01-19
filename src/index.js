import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import slides from './mocks/slides';

ReactDOM.render(
  <App images={slides}/>,
  document.getElementById('carousel')
);
