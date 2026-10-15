'use strict';

function average(a, b){
    return (a + b) / 2;
}

function square(x){
    return x*x;
}

function cube(x){
    return x*x*x;
}

function calculate(){
    const arr = [];
    for(let i = 0; i < 9; i++){
        arr.push(average(square(i), cube(i)));
    }
    return arr;
}

console.log(calculate());