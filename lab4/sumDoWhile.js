'use strict';

function sum(...args){
    let sum = 0, i = 0;
    if(args.length != 0){
        do{
            sum += args[i];
            i++;
        } while (i < args.length)
    }
    return sum;
}

console.log(sum(1, 2, 3));
console.log(sum());