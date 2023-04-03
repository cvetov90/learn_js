"use strict";

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(obj) {
  let result = {
    name: null,
    salary: 0,
  }

  for(let [name, salary] of Object.entries(obj)) {
    if(salary > result.salary) {
      result.name = name
      result.salary = salary
    }
  }

  return result.name
}

console.log( topSalary(salaries) )