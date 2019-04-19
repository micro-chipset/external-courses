"use strict";

function lowerCamelCase(string) {
  let newString = string.toLowerCase();
  let array = newString.split(" ");

  for (let i = 1; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }

  newString = array.join("");
  return newString;
}

module.exports = lowerCamelCase;
