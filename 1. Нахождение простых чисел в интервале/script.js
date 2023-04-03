"use strict";

let startValue = 2;
let lim = 10;
let result = [];

for (let n = startValue; n <= lim; n++) {
  let flag = false;
  for (let devider = 2; devider < n; devider++) {
    if (n % devider === 0) {
      flag = true;
    }
  }
  
  if(!flag) {
    result.push(n)
  }
}

alert(result);
