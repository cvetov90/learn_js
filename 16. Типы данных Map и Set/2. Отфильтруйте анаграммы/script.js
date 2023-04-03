"use strict";

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
console.log(aclean(arr));

/* function aclean(arr) {
  let result = []
  for(let item of arr) {
    result.push( item.toLowerCase().split('').sort().join('') )
  }
  return Array.from( new Set(result) )
} */

function aclean(arr) {
  let keysSet = new Set();
  for (let item of arr) {
    keysSet.add( item.toLowerCase().split("").sort().join("") );
  }

  let resultMap = new Map()
  for(let item of keysSet) {
    resultMap.set(item, [])
  }

  for(let item of arr) {
    let key = item.toLowerCase().split("").sort().join("")
    if(resultMap.has(key)) {
      resultMap.get(key).push(item)
    }
  }

  let resultArray = []
  for(let item of resultMap.values()) {
    resultArray.push(item[Math.round(Math.random()*(item.length - 1))])
  }

  return resultArray;
}
