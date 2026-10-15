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
    let qwe = [];
    for(let func in iface){
        qwe.push([func, iface[func].length]);
    }
    return qwe;
}

console.log(introspect(iface));