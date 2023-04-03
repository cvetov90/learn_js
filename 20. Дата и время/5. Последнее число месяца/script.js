"use strict";

alert( getLastDayOfMonth(2012, 1) ) // 29

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month)
  date.setMonth(date.getMonth() + 1)
  date.setDate(date.getDate() - 1)
  return date.getDate()
}
