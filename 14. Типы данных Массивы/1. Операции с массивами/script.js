"use strict";

let styles = ["Джаз", "Блюз"];
console.log(styles)
styles.push("Рок-н-ролл");
console.log(styles)
styles = arrInsertMiddleElement(styles, "Классика");
console.log(styles)
console.log(styles.shift());
console.log(styles)
styles.unshift("Рэп", "Регги");
console.log(styles)

function arrInsertMiddleElement(arr, insertElement) {
  let halfLength = arr.length / 2;
  if (arr.length % 2) {
    arr[Math.trunc(halfLength)] = insertElement;
  } else {
    arr[halfLength] = arr[halfLength - 1] = insertElement;
  }
  return arr;
}
