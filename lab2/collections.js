'use strict';

const data1 = [
    {name: "Marcus Aurelius", phone: "+380974567892"},
    {name: "Benjamin Netanyahu", phone: "+380323426731"},
    {name: "Fidi Midi", phone: "+380501234567"}
];

function findPhoneByName1(name){
    for(let person of data1){
        if(person.name === name){
            return person.phone;
        }
    }
    return undefined;
}

console.log(findPhoneByName1("Fidi Midi"));



const data2 = {
    "Marcus Aurelius": "+380974567892",
    "Benjamin Netanyahu": "+380323426731",
    "Fidi Midi": "+380501234567"
};

function findPhoneByName2(name){
    return data2[name];
}
console.log(findPhoneByName2("Fidi Midi"));