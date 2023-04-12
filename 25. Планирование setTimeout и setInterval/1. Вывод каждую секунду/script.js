"use strict";

printNumbers(2, 7);

// Реализация через setTimeout
function printNumbers(from, to) {
  let i = from;
  let timerId = setTimeout(function displayNumber() {
    if (i <= to) {
      alert(i);
      i++;
      timerId = setTimeout(displayNumber, 1000)
    } else {
      clearTimeout(timerId);
    }
  }, 1000);
}

// Реализация через setInterval
/* function printNumbers(from, to) {
  let i = from;
  let timerId = setInterval(function () {
    if (i <= to) {
      alert(i);
      i++;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
} */
