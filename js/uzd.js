'use strict';
console.log('uzd.js');




/*
prosideti id pagal poreiki
panaudoti tiek getElementById tiek querySelector() ar querySelectorAll()



*/

// 1. Pakeisti h1 teksto spalva i tomato
const h1 = document.querySelector('#h1El');
h1.style.color = 'tomato';
// 2. Padaryti kad fonto storis butu normalus h2

const h2 = document.querySelector('#h2El');
h2.style.fontWeight = 'normal';

// 3. pakeisti teksta i 'man pavyko dinamiskai atnaujinti teksta'

const tekstas = document.querySelector('#tekstas');
tekstas.textContent = 'man pavyko dinamiskai atnaujinti teksta ';

// 4. Padidinti srifto dydi iki 34 px li2


const listEl = document.querySelector('#list :nth-child(2)');
listEl.style.fontSize ='34px';


// 5. paspaudus mygtuka <button>click me</button> pakeisti h1 teksta i 'Pakeiciau su mygtuku'

const clickMe = document.getElementById('clickMe');
function h1Change () {
    h1.textContent = 'Pakeiciau su mygtuku';
}
clickMe.addEventListener('click', h1Change);

// 6. <p class="time">12:45</p> elementui pakeisti teksta i dabartini laika pvz '13:50' ir padaryti pastorinta srifta

tekstas.textContent += new Date().toLocaleString('Lt-lt', {timeStyle: 'medium'})

// 7. <li>one</li> istrinti

// const listElRemove1 = document.querySelector('#list :first-child');

listElRemove1.remove();

// 8. paspaudus <button>make article dark</button> padaryti <article> fona juoda, o teksta balta

const makeDark = document.getElementById('makeDark');
function toggleBodyDark () {
    //  ar body spalva #333
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
    
}
makeDark.addEventListener('click', toggleBodyDark);

// 9. paspaudus <button>delete first li from list</button> istrinti pirma li el is <ol>



// // sunkesnis tiems kas norit extra



// 10. susikurti masyva su spalvomis red, green, blue, violet, pink, black



// 10.1 sugeneruoti li elementu stringa is masyvo



// 10.2 i <ol> elemento vidu ideti ta stringa (olEl.innerHTML = generatedString)



// 10.3 padaryti kad kiekvienas elementas turetu fono spalva tokia kokia yra irasyta tarp li tagu.


