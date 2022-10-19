'use strict';
console.log('domPr.js');


// 1. pakeisti h1 antrastes texta 'Dynamic Heading'

const h1El = document.querySelector('#mainHeading');

console.log('h1El ===', h1El);

h1El.textContent = 'Dynamic Heading';

// 2. nustatyti h1 fonto dydi i 57px

h1El.style.fontSize = '57px';

// 3. <p id="art__text">Lorem ipsum dolor</p> gauti ir atspausdinti konsolelje sito elemento teksta

const aText = document.querySelector('#art__text');

console.log('aText ===', aText.textContent);

// 4. atvaizduoti konsoleje kolekcija arba nodelist is <ul id="colors" class="list"> elemento li elementu.

const colorsId = document.querySelectorAll('#colors li');

console.log('colorsId ===', colorsId);

// 5. nusitaikyti ir pakeisti teksta <p id="art__date">Date</p> i 2022-10-19

const aDate = document.querySelector('#art__date');

aDate.textContent = '2022-10-19';

const now = new Date();

console.log(now.toLocaleDateString());
aDate.textContent = now.toLocaleDateString();

// 6. pakeisti paskutinio <ul id="colors" class="list"> elemento spalva i tomato

// colorsId[2].style.color = 'tomato';

const lastColorsId = document.querySelectorAll('#colors li:last-child');

lastColorsId.style.color = 'tomato';

