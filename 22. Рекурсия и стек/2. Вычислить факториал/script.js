"use strict";

alert( factorial(5) );

function factorial(n) {
    if(n == 1) {
        return n
    }
    else {
        return n * factorial(n - 1)
    }
}