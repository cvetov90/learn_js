"use strict";

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

function fib(n) {
return Math.round((((1 + Math.sqrt(5))/2) ** n - ((1-Math.sqrt(5))/2)**n)/Math.sqrt(5))
}

/* function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // вычисляется очень долго
 */

/* function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  alert( fib(3) ); // 2
  alert( fib(7) ); // 13
  alert( fib(77) ); // 5527939700884757 */