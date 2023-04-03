"use strict";

console.log(sumTo(1) == 1);
console.log(sumTo(2) == 3);
console.log(sumTo(3) == 6);
console.log(sumTo(4) == 10);
let start = Date.now();
console.log(sumTo(100) == 5050);
let end = Date.now() - start;
console.log(end);
console.log(sumTo(100000));


function sumTo(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumTo(n-1);
  }
}
