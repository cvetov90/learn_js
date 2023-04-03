"use strict";

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.slice(0, maxlength - 1) + String.fromCodePoint(8230);
  }
  return str;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) == "Вот, что мне хотело…";

truncate("Всем привет!", 20) == "Всем привет!";
