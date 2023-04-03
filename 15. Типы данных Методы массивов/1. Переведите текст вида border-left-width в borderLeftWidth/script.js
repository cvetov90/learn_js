"use strict";

function camelize(str) {
let arr = str.split('')
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '-') {
        arr.splice(i, 1)
        arr[i] = arr[i].toUpperCase()
    }
}
return arr.join('')
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';