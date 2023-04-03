"use strict";

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);
alert(
  "menu width=" + menu.width + 
  " height=" + menu.height + " title=" + menu.title
);
// после вызова функции
/* menu = {
  width: 400,
  height: 600,
  title: "My menu"
}; */

/*
 * Умножает все числовые свойства объекта obj на 2
 *
 * @param {object} obj Объект с которым работает функция
 */
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
