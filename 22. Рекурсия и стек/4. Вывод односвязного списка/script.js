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
  while (true) {
    console.log(obj.value);
    if (obj.next != null) {
      obj = obj.next;
    } else {
      break;
    }
  }
} */

// Рекурсия
function printList(list) {
  console.log(list.value)
  if(list.next != null) printList(list.next)
}
