"use strict"

function AccountantCalculator() {
    Calculator.call(this);
}

AccountantCalculator.prototype = Object.create(Calculator.prototype);
AccountantCalculator.prototype.constructor = AccountantCalculator;

AccountantCalculator.prototype.rubInUsd = function (rub = 1) {
    if (this.__isNumber(number)) {
        this.__result = +(rub / 65).toFixed(2);
    }
    return this;
}

AccountantCalculator.prototype.usdInRub = function (usd = 1) {
    if (this.__isNumber(number)) {
        this.__result = +(usd * 65).toFixed(2);
    }
    return this;
}

AccountantCalculator.prototype.round = function (number = 1) {
    if (this.__isNumber(number)) {
        this.__result = Math.round(number)
    }
    return this;
}