'use strict';

function ipToNum(ip){
    const arr = ip.split('.').map(Number);
    
    arr[0] = arr[0] << 8 << 8 << 8;
    arr[1] = arr[1] << 8 << 8;
    arr[2] = arr[2] << 8;

    return arr.reduce(function(a, b){
        return a + b;
    })
}

console.log(ipToNum("127.0.0.1"));