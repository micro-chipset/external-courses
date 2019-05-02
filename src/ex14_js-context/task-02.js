"use strict"

function Hangman(word) {

    let guessedString, errorsLeft, wrongSymbols;

    function startGame(startWord) {
        guessedString = "_".repeat(startWord.length);
        errorsLeft = 6;
        wrongSymbols = [];
    }

    startGame(word);

    this.startAgain = function (newWord) {
        startGame(newWord);
    }

    this.getGuessedString = function () {
        return guessedString;
    }

    this.getErrorsLeft = function () {
        return errorsLeft;
    }

    this.getWrongSymbols = function () {
        return wrongSymbols;
    }

    this.getStatus = function () {
        return `${guessedString} | errors left ${errorsLeft}`;
    }

    this.guess = function (letter) {
        if (errorsLeft <= 0) {
            console.log("Game over");
            return this;
        }
        if (word.indexOf(letter) === -1) {
            errorsLeft--;
            wrongSymbols.push(letter);
            console.log(`wrong letter, errors left ${errorsLeft} | ${wrongSymbols}`);
        }
        if (word.indexOf(letter) > -1) {
            guessedString = guessedString.split("");
            let listLetter = word.split("");

            for (let i = 0; i < listLetter.length; i++) {
                if (letter === listLetter[i]) {
                    guessedString[i] = listLetter[i];
                }
            }
            guessedString = guessedString.join("");
            console.log(guessedString);
        }
        return this;
    }
}

var hangman = new Hangman('webpurple');

module.exports = hangman;