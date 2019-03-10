"use strict"

function findStringInObject (string, object) {
    let result = false;
    for (let key in object) {
        if (string === key) result = true;
    }
    return result;
}

module.exports = findStringInObject;