"use strict";

function displayArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    console.log(array.length);
}

module.exports = displayArray;