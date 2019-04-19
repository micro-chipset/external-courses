"use strict";

/*
 * indexOf возвращает индекс первого вхождения и -1 если значение не найдено
 */

function findSubString(string, subString) {
  if (string.indexOf(subString) !== -1) {
    return true;
  }
  return false;
}

module.exports = findSubString;
