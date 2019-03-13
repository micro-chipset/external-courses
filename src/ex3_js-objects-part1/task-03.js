"use strict"

function findStringInObject(string, object) {
    return string in object;
}

module.exports = findStringInObject;