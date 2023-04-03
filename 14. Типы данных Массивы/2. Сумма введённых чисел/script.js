"use strict";

alert(sumInput());

function sumInput() {
  let arr = [];
  let sum = null;

  while (true) {
    let newNumber = prompt("Введите число", 0);
    if (newNumber === null || newNumber === "" || !isFinite(newNumber)) {
      break;
    } else {
      arr.push(+newNumber);
    }
  }

  for (let element of arr) {
    sum += element;
  }

  return sum;
}
