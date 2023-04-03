"use strict";

function random(min, max) {
let result
do {
    result = Math.random() * max
} while (result >= min && result < max);
return result
}

alert( random(1, 5) )
alert( random(1, 5) )
alert( random(1, 5) )