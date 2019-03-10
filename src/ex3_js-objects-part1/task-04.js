"use strict"

function addPropertyIfNotFind (string, object) {
    let isExists = false;
    let newObject = object;

    for (let key in newObject) {
        if (string === key) isExists = true;
    }
    if(!isExists) newObject[string] = "new";
    return newObject;
}

module.exports = addPropertyIfNotFind;