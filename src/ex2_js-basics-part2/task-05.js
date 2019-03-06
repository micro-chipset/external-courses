"use strict";

function maxItemArray (array) {
    function compareNumeric (a, b) {
        return a - b;
    }
    array.sort(compareNumeric);
    return array[array.length - 1];
}

module.exports = maxItemArray;