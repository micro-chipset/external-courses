"use strict";

let object = Object.create({ a: 1 });
object.b = 2;

function findProperty(property, object) {
  if (!object.hasOwnProperty(property)) {
    return object[property];
  }
  return undefined;
}

module.exports = findProperty;
