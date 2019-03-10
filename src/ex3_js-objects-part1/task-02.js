"use strict"

function displayObject(object) {
    for (let key in object) {
        if ({}.hasOwnProperty.call(object, key)) {
            console.log(`${key}: ${object[key]}`);
        }
    }
}

module.exports = displayObject;