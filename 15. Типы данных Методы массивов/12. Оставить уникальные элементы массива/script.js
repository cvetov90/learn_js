"use strict";

function unique(arr) {
  let resultArr = []
  for(let item of arr) {
    if(!resultArr.includes(item)) {
      resultArr.push(item)
    }
  }

  return resultArr
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O