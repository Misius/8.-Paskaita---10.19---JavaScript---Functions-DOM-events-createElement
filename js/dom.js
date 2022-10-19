'use strict';
console.log('dom.js');


let nuorodaiApp = document.getElementById('app');

console.log('nuorodaiApp ===',nuorodaiApp);

nuorodaiApp.style.backgroundColor = 'tomato';

console.log('nuorodaiApp.childern ===', nuorodaiApp.children);

const alliEls = document.querySelectorAll('.listEl')

console.log('allLiEls ===', allLiEls);

// gauti tuos pacius list elementus su getElementsByClassName

// let allLiElClass = document.getElementsByClassName('listEl');

// allLiElClass.style.backgroundColor = 'blue';

// pakeisti vidurinio li elemento fono spalva i zalia
