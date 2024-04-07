// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#switch');
const container = document.querySelector('body');
const header = document.querySelector('header');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
    header.setAttribute('class', 'light')
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    header.setAttribute('class', 'dark');
  }
});