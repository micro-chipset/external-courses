"use strict";

function isAllItemEqual(array) {
    let isEqual = true;

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[i] !== array[j]) {
                return false;
            }
        }
    }
    return isEqual;
}

module.exports = isAllItemEqual;