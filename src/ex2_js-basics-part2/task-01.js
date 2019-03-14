"use strict";

function determineType(argument) {
  if (isNaN(argument)) return undefined;
  switch (typeof argument) {
    case "number":
      return "number";
    case "string":
      return "string";
    default:
      return undefined;
  }
}

module.exports = determineType;
