"use strict";

function f() {
  alert("Hello!");
}

Function.prototype.defer = function (ms) {
  // console.log(this)
  setTimeout(this, ms)
}

f.defer(1000); // выведет "Hello!" через 1 секунду