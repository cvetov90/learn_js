"use strict";

function makeCounter() {
  //  Решение через замыкание
  let count = 0
  counterWorker.set = function(newCountValue) {
    count = newCountValue
  }
  counterWorker.decrease = function() {
    count--
  }
  function counterWorker() {
    return count++
  }
  return counterWorker

  // Решение через свойства функции
/*   counterWorker.count = 0;
  counterWorker.set = function(newCountValue) {
    counterWorker.count = newCountValue
  }
  counterWorker.decrease = function() {
    counterWorker.count--
  }
  function counterWorker() {
    return counterWorker.count++
  }

  return counterWorker */
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

console.log(counter)
counter.set(10); // установить новое значение счётчика

alert( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

alert( counter() ); // 10 (вместо 11)