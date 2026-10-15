'use strict';

function range(start, end){
    let nums = new Array(end - start);
    nums[0] = start;
    nums[nums.length] = end;

    for (let i = 1; i < nums.length; i++){
        nums[i] = nums[i-1] + 1;
    }

    return nums;
}

function rangeOdd(start, end){
    let nums = new Array(Math.floor((end - start) / 2) + 1);
    nums[0] = start % 2 == 0 ? start + 1 : start;

    for (let i = 1; i < nums.length; i++){
        nums[i] = nums[i-1] + 2;
    }

    return nums;
}

console.log(range(15, 30));
console.log(rangeOdd(15, 30));