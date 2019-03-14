"use strict";

function sliceString(string, num) {
  if (string.length < num) return string;
  return `${string.slice(0, num - 1)}…`;
}

module.exports = sliceString;
