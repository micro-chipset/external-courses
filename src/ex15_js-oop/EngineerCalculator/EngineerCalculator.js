"use strict"

function EngineerCalculator() {
    Calculator.call(this);
}

EngineerCalculator.prototype = Object.create(Calculator.prototype);
EngineerCalculator.prototype.constructor = EngineerCalculator;

EngineerCalculator.prototype.log = function (number = 1) {
    if (this.__isNumber(number)) {
        this.__result = Math.log(number)
    }
    return this;
}

EngineerCalculator.prototype.log2 = function (number = 1) {
    if (this.__isNumber(number)) {
        this.__result = Math.log2(number)
    }
    return this;
}

EngineerCalculator.prototype.log10 = function (number = 1) {
    if (this.__isNumber(number)) {
        this.__result = Math.log10(number)
    }
    return this;
}

EngineerCalculator.prototype.sqrt = function (number = 1) {
    if (this.__isNumber(number)) {
        this.__result = Math.sqrt(number)
    }
    return this;
}

