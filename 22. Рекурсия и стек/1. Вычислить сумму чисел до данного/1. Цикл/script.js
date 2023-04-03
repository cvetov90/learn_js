"use strict";

console.log(sumTo(1) == 1);
console.log(sumTo(2) == 3);
console.log(sumTo(3) == 6);
console.log(sumTo(4) == 10);
let start = Date.now();
console.log(sumTo(100) == 5050);
console.log(sumTo(100000));
let end = Date.now() - start;
console.log(end);

function sumTo(n) {
  let sum = 0;
  while (n > 0) {
    sum += n;
    n--;
  }
  return sum;
}
