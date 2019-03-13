"use strict";

function isAllItemEqual(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[0] !== array[i]) {
            return false;
        }
    }
    return true;
}

module.exports = isAllItemEqual;