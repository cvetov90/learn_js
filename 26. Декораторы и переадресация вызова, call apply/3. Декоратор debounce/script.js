"use strict";

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

function debounce(f, ms) {
  let lastCall = null;
  return function (...args) {
    if (lastCall === null || Date.now() - lastCall >= ms) {
      lastCall = Date.now();
      return f.apply(this, args);
    }
  };
}
