"use strict";

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073

function* pseudoRandom(seed) {
  let value
  for (let previous = seed; true; previous = value) {
    value = (previous * 16807) % 2147483647;
    yield value
  }
}
