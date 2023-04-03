"use strict";

// Дано
/* function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
} */

// Переписано на оператор ?
/* function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?')
} */

// Переписано на оператор ||
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?')
}

checkAge(25);
