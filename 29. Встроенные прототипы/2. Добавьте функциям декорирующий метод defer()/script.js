"use strict";

function f(a, b) {
  alert(a + b);
}

Function.prototype.defer = function (ms) {
  // console.log(this)
  // setTimeout(this, ms)
  let context = this
  return function () {
    // console.log(context, ...arguments)
    setTimeout(context, ms, ...arguments);
  };
};

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
