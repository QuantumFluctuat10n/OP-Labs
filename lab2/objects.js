'use strict';

function fn(){
    const obj1 = new Object({name: "Alice"});
    let obj2 = new Object({name: "Bob"});

    obj1.name = "Charlie";
    obj2.name = "Tom";

    const obj3 = {name: "Jason"};

    // obj1 = obj3;
    obj2 = obj3;

    console.log(obj1.name);
    console.log(obj2.name);
}

fn();

function createUser(name, city){
    return {name: name, city: city};
}

console.log(createUser("Alice", "New York"));