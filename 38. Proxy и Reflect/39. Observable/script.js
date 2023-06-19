"use strict";

function makeObservable(target) {
  let handlerSave = null
  target.observe = function (handler) {
    handlerSave = handler
  }
  return new Proxy (target, {
    set(target, property, value, receiver) {
      handlerSave(property, value)
    }
  })
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John