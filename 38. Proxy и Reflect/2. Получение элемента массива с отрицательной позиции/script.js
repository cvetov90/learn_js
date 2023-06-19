"use strict";

let array = [1, 2, 3];

array = new Proxy(array, {
get(target, prperty, receiver){
  if(prperty < 0) {
    let reverseArr = target.slice(prperty)
    return reverseArr[0]
  }
  else {
    return target[prperty]
  }
}
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2
alert( array[0])

// вся остальная функциональность массивов должна остаться без изменений
