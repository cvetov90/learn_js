"use strict";

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printList(list);

// Цикл
/* function printList(list) {
  let obj = Object.assign({}, list);
  let result = [];

  while (true) {
    result.push(obj.value);
    if (obj.next != null) {
      obj = obj.next;
    } else {
      break;
    }
  }

  for (let i = result.length - 1; i >= 0; i--) {
    console.log(result[i]);
  }
} */

// Рекурсия
function printList(list) {
  // console.log(list.value)
  if(list.next != null) printList(list.next)
  console.log(list.value)
}
