'use strict';

function random(min, max){
    if (max === undefined) {
        max = min;
        min = 0;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(1, 10));
console.log(random(10));


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

function generateKey(length, characters) {
    let password = '';
    for(let i = 0; i < length; i++){
        password += characters[random(characters.length)];
    }
    return password;
}

console.log(key);
