"use strict";

console.log(sum(1)(2)); //== 3; // 1 + 2
sum(1)(2)(3); //== 6; // 1 + 2 + 3
sum(5)(-1)(2); //== 6
sum(6)(-1)(-2)(-3); //== 0
sum(0)(1)(2)(3)(4)(5); //== 15

function sum(operand1) {
  return function(operand2) {
    // console.log(operand1 + operand2);
    return sum(operand1 + operand2);
  };
}
