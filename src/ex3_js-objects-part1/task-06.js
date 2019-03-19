"use strict"

function deepCopyObject(object) {
    let clone = {};

    for (let key in object) {
        if (typeof (object[key]) === 'object' && object[key] !== null) {
            if (Array.isArray(object[key])) {
                clone[key] = [];
                clone[key].push(deepCopyObject(object[key][0]));
            } else {
                clone[key] = deepCopyObject(object[key]);
            }
        } else {
            clone[key] = object[key];
        }
    }
    return clone;
}

module.exports = deepCopyObject;