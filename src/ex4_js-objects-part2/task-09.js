"use strict";

function subString(string, subString, number) {
  // выделим по слову в массив начало строки
  let arrayStart = string.split(" ", number + 1);
  // выделим по слову в массив всю строку
  let array = string.split(" ");
  // получим конец строки
  let arrayEnd = array.slice(number + 1);
  // добавим к началу строки subString
  arrayStart.push(subString);
  // соберем полную строку
  return `${arrayStart.join(" ")} ${arrayEnd.join(" ")}`;
}

module.exports = subString;
