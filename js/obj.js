'use strict';
console.log('obj.js');


let bigObj = {
    title: 'Mr',
    sayHi(){
        console.log('Hi');
    },
    address: {
        street: 'Main street',
        nr: 123,
        coords: {
            x: 457,
            y: 545,
        },
    },
};

bigObj.sayHi();

bigObj.title  //'Mr'

bigObj.address.street //'Main Street'

bigObj.address.coords.x // 457

console.log(`${bigObj.title} lives in ${bigObj.address.street}, number ${bigObj.address.nr}.`);
console.log(bigObj);