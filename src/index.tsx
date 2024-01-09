import { square } from './math';
import printMe from './print.js';


function component() {
    const element = document.createElement('pre');
  const btn = document.createElement('button');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + square(5, 5)
  ].join('\n\n');

  

  return element;
}


