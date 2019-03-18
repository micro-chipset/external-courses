"use strict"

function sliceArray(array, begin, end) {
    let newArray = [], beginPosition, endPosition;

    // если нет begin, end копируем весь массив
    // если есть то копируем от begin  до end
    if (begin === undefined) beginPosition = 0;
    else beginPosition = begin;

    if (end === undefined || end >= array.length) endPosition = array.length;
    else endPosition = end;

    // если параметры bigin, end отрицательные отчет с конца массива
    if (begin < 0) beginPosition += array.length;
    if (end < 0) endPosition += array.length;

    for (let i = beginPosition; i < endPosition; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

module.exports = sliceArray;