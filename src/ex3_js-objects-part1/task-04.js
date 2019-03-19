"use strict"

function addPropertyIfNotFind(string, object) {
    let newObject = object;

    if (!newObject.hasOwnProperty(string)) newObject[string] = "new";
    return newObject;
}

module.exports = addPropertyIfNotFind;