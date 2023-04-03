"use strict";

let x = +prompt('x', '')
let n = +prompt('n', '')


function checkNatural(number) {
  return Number.isInteger(number) && (number > 0)
}

function pow(x, n) {
  return x ** n
}

if(checkNatural(n)) {
alert(pow(x, n))
}
else {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`)
}