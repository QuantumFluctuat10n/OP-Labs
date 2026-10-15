'use strict';

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}

function introspect(){
    let arr = [];
    for(let func in iface){
        arr.push([func, iface[func].length]);
    }
    return arr;
}

console.log(introspect(iface));