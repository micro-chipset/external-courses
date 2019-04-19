"use strict";

function counterSimbolString(string) {
  let object = {};

  // перебираем элементы строки в цикле и записывает результат в объект
  // если элемент в объекте не найден записывает еденицу если уже найден значит увеличим значение.
  for (let i = 0; i < string.length; i++) {
    object[string[i]] =
      object[string[i]] === undefined ? 1 : object[string[i]] + 1;
  }

  // выведем результат собранный в объекте
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(`Символ ${key} встречается в строке ${object[key]} раз`);
    }
  }
}

module.exports = counterSimbolString;
