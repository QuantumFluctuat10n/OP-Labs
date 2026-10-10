'use strict';

const a = 5; 
const b = inc(a);

function inc(n){
    return n++;
}

console.dir({a, b});



const obj = {n: 5};

function incObj(num){
    num.n++;
}

incObj(obj);
console.dir(obj);