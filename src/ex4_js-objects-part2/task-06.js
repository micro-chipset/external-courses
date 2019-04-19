"use strict";

function firstLetterWordUpperCase(string) {
  let array = string.split(" ");

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }

  let newString = array.join(" ");
  return newString;
}

module.exports = firstLetterWordUpperCase;
