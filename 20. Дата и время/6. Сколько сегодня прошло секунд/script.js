"use strict";

alert( getSecondsToday() ); // 36000 (3600 * 10)

function getSecondsToday() {
  let today = new Date()
  return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()
}
