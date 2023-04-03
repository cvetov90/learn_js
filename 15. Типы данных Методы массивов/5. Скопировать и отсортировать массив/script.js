"use strict";

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
  let copyArray = arr.slice();
  return copyArray.sort((a, b) => a.localeCompare(b));
}
