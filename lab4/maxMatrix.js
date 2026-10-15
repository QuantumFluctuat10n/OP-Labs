'use strict';

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

function max(matrix){
    let temp = matrix[0][0];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] > temp){
                temp = matrix[i][j];
            }
        }
    }
    return temp;
}

console.log(m);