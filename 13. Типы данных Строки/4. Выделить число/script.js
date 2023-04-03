"use strict";

function extractCurrencyValue(str) {
return parseInt(str.slice(1))
}

alert( extractCurrencyValue('$120') === 120 ); // true