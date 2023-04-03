"use strict";

function ucFirst(str) {
  if (str !== "") {
    str = str.trim().at(0).toUpperCase() + str.slice(1);
  }
  return str;
}

ucFirst("вася") == "Вася";
