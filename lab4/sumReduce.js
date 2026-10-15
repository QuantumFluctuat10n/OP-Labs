'use strict';

function sum(...args){
    return args.reduce(function(a, b){
        return a + b;
    }, 0);
}

console.log(sum(1, 2, 3));
console.log(sum());