"use strict";

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readTime = new WeakMap()

readTime.set(messages[0], 'Date')
readTime.set(messages[1], new Date(2017, 1, 1))

messages.slice(1, 1)
console.log(readTime)