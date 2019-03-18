"use strict"

let calculator = (function () {
    let result = 0;

    return {
        add: function add(number) {
            if (typeof number === "number" && !isNaN(number)) {
                result += number;
            }
            return add;
        },

        subtract: function subtract(number) {
            if (typeof number === "number" && !isNaN(number)) {
                result -= number;
            }
            return subtract;
        },

        divide: function divide(number) {
            if (typeof number === "number" && !isNaN(number)) {
                result /= number;
            }
            return divide;
        },

        multiply: function multiply(number) {
            if (typeof number === "number" && !isNaN(number)) {
                result *= number;
            }
            return multiply;
        },

        getResult: function getResult() {
            return result;            
        },

        reset: function reset() {
            result = 0;
            return result;            
        },        
    };    
}());

module.exports = calculator;