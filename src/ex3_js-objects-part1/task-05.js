"use strict"

function copyObject(object) {
    let clone = {};
    for (let key in object) {
        clone[key] = object[key];
    }
    return clone;
}

module.exports = copyObject;