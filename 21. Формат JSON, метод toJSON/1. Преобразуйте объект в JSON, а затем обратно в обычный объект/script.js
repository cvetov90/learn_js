"use strict";

let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.stringify(user)
let newUser = JSON.parse(json)

console.log(`${typeof json}, ${json}`)
console.log(json)
console.log(`${typeof newUser}, ${newUser}`)
console.log(newUser)