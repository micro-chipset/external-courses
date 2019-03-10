"use strict"

function displayObject(object) {
    if (typeof (object) === 'object') {
        for (let key in object) {
            console.log(`${key}: ${object[key]}`);
        }
    }
}

module.exports = displayObject;