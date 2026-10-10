'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', () => {}];

const hash = {};

for(const value of arr){
    hash[typeof(value)] = hash[typeof(value)] + 1 || 1;
}

console.dir(hash);