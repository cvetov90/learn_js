"use strict";

console.log( sum(1)(2) == 3); // 1 + 2
console.log( sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log( sum(5)(-1)(2) == 6)
console.log( sum(6)(-1)(-2)(-3) == 0)
console.log( sum(0)(1)(2)(3)(4)(5) == 15)

function sum(operand1) {

  summator.result = operand1
  summator[Symbol.toPrimitive] = function() {
    return summator.result
  }

  function summator(operand2) {
    summator.result += operand2
    return summator
  };

  return summator
}
