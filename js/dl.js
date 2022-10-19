'use strict';
console.log('dl.js');



/*
Kai paspaužiu ant sarašo el, noriu jį ištrinti



*/

document.body.addEventListener('click', (event) => {
    // anoniminė arrow funkcija
    console.log('paspaudei');
    // event.target - elementas ant kurio paspaudėm
    console.log('event.target ===', event.target);
    console.log('event.target.className ===', event.target.className);
    // event.target.style.backgroundColor = '#333';
    // event.target.remove();
    // ant elemento kurį turi className deleteMe ta elementą ištrinti
    if (event.target.className === 'deleteMe') {
        event.target.remove();
        console.log('Bye bye');
    }
})

 function deleteMe() {

 }


