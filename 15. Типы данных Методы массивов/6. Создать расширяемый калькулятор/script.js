"use strict";

let calc = new Calculator();
alert(calc.calculate("3 + 7")); // 10
alert(calc.calculate('a + 7'))
alert(calc.calculate('4 - g'))
alert(calc.calculate("4 ^ 8"))

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert(result); // 8

function Calculator() {
  this.numberExpressions = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function (str) {
    let expressionArray = str.split(" ");
    if (this.checkExpression(expressionArray)) {
      return this.numberExpressions[expressionArray[1]](
        +expressionArray[0],
        +expressionArray[2]
      );
    } else {
        return "Обнаружена ошибка в выражении"
    }
  };

  this.addMethod = function (name, func) {
    this.numberExpressions[name] = func;
  };

  this.checkExpression = function (arr) {
    if (!isFinite(arr[0])) {
      alert("Первый операнд не является числом");
      return false;
    }
    if (!isFinite(arr[2])) {
      alert("Второй операнд не является числом");
      return false;
    }
    if (!(arr[1] in this.numberExpressions)) {
      alert("Метод не поддерживается калькулятором");
      return false;
    }
    return true;
  };
}
