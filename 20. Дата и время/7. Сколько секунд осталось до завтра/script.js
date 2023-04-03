"use strict";

alert( getSecondsToTomorrow() ); // 36000 (3600 * 10)

function getSecondsToTomorrow() {
  let today = new Date()
  return 24 * 3600 - (today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds())
}
