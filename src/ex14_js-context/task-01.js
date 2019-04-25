"use strict"

let calculator = {
    result: 0,

    add: function (number = 0) {
        if (typeof number === "number" && !isNaN(number)) {
            this.result += number;
        }
        return this;
    },

    subtract: function (number = 0) {
        if (typeof number === "number" && !isNaN(number)) {
            this.result -= number;
        }
        return this;
    },

    divide: function (number = 1) {
        if (typeof number === "number" && !isNaN(number)) {
            this.result /= number;
        }
        return this;
    },

    multiply: function (number = 1) {
        if (typeof number === "number" && !isNaN(number)) {
            this.result *= number;
        }
        return this;
    },

    getResult: function () {
        return this.result;            
    },

    reset: function () {
        this.result = 0;
        return this;            
    }, 
    setState: function (number = 0) {
        this.result = number;
        return this;
    },    
    
    fetchData: function (callback) {
        setTimeout(function () { callback(500) }, 5000);
    },
}

module.exports = calculator;