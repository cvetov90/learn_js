"use strict";

let user = {
  name: "John",
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      return target.hasOwnProperty(prop) ? target[prop] : new Error('Ошибка: такого свойства не существует')
    },
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: такого свойства не существует
