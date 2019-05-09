"use strict"

function Calculator() {
    this.__result = 0;
}

Calculator.prototype = Object.create(Object.prototype);
Calculator.prototype.constructor = Calculator;

Calculator.prototype.__isNumber = function(number) {
    return typeof number === "number" && isFinite(number);
}

Calculator.prototype.getResult = function() {
    return this.__result;
}

Calculator.prototype.add = function(number = 0) {
    if (this.__isNumber(number)) {
        this.__result += number;
    }
    return this;
}

Calculator.prototype.subtract = function(number = 0) {
    if (this.__isNumber(number)) {
        this.__result -= number;
    }
    return this;
}

Calculator.prototype.multiply = function(number = 1) {
    if (this.__isNumber(number)) {
        this.__result *= number;
    }
    return this;
} 

Calculator.prototype.divide = function(number = 1) {
    if (this.__isNumber(number)) {
        this.__result /= number;
    }
    return this;
}