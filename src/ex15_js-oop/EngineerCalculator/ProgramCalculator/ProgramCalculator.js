"use strict"

function ProgramCalculator() {
    Calculator.call(this);
}

ProgramCalculator.prototype = Object.create(EngineerCalculator.prototype);
ProgramCalculator.prototype.constructor = ProgramCalculator;

ProgramCalculator.prototype.random = function () {
    this.__result = Math.random();
    return this;
}