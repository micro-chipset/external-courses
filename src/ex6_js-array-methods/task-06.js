"use strict"

function reduceArray(array, callback, initialValue) {
    let previousValue = initialValue === undefined ? array[0] : initialValue;
    let i = initialValue === undefined ? 1 : 0;

    for (i; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array);
    }
    return previousValue;
}

module.exports = reduceArray;