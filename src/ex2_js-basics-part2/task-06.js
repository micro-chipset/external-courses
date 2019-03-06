"use strict";

/*
 * Число  является простым, если оно больше 1 и при этом делится без остатка только на 1 и на само себя.
 */

function isSimpleNumber(number) {
  let result;

  if (typeof number !== "number" || number < 2 || number > 1000 || isNaN(number)) {
    result = "Данные неверны";
  } else {
    result = `Число ${number} - простое число`;
    for (let i = number - 1; i > 1; i--) {
      if (number % i === 0) {
        result = `Число ${number} - составное число`;
      }
    }
  }
  return result;
}

module.exports = isSimpleNumber;
