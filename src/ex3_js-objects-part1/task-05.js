"use strict"

function copyObject(object) {
    let clone = {};
    for (let key in object) {
        if ({}.hasOwnProperty.call(object, key)) {
            clone[key] = object[key];
        }
    }
    return clone;
}

module.exports = copyObject;