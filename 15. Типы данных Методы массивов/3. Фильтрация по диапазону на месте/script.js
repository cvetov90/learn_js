"use strict";

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 2, 5); // удалены числа вне диапазона 1..4
alert(arr); // [3, 1]

function filterRangeInPlace(arr, a, b) {
  let deleteIndexArray = arr.filter((item) => item < a || item > b);
  deleteIndexArray.forEach(item => {
    let deleteIndex = arr.indexOf(item)
    arr.splice(deleteIndex, 1)
  })
}
