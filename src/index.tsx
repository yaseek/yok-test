import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

const targetElement = document.querySelector('.header + .content + *');
const destinationElement = document.createElement('div');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  destinationElement,
  () => {
    targetElement?.before(destinationElement);
    targetElement?.remove();
  }
);
