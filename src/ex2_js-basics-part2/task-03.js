"use strict";

function countEvenOdd(array) {
    let countEven = 0;
    let countOdd = 0;
    let countNull = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === 'number') {
            if (array[i] === 0) countNull++;
            else if (array[i] % 2 === 0) countEven++;
            else countOdd++;
        }
    }
    return [countEven, countOdd, countNull];
}

module.exports = countEvenOdd;