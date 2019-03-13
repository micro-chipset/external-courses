"use strict";

function isAllItemEqual(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] !== array[j]) {
                return false;
            }
        }
    }
    return true;
}

module.exports = isAllItemEqual;