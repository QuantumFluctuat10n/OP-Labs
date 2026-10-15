'use strict';

function sum(...args){
    let sum = 0, i = 0;
    while(i < args.length){
        sum += args[i];
        i++;
    }
    return sum;
}

console.log(sum(1, 2, 3));
console.log(sum());