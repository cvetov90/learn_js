"use strict";

let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false

/*
 * Возвращает true, если у объекта нет свойств, иначе false
 *
 * @param {object} obj Объект для которого проверяется наличие свойств
 * @return {boolean} возвращает true, если у объекта нет
 * свойств, иначе false
 */
function isEmpty(obj) {
  return Object.keys(obj).length ? false : true;
}
