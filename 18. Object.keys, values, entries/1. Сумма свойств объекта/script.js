"use strict";

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {
  let sumZp = 0
  for(let zp of Object.values(salaries)) {
    sumZp += zp
  }

  return sumZp
}