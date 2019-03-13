"use strict";

function compareNumeric(a, b) {
    return a - b;
}

function maxItemArray(array) {
    array.sort(compareNumeric);
    return array[array.length - 1];
}

module.exports = maxItemArray;