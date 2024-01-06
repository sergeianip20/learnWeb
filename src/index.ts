import { square } from './math.js';
import printMe from './print.js';
import './styles.css';

function component() {
    const element = document.createElement('pre');
  const btn = document.createElement('button');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + square(5, 5)
  ].join('\n\n');

  

  return element;
}


